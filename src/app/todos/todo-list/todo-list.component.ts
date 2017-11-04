import { Http } from '@angular/http';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todosList = [];
  public newTodo: string;
  constructor(
    private route: ActivatedRoute,
    private http: Http
  ) {
    this.route.params.subscribe((data) => {
        console.log(data,"blaa");
        this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + data.userId).subscribe((data: any) => {
          console.log(data,"pheee");
          this.todosList = JSON.parse(data._body);
        });
    });
  }

  ngOnInit() {
  }
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.todosList.push({
        title: this.newTodo,
        completed: false
      });
      this.newTodo = '';
      window.scrollTo(0,document.body.scrollHeight);

      // rest of your code
    }
  }
}
