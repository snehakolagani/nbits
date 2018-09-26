import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {CustomersComponent} from './customer/customers.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { routes } from './app.route';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(routes),CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
