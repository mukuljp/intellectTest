import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export function getUserModule() {
  return UsersModule;
}

export function getTodosModule() {
  return TodosModule;
}
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: getUserModule },
  { path: 'todos/:userId', loadChildren: getTodosModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
