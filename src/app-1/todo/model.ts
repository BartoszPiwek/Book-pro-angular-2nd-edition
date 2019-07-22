export class TodoItem {
  action: string;
  done: boolean;

  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}

export class Model {
  user;
  items;

  constructor() {
    this.user = 'Adam';
    this.items = [
      new TodoItem('Kupić kwiaty', false),
      new TodoItem('Kupić buty', false),
      new TodoItem('Odebrać bilety', true),
      new TodoItem('Zadzwonić do Janka', false),
    ];
  }
}
