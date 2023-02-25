// 1 var let const 
var name = 'Adnan Hassan';
var name = 'Abdur Rahim';

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number1 = "odd Number"
// 1-a let resign kora jai na 
const num = [23, 58, 38];

// 2. default parameter
function salary(salary, tax = 0.25, bonus = 0) {
   const remaining = salary - salary * tax;
   const total = remaining = bonus;
   return total
}
// 3. template string 
const elementHTMl = `
<div>
   <h2>${name}</h2>
   <p>Address: Dhaka</p>
   <p>others: ${salary}</p>
</div>

`
// 4. arrow function 
const doubleIt = x => x * 2;
const salary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spreed
const friendAge = [22, 23, 24, 34, 32, 21, 25,];
const newFriendAge = [...friendAge, 32, 33, 19, 27];
// console.log(newFriendAge);

// 6. destructuring 
const { x, y, z, ...p } = { x: 38, y: 22, z: 23, name: 'adnan hassan', salary: 20000 };
// console.log(x, y, z, p);
const [a, ...b] = [23, 58, 38];
// console.log(a, b);
