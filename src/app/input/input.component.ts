import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import  {subtask} from '../subtask.model'
import { task } from '../task.model';
import {goal} from '../goal.model'
import { TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  subtasks:subtask[]=[ new subtask("",false) ]
  tasks:task
  sub:string
  taskname:string


//   @ViewChild('test') test :ElementRef;


// ngAfterViewInit() {
// this.yes=this.test.nativeElement.value
//     console.log(this.yes);
    
//     }
addsubtask(){
  this.subtasks.push(new subtask(this.sub,false))
}
// addtask(){
//   this.tasks.push(this.sub)
// }
save(){

  this.tasks=new task(this.taskname,this.subtasks,0)
  this.http.post('https://time-ea2ea-default-rtdb.firebaseio.com/testtasks.json',{data: this.tasks}).subscribe(res=>{
    console.log(res);
    
  }  )

//   this.http.get('https://my-diary-d61dd.firebaseio.com/',{observe:"body"}).subscribe(res=>{
//   console.log(res);
  
//   })
//   this.subtasks
 }

}
