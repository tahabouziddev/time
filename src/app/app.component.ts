import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { YesService } from './yes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'time';
  constructor( private http:HttpClient, private push:YesService) { }
 taha=
   this.push.create.subscribe(res=>{
     this.bouzid=res
 })
bouzid:boolean

}




