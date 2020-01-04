import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    features: Array<string> = ['Link Shortening', 'Branded Links', 'Analytics'];
    resources: Array<string> = ['Blog', 'Developers', 'Support'];
    company: Array<string> = ['About', 'Our Team', 'Careers', 'Contact'];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
