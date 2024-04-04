"use strict";
// Parameters and Arguments
function calculateSum(num1, num2, num3) {
    return num1 + num2 + num3;
}
let result = calculateSum(24, 56, 12);
console.log(result);
function addNumbers(a, b) {
    return a + b;
}
let response = addNumbers(5, 3);
console.log(response);
function makingTea(milk = 1, sugar = 2, tea = 1) {
    return milk + sugar + tea;
}
let final = makingTea(1 + 2 + 1);
console.log(final);
function substract(c = 34, d = 45, e = 10) {
    return c - d - e;
}
let gives = substract(34 - 45 - 10);
console.log(gives);
function greek(gh = 6, kl = 3) {
    return gh * kl;
}
let answer = greek(6, 3);
console.log(answer);
