import {Component} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = 'test';

  // data: any = [];

  constructor(public datasvc: DataService) {
    // this.data = datasvc.data;
  }

  doSearch(k) {
    this.keyword = k;
  }

  Show(tHeader) {
    console.log(tHeader);
  }

  doDelete(item) {
    let idx = this.datasvc.data.indexOf(item);
    this.datasvc.data.splice(idx, 1);
  }

}
