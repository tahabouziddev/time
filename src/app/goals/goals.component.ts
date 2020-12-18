import { Component, OnInit } from '@angular/core';
import  {subtask} from '../subtask.model'
import { task } from '../task.model';
import {goal} from '../goal.model'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
   
  this.http.get('https://time-ea2ea-default-rtdb.firebaseio.com/testtasks.json',{observe:"body"}).pipe(map(resp=>{
  const realresponse = []
  for (const key in resp){
    realresponse.push({ ...resp[key], id:key})
  }
return realresponse
  }))
  
  
  .subscribe(res=>{
res.forEach(yes => {
  this.tasks.push(yes.data)
  console.log(this.tasks);
  
})

  })



  }

subtasks:subtask[]=[new subtask('doit',false),new subtask('doitoo',false)]
tasks:task[]=[new task('this is a task',this.subtasks,0),new task('this is a uihuihihitask',this.subtasks,0)]
goals:goal[]=[new goal('goaaaaaal',this.tasks,0),new goal('goajhiuhihiuhiuhaaaaal',this.tasks,0)]

value:boolean=false




}
