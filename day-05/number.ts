let first: number = 12.0; // number
let second: number = 0x37cf; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57

// Number Properties
console.log("Number Properties: ");
console.log("Angka paling yang bisa dicapai js / ts: " + Number.MAX_VALUE);
console.log(
  "Angka paling rendah yang bisa dicapai js / ts: " + Number.MIN_VALUE
);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Positive Infinity:" + Number.POSITIVE_INFINITY);
console.log("Example of NaN: " + Math.sqrt(-5)); // NaN
