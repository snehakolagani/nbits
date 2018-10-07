import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent  {
  @Input() public parentdata;
  @Output() public child=new EventEmitter();
  event()
  {
    this.child.emit('hey raji');
  }


}
