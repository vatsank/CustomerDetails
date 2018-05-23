import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {

   ram: Customer;
   shyam: Customer;
   info: string;
   custList: Customer[] ;
  constructor(private service: CustomerService) {
   }

  ngOnInit() {

     this.service.getCustomers().
             subscribe(data => this.custList = data);
  }

  getInfo() {
    console.log('get Info Called');
     this.info = 'event binding works';
  }
}
