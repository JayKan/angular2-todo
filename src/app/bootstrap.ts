import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TodoApp } from './components/todo/todo';
import { TodoStore } from './components/todo/todo.service';

// enable prod for faster renders
enableProdMode();

bootstrap(TodoApp, [TodoStore])
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.error(error))
;