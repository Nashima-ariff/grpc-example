import { Injectable } from '@angular/core';
import { CustomerClient } from '../proto/customer_pb_service';
import { CustomerFilter, CustomerRequest } from '../proto/customer_pb';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  client: CustomerClient;

  constructor() {
    this.client = new CustomerClient('0.0.0.0:50051');
  }
  getCustomers(){
          const cf = new CustomerFilter();
          this.client.getCustomers(cf).on('data', (r) => {
            console.log(r);
          } );
  }
  createCustomer(){
    const customerRequest = new CustomerRequest();
    customerRequest.setId(1);
    customerRequest.setName('NASHIMA');
    customerRequest.setEmail('n@a.co');
    customerRequest.setPhone('3698521470');
    this.client.createCustomer(customerRequest, (
      (err, success) => {
        console.log(err);
        console.log(success); 
      }
    ));
  }
}
