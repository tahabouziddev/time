
import {subtask} from './subtask.model'


export class task {
    name:string
    subtasks:subtask[]
    value:number
   
   constructor(name:string,subtasks:subtask[],value:number){
   
       this.name=name
       this.subtasks=subtasks
       this.value=value
   
   }
   
   
   }