import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-shorten-link',
  templateUrl: './shorten-link.component.html',
  styleUrls: ['./shorten-link.component.scss']
})


export class ShortenLinkComponent {
  reLinkAddr = 'https://rel.ink/api/links/'
  regex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  shortenedLinks: Array< any > =  localStorage.getItem('shortenedLinks') ? JSON.parse(localStorage.getItem("shortenedLinks")) : [];

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
      console.log(this.shortenedLinks) 

      this.rForm.reset()
    } 
  }
}
