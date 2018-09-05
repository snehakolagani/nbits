var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Namemodule;
(function (Namemodule) {
    var Modules = /** @class */ (function () {
        function Modules() {
            var a = 10;
            console.log("this is module");
        }
        Modules.prototype.add = function () {
            console.log("this is method");
        };
        return Modules;
    }());
    Namemodule.Modules = Modules;
})(Namemodule || (Namemodule = {}));
var Ab = /** @class */ (function (_super) {
    __extends(Ab, _super);
    function Ab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ab;
}(Namemodule.Modules));
var extract = new Ab();
extract.add();
