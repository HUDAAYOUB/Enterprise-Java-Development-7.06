export class Todo {
  text: string;
  completed: boolean;
  isPostponed: boolean;

  constructor(text: string, completed: boolean = false, isPostponed: boolean = false) {
    this.text = text;
    this.completed = completed;
    this.isPostponed = isPostponed;
  }
}
