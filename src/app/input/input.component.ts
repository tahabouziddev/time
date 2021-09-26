import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import  {subtask} from '../subtask.model'
import { task } from '../task.model';
import { FormsModule, NgForm } from '@angular/forms';
import { YesService } from '../yes.service';
import { map } from 'rxjs/operators';
import { getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor( private http:HttpClient, private push:YesService) { }

  gettypes(){
    this.push.tahaa().pipe(map(res=>{
      const realresponse = []
  
        for (const key in res){
          realresponse.push({ ...res[key], id:key,})
        }
      return realresponse
      
        }))
        .subscribe(res=>{
          console.log(res);
          
    res.forEach(elem=>{
     this.types.push(elem.type)
     console.log(elem.type);
     this.push.types.next(this.types)


})



        })
  
  
  }
  ngOnInit(): void {
this.gettypes()
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

types:string[]=[]
thetype:string
addtype:string
 addtypo(){ 
 this.gettypes()
  this.types.push(this.addtype)
  this.push.types.next(this.types)
  this.http.post('https://time-ea2ea-default-rtdb.firebaseio.com/types.json',{type :this.addtype}).subscribe(res=>{console.log(res);
  })
 }
resname:string

// addtask(){
//   this.tasks.push(this.sub)
// }
save(){
  if(this.taskname&&this.subo){
  

  

  this.subtasks.push(new subtask(this.subo,false))
   this.subtasks.splice(0,1)
  this.tasks=new task(this.taskname,this.subtasks,0,this.thetype,"gt")
  this.http.post('https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso.json',{data: this.tasks}).subscribe((res:any)=>{
   this.resname=res.name
    
    console.log(this.resname);
    
    
    this.push.taha.next(new task(this.tasks.name,this.tasks.subtasks,this.tasks.value,this.tasks.type,this.resname))
   this.push.create.next(false)
   this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/${this.resname}.json`,{data:
   new task(this.tasks.name,this.tasks.subtasks,this.tasks.value,this.tasks.type,this.resname)
  }).subscribe(res=>{
     //console.log(res);
     
   })

   } 
  
  
  
  )
}



  }



}


