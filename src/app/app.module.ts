import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BmiComponent } from './bmi/bmi.component';
import {FormsModule} from "@angular/forms";
import { IdiotCheckComponent } from './idiot-check/idiot-check.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    IdiotCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
