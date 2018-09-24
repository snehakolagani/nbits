import {CustomerComponent} from "./customer/customer.component";
import {Routes} from "@angular/router";

export const routes:Routes = [
    
    {path:'customer', loadChildren:'./customer/customer.module#CustomerModule'},
]