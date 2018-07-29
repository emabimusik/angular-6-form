import { Component } from '@angular/core';

import {ReactiveFormsModule, FormGroup, 
    FormControl, Validators, FormBuilder} from
"@angular/forms";
import { map, filter } from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'form-app',
  templateUrl:'./form.component.html',
  //styleUrls: ['./app.component.css']
})
export class FormComponent {
    form: FormGroup;
    comment = new FormControl("",Validators.required);
    name= new FormControl("",Validators.required);
    email = new FormControl("",[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]);
 /* Observable Solution */
 constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
        .filter(data => this.form.valid)
        .map(data => {
          data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, ' ');
          return data
        })
        .map(data => {
          data.lastUpdateTS = new Date();
          return data
        })
        .subscribe( data => console.log(JSON.stringify(data)));
  }
    /* Observable Solution */
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     comment: this.comment,
  //     name: this.name,
  //     email: this.email
  //   });
  //   this.form.valueChanges
  //     .pipe(
  //       filter(data => this.form.valid),
  //       map(data => {
  //         data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, "");
  //         return data;
  //       }),
  //       map(data => {
  //         data.lastUpdateTS = new Date();
  //         return data;
  //       })
  //     )
  //     .subscribe(data => console.log(JSON.stringify(data)));
  // }
    onSubmit() {
          console.log("Form submitted!");
          }
    
}