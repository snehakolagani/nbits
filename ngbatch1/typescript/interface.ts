interface objects{
x:any;
y:number;
//sum?():any;
[key:string]:any;

}
let obj:objects={
x:10,
y:20,
z:30,
sum(){
    
    console.log(obj.x+obj.y);
},
add(){
    console.log("this is another method");

}



}
obj.sum();
obj.add();