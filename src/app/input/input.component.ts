import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import  {subtask} from '../subtask.model'
import { task } from '../task.model';
import {goal} from '../goal.model'
import { TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import {map} from 'rxjs/operators'
import { YesService } from '../yes.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor( private http:HttpClient, private push:YesService) { }

  ngOnInit(): void {
  this.push.tahaa().subscribe(res=>{
    this.types=res
  })
  this.push.types.next(this.types)
}
  
  subtasks:subtask[]=[ new subtask("",false)]
  tasks:task
  sub:string
  taskname:string



subo:string=""
onKey(event:any){

this.subo = event.target.value

}

addsubtask(){
  if(this.subo){
  this.subtasks.push(new subtask(this.subo,false))
  }
  
}

types
thetype:string
addtype:string
 addtypo(){ 
  this.types.push(this.addtype)
  this.push.types.next(this.types)
  this.http.put('https://time-ea2ea-default-rtdb.firebaseio.com/types.json',this.types).subscribe()
 }


// addtask(){
//   this.tasks.push(this.sub)
// }
save(){
  if(this.taskname&&this.subo){
  

  

  this.subtasks.push(new subtask(this.subo,false))
   this.subtasks.splice(0,1)
  this.tasks=new task(this.taskname,this.subtasks,0,this.thetype,"gt")
  this.http.post('https://time-ea2ea-default-rtdb.firebaseio.com/testtasks.json',{data: this.tasks}).subscribe(res=>{
    this.push.taha.next(new task(this.tasks.name,this.tasks.subtasks,this.tasks.value,this.tasks.type,res.toString()))
   this.push.create.next(false)

  } 
  
  
  
  )
}



  }



}


