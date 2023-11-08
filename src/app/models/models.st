export class TodoItem {
  private _text: string;
  private _completed: boolean;
  private _postponed: boolean;
  private _isChecked: boolean;

  constructor(text: string, completed: boolean = false, postponed: boolean = false, isChecked: boolean = false) {
    this._text = text;
    this._completed = completed;
    this._postponed = postponed;
    this._isChecked = isChecked;
  }

  get text(): string {
    return this._text;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  get postponed(): boolean {
    return this._postponed;
  }

  set postponed(postponed: boolean) {
    this._postponed = postponed;
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(isChecked: boolean) {
    this._isChecked = isChecked;
  }
}
