import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private base_url:string='http://localhost:88';
  private headers:HttpHeaders;
  constructor(private _http:HttpClient) {
    
    var uiId = localStorage
    .getItem('uiId');
    var tokken = localStorage
    .getItem('tokken');
    this.headers = new  HttpHeaders().set('x-auth-id',uiId).set('x-auth-tokken',tokken);
  }
  
  login(user:User){
    return this._http.post(this.base_url+'/login',user);
  }

  findList(){
    const headers = this.headers;
    return this._http
    .get(this.base_url+'/userinfos',{headers});
  }
  signin(user:User){
    return this._http.post(this.base_url+'/signin',user);
  }
}
