import {Component} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import {TodoItem} from '../todo-items/todo-items.ts';
import {TodoService} from '../../../services/todoService.ts';

@Component({
    selector: 'todo-list',
    templateUrl: './public/components/todo-list/todo-list.html',
    providers: [],
    directives: [CORE_DIRECTIVES, TodoItem],
    pipes: []
})
export class TodoList {
    public todos: any;
    //constructor() {
    //
    //    this.todos = TodoService;
    //}
    constructor(todoService: TodoService) {
        this.todos = todoService._todos;
    }
}
