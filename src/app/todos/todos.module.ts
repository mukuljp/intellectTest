import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  declarations: [TodoListComponent, TodoListItemComponent]
})
export class TodosModule { }
