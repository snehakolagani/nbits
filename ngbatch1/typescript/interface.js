var obj = {
    x: 10,
    y: 20,
    z: 30,
    sum: function () {
        console.log(obj.x + obj.y);
    },
    add: function () {
        console.log("this is another method");
    }
};
obj.sum();
obj.add();
