import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'https://blog.miniasp.com';

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    console.log($event);
    if ($event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
    this.counter++;
  }

  isHighlight() {
    return this.counter%2==0;
  }

  subtitleClass() {
    return {
      highlight: this.isHighlight()
    };
  }

}
