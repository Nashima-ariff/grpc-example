// package: 
// file: customer.proto

import * as customer_pb from "./customer_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CustomerGetCustomers = {
  readonly methodName: string;
  readonly service: typeof Customer;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof customer_pb.CustomerFilter;
  readonly responseType: typeof customer_pb.CustomerRequest;
};

type CustomerCreateCustomer = {
  readonly methodName: string;
  readonly service: typeof Customer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof customer_pb.CustomerRequest;
  readonly responseType: typeof customer_pb.CustomerResponse;
};

export class Customer {
  static readonly serviceName: string;
  static readonly GetCustomers: CustomerGetCustomers;
  static readonly CreateCustomer: CustomerCreateCustomer;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CustomerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCustomers(requestMessage: customer_pb.CustomerFilter, metadata?: grpc.Metadata): ResponseStream<customer_pb.CustomerRequest>;
  createCustomer(
    requestMessage: customer_pb.CustomerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: customer_pb.CustomerResponse|null) => void
  ): UnaryResponse;
  createCustomer(
    requestMessage: customer_pb.CustomerRequest,
    callback: (error: ServiceError|null, responseMessage: customer_pb.CustomerResponse|null) => void
  ): UnaryResponse;
}

