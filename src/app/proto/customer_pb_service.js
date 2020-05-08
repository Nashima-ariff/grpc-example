// package: 
// file: customer.proto

var customer_pb = require("./customer_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Customer = (function () {
  function Customer() {}
  Customer.serviceName = "Customer";
  return Customer;
}());

Customer.GetCustomers = {
  methodName: "GetCustomers",
  service: Customer,
  requestStream: false,
  responseStream: true,
  requestType: customer_pb.CustomerFilter,
  responseType: customer_pb.CustomerRequest
};

Customer.CreateCustomer = {
  methodName: "CreateCustomer",
  service: Customer,
  requestStream: false,
  responseStream: false,
  requestType: customer_pb.CustomerRequest,
  responseType: customer_pb.CustomerResponse
};

exports.Customer = Customer;

function CustomerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CustomerClient.prototype.getCustomers = function getCustomers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Customer.GetCustomers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

CustomerClient.prototype.createCustomer = function createCustomer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Customer.CreateCustomer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CustomerClient = CustomerClient;

