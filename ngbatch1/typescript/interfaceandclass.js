var Bangle = /** @class */ (function () {
    function Bangle() {
    }
    return Bangle;
}());
var Bottle = /** @class */ (function () {
    function Bottle() {
    }
    return Bottle;
}());
var Makegold = /** @class */ (function () {
    function Makegold() {
    }
    Makegold.prototype.prepare = function () {
        console.log("clothes are making with threads");
    };
    return Makegold;
}());
var cloth = new Makegold();
cloth.prepare();
