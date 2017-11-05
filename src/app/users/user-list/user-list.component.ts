import { any } from 'codelyzer/util/function';

import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList = [];
  constructor(
    private http: Http,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getUsers().subscribe((data: any) => {
      this.userList = data;
    });
  }

}
