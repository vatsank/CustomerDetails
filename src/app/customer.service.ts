import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';


@Injectable()
export class CustomerService {

  // constructor is used for DI
  constructor(private service: HttpClient) { }

   getCustomers(): Observable<Customer[]> {


     return this.service.get<Customer[]>('http://localhost:3000/customers/');


  }

}
