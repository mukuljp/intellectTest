import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() public todo ;
  constructor() { }

  ngOnInit() {
  }
  public toggleComplete() {
    this.todo.completed = !this.todo.completed ;
  }

}
