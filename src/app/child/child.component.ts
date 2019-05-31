import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  cStr:string;
  @Input()
  cUser:any;
  @Output() issue = new EventEmitter<User>();
  user:User = new User();

  cTest:string = 'cTest';
  constructor() { }

  ngOnInit() {
  }
  test(){
    this.issue.emit(this.user);
  }
}
