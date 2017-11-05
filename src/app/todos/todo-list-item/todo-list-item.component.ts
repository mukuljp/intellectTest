import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() public todo ;
  @Input() public diableClose = false ;
  @Output() deleteAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() onChangeStatus: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  public toggleComplete() {
    this.todo.completed = !this.todo.completed ;
    this.onChangeStatus.emit(this.todo);
  }
  public deleteTodo(e, todo) {
    e.stopPropagation();
    this.deleteAction.emit(todo.id);
  }

}
