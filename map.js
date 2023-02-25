const numbers = [23, 58, 38];
const half = numbers.map(num => num * 2);
// console.log(half);

// string map
const friends = ['madus rana', 'arif billah', 'fariya', 'jannat'];
const letterLengths = friends.map(friend => friend.length);
// console.log(letterLengths);

// object map
const products = [
   {id:1, name:'Laptop', brand:'Dell', ram: '4GB', price:"4500"},
   {id:2, name:'Laptop', brand:'Hp', ram: '8GB', price:"6500"},
   {id:3, name:'Laptop', brand:'Asus', ram: '8GB', price:"7500"},
   {id:4, name:'Laptop', brand:'Wolton', ram: '4GB', price:"3500"},
   {id:5, name:'Laptop', brand:'Lenovo', ram: '8GB', price:"4000"}
]
const item = products.map(products => products.name);
console.log(item);
const brand = products.map(products => products.brand);
console.log(brand);