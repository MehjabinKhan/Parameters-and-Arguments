// Parameters and Arguments
 function calculateSum(num1: 24 , num2: 56 , num3: 12): number {
      return num1 + num2 + num3
}
let result = calculateSum(24,56,12);
console.log(result);

function addNumbers(a: number, b: number): number {
      return a + b;
}
let response = addNumbers(5,3);
console.log(response);

function makingTea(milk: number = 1 , sugar: number = 2 , tea: number = 1): number {
      return milk + sugar + tea
}
let final = makingTea(1 + 2 + 1);
console.log(final);

function substract(c: number = 34 , d: number = 45 , e: number = 10): number {
     return c - d - e
}
let gives = substract(34 - 45 - 10);
console.log(gives);

function greek(gh: number = 6 , kl: number = 3): number {
      return gh * kl
}
let answer = greek(6,3);
console.log(answer);