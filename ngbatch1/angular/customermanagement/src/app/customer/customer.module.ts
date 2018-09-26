import {NgModule} from '@angular/core';
import {CustomerComponent} from './customer.component';
import {CustomersComponent} from './customers.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {custroutes} from './customer.route';
@NgModule({
declarations:[CustomerComponent,CustomersComponent],
imports:[CommonModule,RouterModule.forChild(custroutes)]
})
export class CustomerModule{

}