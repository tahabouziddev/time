import { Component, OnInit } from '@angular/core';
import  {subtask} from '../subtask.model'
import { task } from '../task.model';
import {goal} from '../goal.model'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { YesService } from '../yes.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor(private http:HttpClient,private push:YesService) { }
  ngOnInit(): void {
  this.gettasks()
  this.push.types.subscribe(res=>{
    this.sort=res
  })
  }



gettasks(){
   
  this.http.get('https://time-ea2ea-default-rtdb.firebaseio.com/testtasks.json',{observe:"body"}).pipe(map(resp=>{
  const realresponse = []
  for (const key in resp){
    realresponse.push({ ...resp[key], id:key})
  }
return realresponse
  }))
  
  
  .subscribe(res=>{
res.forEach(yes => {
  let dio:task =new task(yes.data.name,yes.data.subtasks,yes.data.value,yes.data.type,yes.data.id)
  this.tasks.push(dio)
  
})


  })


}




subtasks:subtask[]=[]
tasks:task[]=[]
sortedtasks:task[]=[]
goals:goal[]=[]
bo3o=this.push.taha.subscribe(res=>{
  console.log(res);
  
this.tasks.push(res)
this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtasks/${res.id+'.json'}`,{data:res}).subscribe();


})

ret:string
sho=true
notsho=!this.sho
sort
value:boolean=false
valalalaalalalalalala

tasoa(){
  this.sortedtasks.splice(0,this.sortedtasks.length) 
  this.tasks.forEach(elem=>{
    if (elem.type==this.ret){
      this.sortedtasks.push(elem)
      
    }

  }
  
  )
this.sho=false
this.notsho=true
 }

tasoaa(){
this.sho=true
this.notsho=false
console.log(this.sho);
console.log(this.notsho);


}



wait(e,f){
  let bo = f.subtasks.indexOf(e);
  //    f.subtasks[a].value=!f.subtasks[a].value
  // 
  
  let a= 0

  this.valalalaalalalalalala=!f.subtasks[bo].value
f.subtasks.forEach(element => {
  if(  element.value
==true    ){
  a++
  this.valalalaalalalalalala=a
}

});
let b = f.subtasks.length
  f.value= a / b*100

  this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtasks/${f.id}/data/subtasks/${bo}/value.json`,
  f.value).subscribe(res=>{console.log(res);
  });
  this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtasks/${f.id}/data/value.json`,
  f.value).subscribe(res=>{console.log(res);
  });
   
}
check:boolean=false
ter
checko
(r){
  this.tasks.forEach(elem=>{
if (elem=r){
  this.http.delete(`https://time-ea2ea-default-rtdb.firebaseio.com/testtasks/${elem.id+'.json'}`).subscribe();


}

  })
this.ter = r

}
bitcho(){
      this.ter


}

bitchoo(){
  this.http.post('https://time-ea2ea-default-rtdb.firebaseio.com/archived.json/',{data:this.ter}).subscribe(res=>{console.log(res);
  });
  this.bitcho()
}

bitch(){
   this.check  = !this.check
   
}
  
  

}
