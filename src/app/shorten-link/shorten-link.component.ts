import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-shorten-link',
  templateUrl: './shorten-link.component.html',
  styleUrls: ['./shorten-link.component.scss']
})


export class ShortenLinkComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  name : string = '';
  
   
  constructor(private fb: FormBuilder) { 
   
  }


  

  ngOnInit() {
  }


}
