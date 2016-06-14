var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo.service');
var TodoApp = (function () {
    function TodoApp(_todoStore) {
        this._todoStore = _todoStore;
        this.newTodoText = '';
    }
    TodoApp.prototype.addTodo = function () {
        if (this.newTodoText.trim().length) {
            this._todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    };
    TodoApp.prototype.editTodo = function (todo) {
        todo.editing = true;
    };
    TodoApp.prototype.cancelEditingTodo = function (todo) {
        todo.editing = false;
    };
    TodoApp.prototype.stopEditing = function (todo, editedTitle) {
        todo.title = editedTitle;
        todo.editing = false;
    };
    TodoApp.prototype.updateEditingTodo = function (todo, editedTitle) {
        editedTitle = editedTitle.trim();
        todo.editing = false;
        if (editedTitle.length === 0) {
            return this._todoStore.remove(todo);
        }
        todo.title = editedTitle;
    };
    TodoApp.prototype.remove = function (todo) {
        this._todoStore.remove(todo);
    };
    TodoApp.prototype.toggleCompletion = function (todo) {
        this._todoStore.toggleCompletion(todo);
    };
    TodoApp.prototype.removeCompleted = function () {
        this._todoStore.removeCompleted();
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            template: "\n  <section class=\"todoapp\">\n    <header class=\"header\">\n      <h1>todos</h1>\n      <input class=\"new-todo\" \n             placeholder=\"What needs to be done?\"             \n             [(ngModel)]=\"newTodoText\" \n             (keyup.enter)=\"addTodo()\">\n    </header>\n    <section class=\"main\" *ngIf=\"_todoStore.todos.length > 0\">\n      <input class=\"toggle-all\" \n             type=\"checkbox\" \n             *ngIf=\"_todoStore.todos.length\" \n             #toggleall \n             [checked]=\"_todoStore.allCompleted()\" \n             (click)=\"_todoStore.setAllTo(toggleall.checked)\">\n      <ul class=\"todo-list\">\n        <li *ngFor=\"let todo of _todoStore.todos\" \n            [class.completed]=\"todo.completed\" \n            [class.editing]=\"todo.editing\">\n          <div class=\"view\">\n            <input class=\"toggle\" \n                   type=\"checkbox\" \n                   (click)=\"toggleCompletion(todo)\" \n                   [checked]=\"todo.completed\"\n            >\n            <label (dblclick)=\"editTodo(todo)\">{{todo.title}}</label>\n            <button class=\"destroy\" (click)=\"remove(todo)\"></button>\n          </div>\n          <input class=\"edit\" \n                 *ngIf=\"todo.editing\" \n                 [value]=\"todo.title\" \n                 #editedTodo \n                 (blur)=\"stopEditing(todo, editedTodo.value)\" \n                 (keyup.enter)=\"updateEditingTodo(todo, editedTodo.value)\" \n                 (keyup.escape)=\"cancelEditingTodo(todo)\">\n        </li>\n      </ul>\n    </section>\n    <footer class=\"footer\" *ngIf=\"_todoStore.todos.length > 0\">\n      <span class=\"todo-count\">\n        <strong>{{ _todoStore.getRemaining().length }}</strong> \n          {{ _todoStore.getRemaining().length == 1 ? 'item' : 'items'}} left\n        </span>\n      <button class=\"clear-completed\" \n              *ngIf=\"_todoStore.getCompleted().length > 0\" \n              (click)=\"removeCompleted()\">Clear completed\n      </button>\n    </footer>\n</section>\n\n  "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoStore])
    ], TodoApp);
    return TodoApp;
})();
exports.TodoApp = TodoApp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RvZG8vdG9kby50cyJdLCJuYW1lcyI6WyJUb2RvQXBwIiwiVG9kb0FwcC5jb25zdHJ1Y3RvciIsIlRvZG9BcHAuYWRkVG9kbyIsIlRvZG9BcHAuZWRpdFRvZG8iLCJUb2RvQXBwLmNhbmNlbEVkaXRpbmdUb2RvIiwiVG9kb0FwcC5zdG9wRWRpdGluZyIsIlRvZG9BcHAudXBkYXRlRWRpdGluZ1RvZG8iLCJUb2RvQXBwLnJlbW92ZSIsIlRvZG9BcHAudG9nZ2xlQ29tcGxldGlvbiIsIlRvZG9BcHAucmVtb3ZlQ29tcGxldGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsNkJBQWdDLGdCQUFnQixDQUFDLENBQUE7QUFFakQ7SUEyREVBLGlCQUFvQkEsVUFBcUJBO1FBQXJCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtRQUZ6Q0EsZ0JBQVdBLEdBQVdBLEVBQUVBLENBQUNBO0lBRW1CQSxDQUFDQTtJQUU3Q0QseUJBQU9BLEdBQVBBO1FBQ0VFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ25DQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUN0Q0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDeEJBLENBQUNBO0lBQ0hBLENBQUNBO0lBRURGLDBCQUFRQSxHQUFSQSxVQUFTQSxJQUFVQTtRQUNqQkcsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBRURILG1DQUFpQkEsR0FBakJBLFVBQWtCQSxJQUFVQTtRQUMxQkksSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRURKLDZCQUFXQSxHQUFYQSxVQUFZQSxJQUFVQSxFQUFFQSxXQUFtQkE7UUFDekNLLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFdBQVdBLENBQUNBO1FBQ3pCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFFREwsbUNBQWlCQSxHQUFqQkEsVUFBa0JBLElBQVVBLEVBQUVBLFdBQW1CQTtRQUMvQ00sV0FBV0EsR0FBR0EsV0FBV0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDakNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO1FBRXJCQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdENBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFdBQVdBLENBQUNBO0lBQzNCQSxDQUFDQTtJQUVETix3QkFBTUEsR0FBTkEsVUFBT0EsSUFBVUE7UUFDZk8sSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRURQLGtDQUFnQkEsR0FBaEJBLFVBQWlCQSxJQUFVQTtRQUN6QlEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUN6Q0EsQ0FBQ0E7SUFFRFIsaUNBQWVBLEdBQWZBO1FBQ0VTLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO0lBQ3BDQSxDQUFDQTtJQXJHSFQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLFVBQVVBO1lBQ3BCQSxRQUFRQSxFQUFFQSwraEVBbURUQTtTQUNGQSxDQUFDQTs7Z0JBZ0REQTtJQUFEQSxjQUFDQTtBQUFEQSxDQXRHQSxBQXNHQ0EsSUFBQTtBQTlDWSxlQUFPLFVBOENuQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RvZG8vdG9kby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9kb1N0b3JlLCBUb2RvIH0gZnJvbSAnLi90b2RvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b2RvLWFwcCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJuZXctdG9kb1wiIFxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibmV3VG9kb1RleHRcIiBcbiAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwiYWRkVG9kbygpXCI+XG4gICAgPC9oZWFkZXI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCIgKm5nSWY9XCJfdG9kb1N0b3JlLnRvZG9zLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIiBcbiAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAqbmdJZj1cIl90b2RvU3RvcmUudG9kb3MubGVuZ3RoXCIgXG4gICAgICAgICAgICAgI3RvZ2dsZWFsbCBcbiAgICAgICAgICAgICBbY2hlY2tlZF09XCJfdG9kb1N0b3JlLmFsbENvbXBsZXRlZCgpXCIgXG4gICAgICAgICAgICAgKGNsaWNrKT1cIl90b2RvU3RvcmUuc2V0QWxsVG8odG9nZ2xlYWxsLmNoZWNrZWQpXCI+XG4gICAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB0b2RvIG9mIF90b2RvU3RvcmUudG9kb3NcIiBcbiAgICAgICAgICAgIFtjbGFzcy5jb21wbGV0ZWRdPVwidG9kby5jb21wbGV0ZWRcIiBcbiAgICAgICAgICAgIFtjbGFzcy5lZGl0aW5nXT1cInRvZG8uZWRpdGluZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIiBcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ29tcGxldGlvbih0b2RvKVwiIFxuICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInRvZG8uY29tcGxldGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCAoZGJsY2xpY2spPVwiZWRpdFRvZG8odG9kbylcIj57e3RvZG8udGl0bGV9fTwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVzdHJveVwiIChjbGljayk9XCJyZW1vdmUodG9kbylcIj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCIgXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwidG9kby5lZGl0aW5nXCIgXG4gICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ0b2RvLnRpdGxlXCIgXG4gICAgICAgICAgICAgICAgICNlZGl0ZWRUb2RvIFxuICAgICAgICAgICAgICAgICAoYmx1cik9XCJzdG9wRWRpdGluZyh0b2RvLCBlZGl0ZWRUb2RvLnZhbHVlKVwiIFxuICAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwidXBkYXRlRWRpdGluZ1RvZG8odG9kbywgZWRpdGVkVG9kby52YWx1ZSlcIiBcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVzY2FwZSk9XCJjYW5jZWxFZGl0aW5nVG9kbyh0b2RvKVwiPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiICpuZ0lmPVwiX3RvZG9TdG9yZS50b2Rvcy5sZW5ndGggPiAwXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj5cbiAgICAgICAgPHN0cm9uZz57eyBfdG9kb1N0b3JlLmdldFJlbWFpbmluZygpLmxlbmd0aCB9fTwvc3Ryb25nPiBcbiAgICAgICAgICB7eyBfdG9kb1N0b3JlLmdldFJlbWFpbmluZygpLmxlbmd0aCA9PSAxID8gJ2l0ZW0nIDogJ2l0ZW1zJ319IGxlZnRcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWNvbXBsZXRlZFwiIFxuICAgICAgICAgICAgICAqbmdJZj1cIl90b2RvU3RvcmUuZ2V0Q29tcGxldGVkKCkubGVuZ3RoID4gMFwiIFxuICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlQ29tcGxldGVkKClcIj5DbGVhciBjb21wbGV0ZWRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuXG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb2RvQXBwIHtcbiAgbmV3VG9kb1RleHQ6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvZG9TdG9yZTogVG9kb1N0b3JlKSB7fVxuXG4gIGFkZFRvZG8oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmV3VG9kb1RleHQudHJpbSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fdG9kb1N0b3JlLmFkZCh0aGlzLm5ld1RvZG9UZXh0KTtcbiAgICAgIHRoaXMubmV3VG9kb1RleHQgPSAnJztcbiAgICB9XG4gIH1cblxuICBlZGl0VG9kbyh0b2RvOiBUb2RvKTogdm9pZCB7XG4gICAgdG9kby5lZGl0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbEVkaXRpbmdUb2RvKHRvZG86IFRvZG8pOiB2b2lkIHtcbiAgICB0b2RvLmVkaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKHRvZG86IFRvZG8sIGVkaXRlZFRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0b2RvLnRpdGxlID0gZWRpdGVkVGl0bGU7XG4gICAgdG9kby5lZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVFZGl0aW5nVG9kbyh0b2RvOiBUb2RvLCBlZGl0ZWRUaXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZWRpdGVkVGl0bGUgPSBlZGl0ZWRUaXRsZS50cmltKCk7XG4gICAgdG9kby5lZGl0aW5nID0gZmFsc2U7XG5cbiAgICBpZiAoZWRpdGVkVGl0bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdG9kb1N0b3JlLnJlbW92ZSh0b2RvKTtcbiAgICB9XG4gICAgdG9kby50aXRsZSA9IGVkaXRlZFRpdGxlO1xuICB9XG5cbiAgcmVtb3ZlKHRvZG86IFRvZG8pOiB2b2lkIHtcbiAgICB0aGlzLl90b2RvU3RvcmUucmVtb3ZlKHRvZG8pO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGlvbih0b2RvOiBUb2RvKTogdm9pZCB7XG4gICAgdGhpcy5fdG9kb1N0b3JlLnRvZ2dsZUNvbXBsZXRpb24odG9kbyk7XG4gIH1cblxuICByZW1vdmVDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fdG9kb1N0b3JlLnJlbW92ZUNvbXBsZXRlZCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=