import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { CustomerService } from './customer.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShowcustomerComponent
  ],
  imports: [
    BrowserModule , HttpClientModule
  ],
  providers: [HttpClient, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
