import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-shorten-link',
  templateUrl: './shorten-link.component.html',
  styleUrls: ['./shorten-link.component.scss']
})


export class ShortenLinkComponent {
  status: boolean = true;
  reLinkAddr = 'https://rel.ink/api/links/'
  regex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  shortenedLinks: Array< any > =  localStorage.getItem('shortenedLinks') ? JSON.parse(localStorage.getItem("shortenedLinks")) : [];
  copied: boolean = false;

  rForm = new FormGroup({
    url: new FormControl( '', [
      Validators.required,
      Validators.pattern(this.regex)
    ])
  });

  
  get url(){
    return this.rForm.get('url')
  }
   
  constructor(private fb: FormBuilder, private http: HttpClient) { 
  
  }

  shortenUrl(value){

    if(this.rForm.valid){
    let hello =  this.http.post(this.reLinkAddr, value)
      .subscribe(val => this.shortenedLinks.push(val))

      localStorage.setItem(
        "shortenedLinks",
        JSON.stringify(this.shortenedLinks)
      )

      this.rForm.reset() 
      } 

    else {
        console.log(this.status)
        this.status = false;
        console.log(this.status)
      }

  }

  copyToClipboard(value: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.copied = !this.copied

    setTimeout( ()=>{
      this.copied = !this.copied
    }, 1500)
  }
}
