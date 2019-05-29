import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User = new User();
  constructor(private router:Router,private _ls:LoginService) { }

  ngOnInit() {
  }
  doSingn(){
    this._ls.signin(this.user).subscribe(
      res=>{
        console.log(res);
        if(res==1){
          alert('회원가입 성공!');
          this.router.navigate(['/login']);
        }
      }
    )
  }

}
