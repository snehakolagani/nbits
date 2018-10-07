import { Component } from "@angular/core";
import { Service } from "../core/service/service";

@Component({
    selector:'app-customerscomponent',
    templateUrl:'customers.component.html'
})
export class CustomersComponent{
    
    constructor(public data:Service){

        this.data.getInfo().subscribe(function(datainfo){
            console.log(datainfo);
        })

    }
}