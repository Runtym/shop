import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private _router:Router) { 
    if(localStorage.getItem('tokken')){
      console.log('오 너 로그인 되어있꾸나');
      this.isLogin = true;
    }else{
      //TODO move to LoginComponent
    }
  }

  ngOnInit() {
  }
  doLogout(){
    localStorage.clear();
    this.isLogin = false;
    this._router.navigate(['login']);
  }
}
