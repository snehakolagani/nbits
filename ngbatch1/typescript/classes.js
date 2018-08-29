var Creatingobj = /** @class */ (function () {
    function Creatingobj() {
    }
    Creatingobj.prototype.multiplication = function () {
        var b = 10;
        var c = 20;
        console.log(b * c);
    };
    return Creatingobj;
}());
var obj1 = new Creatingobj();
obj1.multiplication();
