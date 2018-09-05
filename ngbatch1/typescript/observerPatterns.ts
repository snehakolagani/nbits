class Producer{
    customers;
    constructor(){
        this.customers = [];
    }
    add(customer){
        this.customers.push(customer);
        console.log(customer);
    }
  
    remove(customer){
        let index = this.customers.indexOf(customer);
       
        this.customers.splice(index,1);
    }
    notify(){
        this.customers.forEach(item => {
            item.update('s5');
        });
    }
    
}

let customer1 = {
    name:'sneha',
    device:'s9',
    update:function(message){
        if(message === this.device){
            console.log('customer 1 has recieved the message', message);
        }
        else{
            console.log(`${customer1.name} no updates for ${this.device}`);
        }
    }
}
let user = new Producer();
user.add(customer1);
//user.remove(customer1);
user.notify();
