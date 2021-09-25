import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { YesService } from './yes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {


  title = 'time';
  bouzid:boolean

  constructor( private http:HttpClient, private push:YesService) { }
  ngOnInit(): void{
    this.push.create.subscribe(res=>{
      this.bouzid=res
   
  })

}
}



