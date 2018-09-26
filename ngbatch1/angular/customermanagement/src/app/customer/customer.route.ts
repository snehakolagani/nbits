import {CustomerComponent} from './customer.component';
import {Routes} from "@angular/router";
import {CustomersComponent} from "./customers.component";
export const custroutes:Routes = [
    
    {path:'signin', component:CustomerComponent},
    {path:'signup', component: CustomersComponent}
]