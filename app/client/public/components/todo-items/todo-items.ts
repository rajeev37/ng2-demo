import {Component} from 'angular2/core';
import { CORE_DIRECTIVES, NgClass } from 'angular2/common';
import {TodoService} from '../../../services/todoService.ts';
@Component({
    selector: 'todo-item',
    properties: ['todo'],
    directives: [CORE_DIRECTIVES, NgClass],
    styles: [
        `
        .todo-item.completed{
          text-decoration: line-through;
        }
        `
    ],
    template: `
      <li [ngClass]="getTodoItemClass(todo)">
        {{todo.content}}
        -
        <a (click)="todoService.completed(todo)">Completed</a>
        -
        <a (click)="todoService.delete(todo)">Delete</a>
      </li>
      `
})
export class TodoItem {
    constructor(private todoService: TodoService) {
    }
    getTodoItemClass(todo) {
        return {
            completed: todo.isCompleted === true,
            "todo-item": true
        }
    }
}