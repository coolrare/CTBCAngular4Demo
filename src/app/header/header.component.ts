import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'https://blog.miniasp.com';

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.sitename = 'The Will Will Web';
  }

}
