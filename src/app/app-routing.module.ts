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
  { path: 'home', loadChildren: './users/users.module#UsersModule' },
  { path: 'todos/:userId', loadChildren: './todos/todos.module#TodosModule' },
  {  path: '**' , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
