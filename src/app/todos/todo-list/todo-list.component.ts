import { Http } from '@angular/http';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todosList = [];
  public newTodo: string;
  public disbleTodoDelete = false;
  public user;
  constructor(
    private route: ActivatedRoute,
    private http: Http,
    private appService: AppService
  ) {
    this.route.params.subscribe((data) => {
      this.user = { name : ''};
        console.log(data,"blaa");
        this.appService.currentUserId = data.userId;
        this.appService.getTodos().subscribe((todos: any) => {
          this.todosList = todos;
          this.user = this.appService.currentUser;
        });
    });
    
  }

  ngOnInit() {
  }
  keyDownFunction(event) {
    if (event.keyCode == 13 && this.newTodo !== '') {
      this.todosList = this.appService.addTodo(this.todosList , this.newTodo);
      this.newTodo = '';
    }
  }

  public deleteTodo(e) {
    // this.disbleTodoDelete = true;
    // this.http.delete('https://jsonplaceholder.typicode.com/todos/' +  e ).subscribe((data) => {
       // this.disbleTodoDelete = false;
       this.todosList = this.appService.deleteTodo(this.todosList, e);
  //   },
  //   () => { this.disbleTodoDelete = false; }
  //   );
     }

  public changeTodoStatus(e) {
    this.todosList = this.appService.markTodoStatus(this.todosList, e);
  }
}
