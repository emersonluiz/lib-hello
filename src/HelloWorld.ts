import {Component} from "@angular/core"

@Component({
    selector: 'hello-world',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    directives: [],
    template: `<div>
                 <h1 (click)="onClick()">{{message}}</h1>
                 <h2>Hello {{hello.name}}</h2>
                 <br><input type="text" [(ngModel)]="hello.name">
               </div>`
})
export class HelloWorld {

    message = "Hey, click me!!!";
    hello = {name:""};

    onClick() {
       this.message = "Hello World! This is a lib... ";
        console.log(this.message);
    }

}