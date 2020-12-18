
import {subtask} from './subtask.model'
import {task} from './task.model'

export class goal {
    name:string
    tasks:task[]
    value:number
   
   constructor(name:string,tasks:task[],value:number){
   
       this.name=name
       this.tasks=tasks
       this.value=value
   
   }
   
   
   }