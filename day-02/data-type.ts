// Built in in Data Type

let a: null = null; // null hanya bisa diisi dengan null

let b: number = 123;
let c: number = 123.456;

let d: string = "Dimar";

let e: undefined = undefined;

let f: boolean = true;

let g: number = 0b111001; // Binary

let h: number = 0o436; // Octal

let i: number = 0xadf0d; // Hexa-Decimal

console.log({ a, b, c, d, e, f, g, h, i });

// User-Defined Type

// ERROR :
// let j : number[] = [1, 3, "s"];
// Karena dalam array hanya memperbolehkan angka

// BENAR :
let j: number[] = [1, 3, 5];
console.log({ j });

enum Color {
  Red,
  Green,
  Blue = "Blue"
}
let l: String = Color[1];
let k: Color = Color.Blue;
console.log({ k, l });

// Generic
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("Dimar");
let output2 = identity<number>(14);
console.log({ output1, output2 });

// Decorator
function first(): Function {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second(): Function {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {
    return "dimar";
  }
}

let m: any = new ExampleClass();
console.log(m.method());

export {};
