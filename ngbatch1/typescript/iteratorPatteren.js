var MultiperIterator = /** @class */ (function () {
    function MultiperIterator(arr, divisor) {
        if (divisor === void 0) { divisor = 1; }
        this.arr = arr;
        this.count = 0;
        this.divisor = divisor;
    }
    MultiperIterator.prototype.next = function () {
        while (this.count < this.arr.length) {
            if (this.arr[this.count++] % this.divisor === 0) {
                return this.arr[this.count - 1];
            }
        }
    };
    MultiperIterator.prototype.hasNext = function () {
        var countVal = this.count;
        while (countVal < this.arr.length) {
            countVal = countVal + 1;
            if (this.arr[countVal] % this.divisor === 0) {
                return true;
            }
        }
        return false;
    };
    return MultiperIterator;
}());
var arrayVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var iterator_1 = new MultiperIterator(arrayVal, 3);
console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
// console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
// console.log(iterator_1.next(), 'has next value ', iterator_1.hasNext());
