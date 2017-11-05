import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { remove, find } from 'lodash';

@Injectable()
export class AppService {
  public currentUserId = 0;
  public currentUser ;
  constructor(private http: Http) {
   }
   public setUserData(user) {
    this.currentUser = user;
   }

   public getUsers(): Observable<any> {
     return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map( (a: any) => { a = JSON.parse(a._body); return a; });
   }

   public getTodos (): Observable<any> {
      const todos = this.getLocalTodos();
      if (todos) {
        return Observable.of(todos);
      }
      return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.currentUserId)
     .map( (a: any) => {
        a = JSON.parse(a._body);
        this.setLocalData(a);
        return a;
       });
   }
   public addTodo(todos, todoTitle) {
     todos.push({
        title: todoTitle,
        completed: false,
        id : + new Date()
      });
      window.scrollTo(0, document.body.scrollHeight + 20 ) ;
      this.setLocalData(todos);
      return todos;

   }
   public deleteTodo(todos, todoId) {
       remove(todos, (o: any) => {
          return o.id == todoId;
        });
        this.setLocalData(todos);
        return todos;
   }
   public markTodoStatus(todos, todo) {
    const match = find(todos, (o: any) => {
        return o.id == todo.id;
     });
     if (match) {
       match.completed = todo.completed;
     }
     this.setLocalData(todos);
     return todos;

   }

   private setLocalData(todos) {
    let localTodos =  JSON.parse(window.localStorage.getItem('todos'));
    if (localTodos === null) {
      localTodos = [];
      localTodos.push({
        userId: this.currentUserId,
        todos: todos,
        user: this.currentUser
      });
    }else {
     const userTodo = find(localTodos,  (o: any) => {
        return o.userId == this.currentUserId;
      });
      if (userTodo) {
        userTodo.todos = todos;
      }else {
        localTodos.push({
        userId: this.currentUserId,
        todos: todos,
        user: this.currentUser
      });
      }
    }
    window.localStorage.setItem('todos', JSON.stringify(localTodos));
   }

   private getLocalTodos() {
     const localTodos =  JSON.parse(window.localStorage.getItem('todos'));
     let userTodo = find(localTodos,  (o: any) => {
        return o.userId == this.currentUserId;
      });
      if (userTodo) {
        this.currentUser = userTodo.user;
        userTodo = userTodo.todos;
        console.log(userTodo,"blu");
      }
      return userTodo;
   }
}
