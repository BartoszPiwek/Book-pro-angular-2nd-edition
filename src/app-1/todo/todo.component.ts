import { Component, ViewChild, ElementRef } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  model = new Model();
  @ViewChild('todoAction', { static: true }) public input: ElementRef;

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addTodo(todoAction: string) {
    if (todoAction === '') {
      return;
    }
    this.model.items.push(new TodoItem(todoAction, false));
    this.input.nativeElement.value = '';
  }
}
