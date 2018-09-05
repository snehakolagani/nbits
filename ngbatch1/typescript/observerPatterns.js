var Producer = /** @class */ (function () {
    function Producer() {
        this.customers = [];
    }
    Producer.prototype.add = function (customer) {
        this.customers.push(customer);
        console.log(customer);
    };
    Producer.prototype.remove = function (customer) {
        var index = this.customers.indexOf(customer);
        this.customers.splice(index, 1);
    };
    Producer.prototype.notify = function () {
        this.customers.forEach(function (item) {
            item.update('s5');
        });
    };
    return Producer;
}());
var customer1 = {
    name: 'sneha',
    device: 's9',
    update: function (message) {
        if (message === this.device) {
            console.log('customer 1 has recieved the message', message);
        }
        else {
            console.log(customer1.name + " no updates for " + this.device);
        }
    }
};
var user = new Producer();
user.add(customer1);
//user.remove(customer1);
user.notify();
