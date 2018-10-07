import {CustomerComponent} from "./customer/customer.component";
import {Routes} from "@angular/router";
import {CustomersComponent} from "./customer/customers.component";

export const routes:Routes = [
    {path:'signin', loadChildren:'./customer/customer.module#CustomersModule'},
    {path:'signup', loadChildren:'./customer/customer.module#CustomersModule'},
    
]

