import { CustomerComponent } from "./customer.component";
import { CustomersComponent } from "./customers.component";
import { AppComponent } from "../app.component";



export const custroutes = [
    {path:'',component:CustomerComponent},
    {path:'signin',component:CustomerComponent},
    {path:'signup',component:CustomersComponent},
    {path:"customer",component:CustomerComponent}
]