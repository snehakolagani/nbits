import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { CommonModule } from "@angular/common";
import { CustomerRoutesModule } from "./customerroutes.module";

@NgModule({
    imports:[CommonModule,CustomerRoutesModule],
    declarations:[CustomerComponent],
    exports:[CustomerComponent]
})
export class CustomerModule {

}