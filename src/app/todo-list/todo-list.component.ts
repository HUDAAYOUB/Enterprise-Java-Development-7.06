import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodo: string = '';
  todos: { text: string; completed: boolean; postponed: boolean }[] = [];
  addTodo() {
    if (this.newTodo) {
      this.todos.push({ text: this.newTodo, completed: false, postponed: false });
      this.newTodo = '';
    }
  }

  completeTodo(todo: any) {
    todo.completed = !todo.completed; // Toggle the completed status
  }

  postpone(todo: any) {
    todo.postponed = true;
  }

  deleteTodo(todo: any) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  editTodo(todo: any) {
    const updatedText = prompt('Edit Todo', todo.text);
    if (updatedText !== null) {
      todo.text = updatedText;
    }
  }

  cleanCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  restorePostponed() {
    this.todos.forEach((todo) => (todo.postponed = false));
  }
}
