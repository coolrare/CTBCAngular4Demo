import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    http.get('/api/articles.json').subscribe((res) => {
      this.data = res.json();
    });
  }

  data = [];
}
