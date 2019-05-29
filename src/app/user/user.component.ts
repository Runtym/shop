import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _us:LoginService) {
    this._us.findList().subscribe(res=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
