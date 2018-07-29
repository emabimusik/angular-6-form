import { Component } from '@angular/core';
import * as Rx  from 'rxjs';
@Component({
  selector: 'app-root',
  template: '<app-child (valueChange)="displayCounter($event)"></app-child>,<form-app></form-app>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
 
  }
  displayCounter(count){
    console.log(count);
   
  }
 
}
