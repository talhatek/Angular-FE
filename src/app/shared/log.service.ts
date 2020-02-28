import { Injectable } from '@angular/core';
import { Log } from './log.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LogService {
  formData:Log;
  readonly root="http://localhost:5000/api";
  list:Log[];
  constructor(private http:HttpClient) { }

  postLog(formData:Log){
   return this.http.post(this.root+'/Logs',formData);
  }
  refreshit(){

    this.http.get(this.root+'/Logs')
    .toPromise()
    .then(res=>this.list = res as Log[])
  }
}
