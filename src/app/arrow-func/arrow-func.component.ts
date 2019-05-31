import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-func',
  templateUrl: './arrow-func.component.html',
  styleUrls: ['./arrow-func.component.css']
})
export class ArrowFuncComponent implements OnInit {
  test:string = '난 컴포넌트test';

  constructor() { }

  ngOnInit() {
  }
  callFunc1():void{
    
    function func1(obj){
      alert(obj.test);
    }
    func1(this);
  }
  
  callFunc2():void{
    function func1(){
      alert(this.test);
    }
    var f = func1.bind(this);
    f();
  }
  callFunc3():void{
    function func1(){
      alert(this.test);
    }
    func1.call(this);
  }
  
  callFunc4():void{
    var func1 = ()=>{
      alert(this.test);
    }
    func1();
  }
}
