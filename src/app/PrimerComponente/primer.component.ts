import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './primer.component.html',
    styleUrls: ['./primer.component.css']
})

export class HelloWorld {

    constructor(){

        this.age =28;
        this.addres = {
        street: '2218 bake street',
        city: 'londres'
        };

        this.hobbies = ['swiming', 'read','write'];
    }

    name: string = 'Leonardo';
    age: number;
    addres:{
        street: string;
        city: string;
    }

    hobbies: string[];
    
}