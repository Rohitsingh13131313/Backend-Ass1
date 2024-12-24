let sum = require("./sum.js");
let multiply = require("./multiplication.js")
let sub = require("./subtraction.js")
let divide = require("./dividing.js")

let sumA = 3;
let sumB = 5;
total = sum(sumA,sumB)
console.log(total)


let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA,mulB)
console.log(mulResult)


let subA = 17;
let subB =4;
let subResult = sub(subA,subB)
console.log(subResult)


let divA = 13;
let divB = 2;
let divResult = divide(divA,divB)

console.log(divResult)
