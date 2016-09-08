import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodoApp } from './components/todo/todo';
import { TODO_PROVIDER } from './components/todo/todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [TODO_PROVIDER],
  declarations: [TodoApp],
  bootstrap: [TodoApp]
})
export class AppModule {}






