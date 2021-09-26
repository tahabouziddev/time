import { Component, OnInit } from '@angular/core';
import  {subtask} from '../subtask.model'
import { task } from '../task.model';
import {goal} from '../goal.model'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { YesService } from '../yes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor(private http:HttpClient,private push:YesService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
  this.gettasks("")
 this.push.tahaa().subscribe(res=>{
   this.sort=res
 })
 

}

sort
toto=false
tr=""
tas(){
 this.toto=!this.toto
 this.tasks.splice(0,this.tasks.length)
 if(this.toto){
this.gettasks("/archived")
 }else{
  this.gettasks("")


 }
}
tasa(){
  this.push.create.next(true)
}
gettasks(e:string): void{
  this.http.get(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso${e}.json`,{observe:"body"}).pipe(map(resp=>{
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
this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/${res.id+'.json'}`,{data:res}).subscribe();


})

ret:string
sho=true
notsho=!this.sho

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

  this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/${f.id}/data/subtasks/${bo}/value.json`,
  e.value).subscribe(res=>{console.log(res);
  });
  this.http.put(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/${f.id}/data/value.json`,
  f.value).subscribe(res=>{console.log(res);
  });
   
}
check:boolean=false
ter:string[]=[]
checko(r){
  
  this.ter.push(r.id) 
  console.log(this.ter)
  }

functiono(elemoo,execute){
if(execute){

  if(this.ter.indexOf(elemoo.id)> -1){
    this.tasks.splice(this.tasks.indexOf(elemoo),1)   
         
        }

execute=false
}
}


functionu(elemoo,execute){
  if(execute){
  
    if(this.ter.indexOf(elemoo.id)> -1){
      this.tasks.splice(this.tasks.indexOf(elemoo),1)   
      
      this.http.post('https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/archived.json/',{data:elemoo}).subscribe(res=>
      {console.log(res)});
          }
  
  execute=false
  }
  }



bitcho(){
  let execute=true


  this.tasks.forEach(elemo=>{
    console.log(elemo);

  this.functiono(elemo,execute)
   
    
  })





  this.ter.forEach(elem=>{
   // this.http.delete(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/${elem+'.json'}`).subscribe();

 
 
      
    
      } )







}


bitchoo(){

  let execute=true


  this.tasks.forEach(elemo=>{

  this.functionu(elemo,execute)
   
    
  


})




  this.ter.forEach(elem=>{
    
   
      this.http.delete(`https://time-ea2ea-default-rtdb.firebaseio.com/testtaskso/${elem+'.json'}`).subscribe();
    
    
    
  
        
  })
  }






bitch(){
   this.check  = !this.check
   
}
  
  

}
