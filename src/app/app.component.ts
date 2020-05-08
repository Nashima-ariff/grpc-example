import { Component } from '@angular/core';
import {grpc} from "@improbable-eng/grpc-web";
// import { Customer, CustomerClient } from '../proto/customer_pb_service';
// import {CustomerRequest,CustomerResponse,CustomerFilter} from '../proto/customer_pb';
import {CustomerModel} from './models/customerModel';
import { CustomerRequest, CustomerFilter } from './proto/customer_pb';
import { CustomerClient } from './proto/customer_pb_service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'grpc-demo';
//   public customer: CustomerModel[] = []; 
  public ngOnInit() {
    const customerRequest = new CustomerRequest();
    customerRequest.setId(1);
    customerRequest.setName('NASHIMA');
    customerRequest.setEmail('s@s.co');
    customerRequest.setPhone('3698521470');
    const cc = new CustomerClient('0.0.0.0:50051');
    
    cc.createCustomer(customerRequest, (
      (err, success) => {
        console.log(err);
        console.log(success); 
      }
    ));

    const cf = new CustomerFilter();

    cc.getCustomers(cf).on('data', (r) => {
      console.log(r);
      
    } );

//     const getCustomerRequest = new CustomerFilter();
//     grpc.invoke(Customer.GetCustomers, {
//       request: getCountryRequest,
//       host: "http://localhost:8080", 
//       onEnd: res => {
//         const { status, statusMessage, headers, message, trailers } = res;
//         if (status === grpc.Code.OK && message) {
//         var result = message.toObject() as CustomerFilter.AsObject;
//         this.customer = result.CustomerRequest.map(customer => 
//           <CustomerModel>({
//             name: customer.name,
//             description: customer.id
//           }));
//         }
//       }
//     });
//     const client = new CustomerClient("http://localhost:8080");
// const req = new CustomerFilter();
// req.toObject.bind.(1);
// client.GetCustomers(req, (err, user) => {

// });



}

}
