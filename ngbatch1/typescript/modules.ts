 module Namemodule{
    export class Modules{
        
        constructor(){
      let a=10;
      
            console.log("this is module");
        
       }
       add(){
           console.log("this is method");
       }
       
    }
}
class Ab extends Namemodule.Modules{

}
let extract=new Ab();
extract.add();