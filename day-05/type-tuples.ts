// tuple tipe datanya ditentukan, yang dimana jadi lebih strict
let user: [number, string];
let userId = 1;
let userName = "Dimar";
let randomBoolean = true;

user = [userId, userName]; // valid
// user = [userId, randomBoolean]; // error: Type 'true' is not assignable to type 'string'

console.log(user);

export {};
