import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();;
  isLogin:boolean = false;

  constructor(private _router:Router,private _ls:LoginService) {
    var uiId = localStorage.getItem('uiId');
    var tokken = localStorage.getItem('tokken');
    if(tokken){
      this.user.uiId = uiId;
      this.user.tokken = tokken;
    }
  }
  ngOnInit() {}
  doLogin(){
    this._ls.login(this.user).subscribe(
      res=>{
        console.log(res);
        if(res){
          this.user = <User>res;
          if(this.user.tokken){
            localStorage.setItem("uiId",this.user.uiId);
            localStorage.setItem("tokken",this.user.tokken);
            alert('로그인 성공');
            this._router.navigate(['']);
          }
        }
      }
    )
    
  }
  doLogout(){
    localStorage.clear();
  }
}
