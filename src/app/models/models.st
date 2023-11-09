export class Todo {
  private _text: string;
  private _completed: boolean;
  private _Postponed: boolean;

  constructor(text: string, completed: boolean = false, Postponed: boolean = false) {
    this._text = text;
    this._completed = completed;
    this._Postponed = Postponed;
    }
  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

 
  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }

 
  get Postponed(): boolean {
    return this._Postponed;
  }

  set Postponed(value: boolean) {
    this._Postponed = value;
  }
}
