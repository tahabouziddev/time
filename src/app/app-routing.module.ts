import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import {InputComponent} from './input/input.component'
import { Injectable } from '@angular/core';

const routes: Routes = [
];

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
