const numbers = [23, 58, 38, 43, 54, 45, 65, 77, 66, 54, 57, 87, 65];
const bigNumber = numbers.filter(n => n > 40);
const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);