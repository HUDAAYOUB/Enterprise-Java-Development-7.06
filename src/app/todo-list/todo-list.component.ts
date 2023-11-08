import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodo: string = '';
  todos: TodoItem[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(new TodoItem(this.newTodo));
      this.newTodo = '';
    }
  }

  completeTodo(todo: TodoItem) {
    todo.completed = true;
  }

  postponeTodo(todo: TodoItem) {
    todo.postponed = true;
  }

  deleteTodo(todo: TodoItem) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  editTodo(todo: TodoItem) {
    const updatedText = prompt('Edit Task', todo.text);
    if (updatedText !== null) {
      todo.text = updatedText;
    }
  }

  cleanCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  restorePostponed() {
    this.todos.forEach((todo) => {
      if (todo.postponed) {
        todo.postponed = false;
      }
    });
  }

}

export class TodoItem {
  constructor(public text: string, public completed: boolean = false, public postponed: boolean = false, public isChecked: boolean = false) {}
}
