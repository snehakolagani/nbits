import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CustomerComponent } from "./customer.component";
import { RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import {custroutes} from "./customer.route";
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";



@NgModule({

    declarations:[CustomerComponent],
    imports:[BrowserModule,FormsModule,CommonModule,RouterModule.forChild(custroutes)]

})
export class CustomerModule{

}