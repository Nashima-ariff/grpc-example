import { Component } from '@angular/core';
import {CustomerModel} from './models/customerModel';
import { CustomerService } from './service/customer.service';
import { CustomerRequest, CustomerFilter } from './proto/customer_pb';
import { CustomerClient } from './proto/customer_pb_service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grpc-demo';

constructor(private cus:CustomerService) {
  cus.createCustomer();
  cus.getCustomers();
}
//   public customer: CustomerModel[] = []; 
//   public ngOnInit() {
//     const customerRequest = new CustomerRequest();
//     customerRequest.setId(1);
//     customerRequest.setName('NASHIMA');
//     customerRequest.setEmail('n@a.co');
//     customerRequest.setPhone('3698521470');
//     const cc = new CustomerClient('0.0.0.0:50051');
    
//     cc.createCustomer(customerRequest, (
//       (err, success) => {
//         console.log(err);
//         console.log(success); 
//       }
//     ));
//     const cf = new CustomerFilter();
//     cc.getCustomers(cf).on('data', (r) => {
//       console.log(r);
//     } );
// }
 
}
