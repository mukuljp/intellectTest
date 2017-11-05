import { Component, Input, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {


  @Input() public userItem ;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }
  public setUser() {
    this.appService.setUserData(this.userItem);
    console.log("fooo");
  }
}
