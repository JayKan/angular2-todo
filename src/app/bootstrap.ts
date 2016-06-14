import { bootstrap } from '@angular/platform-browser-dynamic';
import { TodoApp } from './components/todo/todo';
import { TodoStore } from './components/todo/todo.service';

bootstrap(TodoApp, [TodoStore])
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.error(error))
;