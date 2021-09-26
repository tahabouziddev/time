import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {task} from './task.model'

@Injectable({
  providedIn: 'root'
})
export class YesService {

  constructor( private http:HttpClient) { }

  tahaa(){
    
  return this.http.get('https://time-ea2ea-default-rtdb.firebaseio.com/types.json',{observe:"body"})
  
}
  smthg(){
    
  }







taha=new Subject<task>()

types= new Subject<any>()
create= new Subject<any>()

}
