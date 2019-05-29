import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private base_url:string='http://localhost:88';
  constructor(private _http:HttpClient) {}
  
  login(user:User){
    return this._http.post(this.base_url+'/login',user);
  }

  findList(){
    var uiId = localStorage
    .getItem('uiId');
    var tokken = localStorage
    .getItem('tokken');
    var param =  '?uiId=' + uiId + 
    '&tokken=' + tokken;
    console.log(uiId);
    console.log(tokken);
    return this._http
    .get(this.base_url+'/userinfos' + param);
  }
  signin(user:User){
    return this._http.post(this.base_url+'/signin',user);
  }
}
