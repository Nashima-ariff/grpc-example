import { AddressListModel } from './addressListModel';

export class CustomerModel {
    
  public   id: number;
 public   name: string;
  public  email: string;
   public phone: string;
    addressesList: AddressListModel[];
}