var Utility1 = /** @class */ (function () {
    function Utility1() {
    }
    Utility1.prototype.reverse = function (items) {
        var toreturn = [1, 2, 3];
        for (var i = 10; i > toreturn.length; i--) {
            toreturn.push(5);
            console.log(toreturn);
            return toreturn;
        }
        console.log(toreturn);
    };
    return Utility1;
}());
var items = new Utility1();
items.reverse([2, 3, 9]);
