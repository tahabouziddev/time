
import {subtask} from './subtask.model'


export class task {
    id:string
    name:string
    subtasks:subtask[]
    type:string
    value:number

   constructor(name:string,subtasks:subtask[],value:number,type:string,id:string,){
    this.id=id
    this.name=name
    this.subtasks=subtasks
    this.type=type
    this.value=value

   }
   
   
   }