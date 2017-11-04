import { any } from 'codelyzer/util/function';

import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList = [];
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').
    subscribe((data: any) => {
      console.log(JSON.parse(data._body),"blaaa");
      this.userList = JSON.parse(data._body);
    });
  }

}
