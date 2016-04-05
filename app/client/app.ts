import 'angular2/bundles/angular2-polyfills';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Component} from 'angular2/core';
import {Layout} from "./layout/layout";
import {TodoService} from './services/todoService.ts';




bootstrap(Layout, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
    .catch(err => console.error(err));



//bootstrap(Layout, [HTTP_PROVIDERS, ROUTER_PROVIDERS, TodoService])
//    .catch(err => console.error(err));