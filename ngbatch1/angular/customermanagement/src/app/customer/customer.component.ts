import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
 //@Input() public parentData;

  loginDetails(){
      alert("succesfully login");
    }

}
