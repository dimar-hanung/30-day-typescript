let value: number | string;
value = undefined;
console.log("Angka: " + value);
value = "Dimar Hanung";
console.log("String: " + value);

// array
let arrType: number[] | string[];

// type
export type Color = "red" | "white" | "blue";
const myColor: Color = "red";
console.log(myColor.toUpperCase());

export {};
