interface Table{
    make:string;
    legs:number;
    making();

    }
interface Clothes{
    make:string;
    stiks:number;
    prepare();
}

class Bangle{

}
class Bottle{

}
class Makegold implements Clothes{
    make:"threads";
    stiks:4;
    prepare(){
        console.log("clothes are making with threads");
    }

}
let cloth=new Makegold();
cloth.prepare();
interface Make extends Clothes,Table{

}