import {Component} from 'angular2/core';
interface Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'bind',
    providers: [],
    templateUrl: './public/components/binding/bind.html',
    directives: [],
    pipes: []
})


export class Bind {
    public title = 'Binding in Angular2';
    public heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }

    constructor() {}
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
