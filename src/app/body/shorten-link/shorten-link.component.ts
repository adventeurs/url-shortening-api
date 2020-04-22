import { Component } from '@angular/core';
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
  shortenedLinks: Array< any > =  localStorage.getItem('shortenedLinks') ? [...JSON.parse(localStorage.getItem("shortenedLinks"))] : [];

  rForm = new FormGroup({
    url: new FormControl( '', [
      Validators.required
    ])
  });

  
  get url(){
    return this.rForm.get('url')
  }
   
  constructor(private fb: FormBuilder, private http: HttpClient) { 
  
  }

  isUrl( value ){
    let regex = new RegExp(/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/?|(\/[\w.?#$%&=-]+\/?)*)$/);
    return regex.test(value);
  }

  containsProtocol( value ){
    const regex = new RegExp(/^https?:\/\//);
    return regex.test(value);
  }

  shortenUrl(value){
    if( this.isUrl(value)){
      if(!this.containsProtocol(value))
        value = `https://${value}`;

        let url = { url: value };

        this.http.post(this.reLinkAddr, url)
          .subscribe(val => {
            this.shortenedLinks.push(val);

            localStorage.setItem(
              "shortenedLinks",
              JSON.stringify(this.shortenedLinks)
            );
          });

        this.rForm.reset() ;
      
      }
      else{
        this.url.setErrors({'required': true})
      }
  }

  
}
