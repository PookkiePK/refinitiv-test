import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
