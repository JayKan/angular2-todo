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
var Todo = (function () {
    function Todo(title) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
    Object.defineProperty(Todo.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value.trim();
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
})();
exports.Todo = Todo;
var TodoStore = (function () {
    function TodoStore() {
        var persistedTodos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
        this.todos = persistedTodos.map(function (todo) {
            var ret = new Todo(todo._title);
            ret.completed = todo.completed;
            return ret;
        });
    }
    TodoStore.prototype.updateStore = function () {
        localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
    };
    TodoStore.prototype.getWithCompleted = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoStore.prototype.allCompleted = function () {
        return this.todos.length === this.getCompleted().length;
    };
    TodoStore.prototype.setAllTo = function (completed) {
        this.todos.forEach(function (t) { return t.completed = completed; });
        this.updateStore();
    };
    TodoStore.prototype.removeCompleted = function () {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    };
    TodoStore.prototype.getRemaining = function () {
        return this.getWithCompleted(false);
    };
    TodoStore.prototype.getCompleted = function () {
        return this.getWithCompleted(true);
    };
    TodoStore.prototype.toggleCompletion = function (todo) {
        todo.completed = !todo.completed;
        this.updateStore();
    };
    TodoStore.prototype.remove = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateStore();
    };
    TodoStore.prototype.add = function (title) {
        this.todos.push(new Todo(title));
        this.updateStore();
    };
    TodoStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoStore);
    return TodoStore;
})();
exports.TodoStore = TodoStore;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RvZG8vdG9kby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlRvZG8iLCJUb2RvLmNvbnN0cnVjdG9yIiwiVG9kby50aXRsZSIsIlRvZG9TdG9yZSIsIlRvZG9TdG9yZS5jb25zdHJ1Y3RvciIsIlRvZG9TdG9yZS51cGRhdGVTdG9yZSIsIlRvZG9TdG9yZS5nZXRXaXRoQ29tcGxldGVkIiwiVG9kb1N0b3JlLmFsbENvbXBsZXRlZCIsIlRvZG9TdG9yZS5zZXRBbGxUbyIsIlRvZG9TdG9yZS5yZW1vdmVDb21wbGV0ZWQiLCJUb2RvU3RvcmUuZ2V0UmVtYWluaW5nIiwiVG9kb1N0b3JlLmdldENvbXBsZXRlZCIsIlRvZG9TdG9yZS50b2dnbGVDb21wbGV0aW9uIiwiVG9kb1N0b3JlLnJlbW92ZSIsIlRvZG9TdG9yZS5hZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQztJQVlFQSxjQUFZQSxLQUFhQTtRQUN2QkMsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdkJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFYREQsc0JBQUlBLHVCQUFLQTthQUFUQTtZQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtRQUNyQkEsQ0FBQ0E7YUFDREYsVUFBVUEsS0FBYUE7WUFDckJFLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQzdCQSxDQUFDQTs7O09BSEFGO0lBVUhBLFdBQUNBO0FBQURBLENBakJBLEFBaUJDQSxJQUFBO0FBakJZLFlBQUksT0FpQmhCLENBQUE7QUFFRDtJQUlFRztRQUNFQyxJQUFJQSxjQUFjQSxHQUFHQSxJQUFJ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Q0EsV0FBV0EsRUFBRUEsQ0FBQ0E7SUFDckJBLENBQUNBO0lBekRIWDtRQUFDQSxpQkFBVUEsRUFBRUE7O2tCQTBEWkE7SUFBREEsZ0JBQUNBO0FBQURBLENBMURBLEFBMERDQSxJQUFBO0FBekRZLGlCQUFTLFlBeURyQixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RvZG8vdG9kby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgZWRpdGluZzogYm9vbGVhbjtcbiAgXG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWUudHJpbSgpO1xuICB9XG4gIFxuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUudHJpbSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2RvU3RvcmUge1xuICB0b2RvczogQXJyYXk8VG9kbz47XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgcGVyc2lzdGVkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbmd1bGFyMi10b2RvcycpIHx8ICdbXScpO1xuICAgIC8vIE5vcm1hbGl6ZSBiYWMga2luIHRvIGNsYXNzZXNcbiAgICB0aGlzLnRvZG9zID0gcGVyc2lzdGVkVG9kb3MubWFwKCh0b2RvOiB7X3RpdGxlOiBzdHJpbmcsIGNvbXBsZXRlZDogYm9vbGVhbn0pID0+IHtcbiAgICAgIGxldCByZXQgPSBuZXcgVG9kbyh0b2RvLl90aXRsZSk7XG4gICAgICByZXQuY29tcGxldGVkID0gdG9kby5jb21wbGV0ZWQ7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuICB9XG4gIFxuICBwcml2YXRlIHVwZGF0ZVN0b3JlKCk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmd1bGFyMi10b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudG9kb3MpKTtcbiAgfVxuICBcbiAgcHJpdmF0ZSBnZXRXaXRoQ29tcGxldGVkKGNvbXBsZXRlZDogYm9vbGVhbikge1xuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbHRlcigodG9kbzogVG9kbykgPT4gdG9kby5jb21wbGV0ZWQgPT09IGNvbXBsZXRlZCk7XG4gIH1cblxuICBhbGxDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9kb3MubGVuZ3RoID09PSB0aGlzLmdldENvbXBsZXRlZCgpLmxlbmd0aDtcbiAgfVxuXG4gIHNldEFsbFRvKGNvbXBsZXRlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudG9kb3MuZm9yRWFjaCgodDogVG9kbykgPT4gdC5jb21wbGV0ZWQgPSBjb21wbGV0ZWQpO1xuICAgIHRoaXMudXBkYXRlU3RvcmUoKTtcbiAgfVxuXG4gIHJlbW92ZUNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvZG9zID0gdGhpcy5nZXRXaXRoQ29tcGxldGVkKGZhbHNlKTtcbiAgICB0aGlzLnVwZGF0ZVN0b3JlKCk7XG4gIH1cblxuICBnZXRSZW1haW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2l0aENvbXBsZXRlZChmYWxzZSk7XG4gIH1cblxuICBnZXRDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2l0aENvbXBsZXRlZCh0cnVlKTtcbiAgfVxuICBcbiAgdG9nZ2xlQ29tcGxldGlvbih0b2RvOiBUb2RvKSB7XG4gICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgdGhpcy51cGRhdGVTdG9yZSgpO1xuICB9XG5cbiAgcmVtb3ZlKHRvZG86IFRvZG8pOiB2b2lkIHtcbiAgICB0aGlzLnRvZG9zLnNwbGljZSh0aGlzLnRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xuICAgIHRoaXMudXBkYXRlU3RvcmUoKTtcbiAgfVxuICBcbiAgYWRkKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8odGl0bGUpKTtcbiAgICB0aGlzLnVwZGF0ZVN0b3JlKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=