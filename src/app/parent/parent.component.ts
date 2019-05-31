import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { User } from '../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  pCnt:number = 1;
  pStr:string='부모변수';
  user:any={no:null,name:'홍길동',id:'red'};
  @ViewChild(ChildComponent) child;
  constructor() { }

  ngOnInit() {
    
  }
  changePStr(){
    this.user.no=1;
    this.child.cTest='ttt';
  }
  receive(user:User){
    console.log(user);
  }
}
