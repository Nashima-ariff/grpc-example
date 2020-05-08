// package: 
// file: customer.proto

import * as jspb from "google-protobuf";

export class CustomerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  clearAddressesList(): void;
  getAddressesList(): Array<CustomerRequest.Address>;
  setAddressesList(value: Array<CustomerRequest.Address>): void;
  addAddresses(value?: CustomerRequest.Address, index?: number): CustomerRequest.Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRequest): CustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRequest;
  static deserializeBinaryFromReader(message: CustomerRequest, reader: jspb.BinaryReader): CustomerRequest;
}

export namespace CustomerRequest {
  export type AsObject = {
    id: number,
    name: string,
    email: string,
    phone: string,
    addressesList: Array<CustomerRequest.Address.AsObject>,
  }

  export class Address extends jspb.Message {
    getStreet(): string;
    setStreet(value: string): void;

    getCity(): string;
    setCity(value: string): void;

    getState(): string;
    setState(value: string): void;

    getZip(): string;
    setZip(value: string): void;

    getIsshippingaddress(): boolean;
    setIsshippingaddress(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
  }

  export namespace Address {
    export type AsObject = {
      street: string,
      city: string,
      state: string,
      zip: string,
      isshippingaddress: boolean,
    }
  }
}

export class CustomerResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerResponse): CustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerResponse;
  static deserializeBinaryFromReader(message: CustomerResponse, reader: jspb.BinaryReader): CustomerResponse;
}

export namespace CustomerResponse {
  export type AsObject = {
    id: number,
    success: boolean,
  }
}

export class CustomerFilter extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerFilter): CustomerFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerFilter;
  static deserializeBinaryFromReader(message: CustomerFilter, reader: jspb.BinaryReader): CustomerFilter;
}

export namespace CustomerFilter {
  export type AsObject = {
    keyword: string,
  }
}

