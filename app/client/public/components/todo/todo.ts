import {Component} from 'angular2/core';
import {TodoList} from '../todo-list/todo-list.ts';

@Component({
    selector: 'todo',
    templateUrl: './public/components/todo/todo.html',
    providers: [],
    directives: [TodoList],
    pipes: []
})
//export default class TodoList {
//}
export class ToDo {

    constructor() {}

}