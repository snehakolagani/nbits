import {CustomerComponent} from "./customer/customer.component";
import {Routes} from "@angular/router";
import {CustomersComponent} from "./customer/customers.component";

export const routes:Routes = [
    
    {path:'customer', component:CustomerComponent},
    {path:'customers', component: CustomersComponent}
]

