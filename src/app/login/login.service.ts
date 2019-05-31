import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private base_url:string='http://localhost:88';
  constructor(private _http:HttpClient) {
  }
  login(user:User){
    return this._http.post(this.base_url+'/login',user);
  }
  findList(){
    const list = ajax(this.base_url+'/userinfos').subscribe(
      res=>{
        return of(res);
      }
    )
    console.log(list);
    return this._http.get(this.base_url+'/userinfos');
  }
  signin(user:User){
    return this._http.post(this.base_url+'/signin',user);
  }
}
