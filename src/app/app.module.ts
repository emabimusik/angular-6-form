import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }             from '@angular/forms';

import { AppComponent } from './app.component';
import {AppChildComponent} from './child.component';
import {FormComponent} from  './form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
