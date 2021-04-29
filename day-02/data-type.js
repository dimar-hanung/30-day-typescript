"use strict";
// Built in in Data Type
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var a = null; // null hanya bisa diisi dengan null
var b = 123;
var c = 123.456;
var d = "Dimar";
var e = undefined;
var f = true;
var g = 57; // Binary
var h = 286; // Octal
var i = 0xadf0d; // Hexa-Decimal
console.log({ a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i });
// User-Defined Type
// ERROR :
// let j : number[] = [1, 3, "s"];
// Karena dalam array hanya memperbolehkan angka
// BENAR :
var j = [1, 3, 5];
console.log({ j: j });
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var l = Color[1];
var k = Color.Blue;
console.log({ k: k, l: l });
// Generic
function identity(arg) {
    return arg;
}
var output1 = identity("Dimar");
var output2 = identity(14);
console.log({ output1: output1, output2: output2 });
// Decorator
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.method = function () {
        return "dimar";
    };
    __decorate([
        first(),
        second()
    ], ExampleClass.prototype, "method");
    return ExampleClass;
}());
var m = new ExampleClass();
console.log(m.method());
