import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {task} from './task.model'

@Injectable({
  providedIn: 'root'
})
export class YesService {

  constructor() { }
  
taha=new Subject<task>()
types= new Subject<any>()


}
