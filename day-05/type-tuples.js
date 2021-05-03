"use strict";
exports.__esModule = true;
var user;
var userId = 1;
var userName = "Dimar";
var randomBoolean = true;
user = [userId, userName]; // valid
// user = [userId, randomBoolean]; // error: Type 'true' is not assignable to type 'string'
console.log(user);
