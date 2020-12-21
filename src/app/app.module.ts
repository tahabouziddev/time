import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { GoalsComponent } from './goals/goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { IndexComponent } from './index/index.component'; 
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    GoalsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
