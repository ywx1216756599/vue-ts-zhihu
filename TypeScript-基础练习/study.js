// 原始数据类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Boolean类型
var BooleanVal = false;
// Number类型
var NumberVal = 123;
// String类型
var StringVal = 'hello world';
// undefined类型
var u = undefined;
// null类型
var n = null;
// any类型
var anyVal = 1;
anyVal = false;
anyVal = '1';
//数组和元组
// 数字型数组
var arrOfNumber = [1, 2, 3, 4, 5];
// arrOfNumber.push('1') // 报错 
// 元组
var arr = ['1', 2];
// let arr1: [string, number] = [2, '1'] // 报错
// let arr2: [string, number] = ['1', 2, 3] // 报错
arr.push(1); // 对元组进行数据操作为增加的时候 必须是元组中有的类型
var wixi = {
    name: 'wixi',
    age: 21,
    gender: '男'
};
//  wixi.gender = '女' // 报错
// 函数 限制参数和放回结果的类型
function add(x, y) {
    return x + y;
}
// 可选参数
function add1(x, y, z) {
    return typeof z === 'number' ? x + y + z : x + y;
}
// 函数类型
var add2 = function (x, y, z) {
    return typeof z === 'number' ? x + y + z : x + y;
};
var add3 = add2;
add(1, 2);
// 类型推断 联合类型 类型断言
// 类型推断
var str = 'aaa'; // 自动推断出set => string
//  str = 1 // 报错
// 联合类型
var demo;
demo = '1';
demo = 1;
demo.toString();
// demo.length // 只能使用联合类型中共有的属性
// 类型断言 as 关键字
function demo1(input) {
    var str = input;
    // const str1 = <string> input  也可以用 <xxx>
    if (str.length) {
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
// 类型守护 (typeof )
function demo2(input) {
    if (typeof input === 'string') {
        // 此时input类型是string
        return input.length;
    }
    else {
        // 此时input类型是number
        return str.toString().length;
    }
}
// 类 
// 1. public(共有的)外界可以访问 
// 2. private（私有的）只能自己内部访问，不可被子类访问 
// 3. protected（受保护的）外界访问不到，可以被子类访问 
// 4. readonly(只读) 申明只读属性
var Father = /** @class */ (function () {
    function Father() {
        this.age = 123;
    }
    Father.prototype.view = function () {
        console.log('look me');
    };
    Father.prototype.header = function () {
        console.log('this is my header');
    };
    Father.prototype.house = function () {
        console.log('this is my house');
    };
    Father.prototype.viewMy = function () {
        this.header();
    };
    Father.userName = 'wixi';
    return Father;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super.call(this) || this;
    }
    Son.prototype.fatherHouse = function () {
        _super.prototype.house.call(this); // 子类可以访问
        // super.header() // 私有属性不能被访问
    };
    return Son;
}(Father));
var father = new Father();
var son = new Son();
console.log(Father.userName); // wixi 静态属性或方法可以类名调用
father.view();
// father.age = 1 // 只读不能改变值
son.view();
// implements 关键字 实现接口的所有方法
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function (trigger) { };
    return Car;
}());
var CellPhone = /** @class */ (function () {
    function CellPhone() {
    }
    CellPhone.prototype.switchRadio = function (trigger) { };
    CellPhone.prototype.checkBatteryStatus = function () { };
    return CellPhone;
}());
var OtherPhone = /** @class */ (function () {
    function OtherPhone() {
    }
    OtherPhone.prototype.switchRadio = function (trigger) { };
    OtherPhone.prototype.checkBatteryStatus = function () { };
    return OtherPhone;
}());
// 枚举
var Arr;
(function (Arr) {
    Arr[Arr["up"] = 0] = "up";
    Arr[Arr["down"] = 1] = "down";
    Arr[Arr["left"] = 2] = "left";
    Arr[Arr["right"] = 3] = "right";
})(Arr || (Arr = {}));
Arr.up; // 0
Arr[0]; // 'up'
var Arr2;
(function (Arr2) {
    Arr2["up"] = "UP";
    Arr2["down"] = "DOWN";
    Arr2["left"] = "LEFT";
    Arr2["right"] = "RIGHT";
})(Arr2 || (Arr2 = {}));
Arr.up; // 'UP'
Arr['UP']; // 'up'
// 泛型
function echo(args) {
    return args;
}
var result = echo('2234');
function echo1(arr) {
    return [arr[1], arr[0]];
}
var result1 = echo1(['string', 1]);
function echo2(input) {
    console.log(input.length);
    return input;
}
var a = echo2('123');
var b = echo2({ length: 10 });
var c = echo2([1, 2, 3, 4]);
var d = echo2(['1', 2]);
var num = 4;
var person = {
    name: 'wixi',
    age: 21
};
jQuery('#foo');
