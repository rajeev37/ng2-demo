///<reference path="../../../node_modules/angular2/typings/browser.d.ts"/>
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home}  from '../public/components/home/home';
import {About} from '../public/components/about/about';
import {ToDo}  from '../public/components/todo/todo';
import {Bind}  from '../public/components/binding/bind';

@Component({
    selector: 'layout',
    templateUrl: './layout/layout.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [],

    pipes: []
})

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: Home,
        useAsDefault: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    { path: '/todo',  component: ToDo,  name: 'ToDo'},
    { path: '/bind',  component: Bind,  name: 'Bind'}
])


export class Layout {

    //constructor() {}

}
