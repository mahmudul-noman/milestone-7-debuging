// Truthy:  'noman', 5, true, {}, []
// Falsy:  '', 0, false, null, undefined

// 1. truthy
// let roll = 50;
// if (roll) {
//     console.log();
// }
// else {
//     console.log()
// }


// 2. falsy
// if (!roll){
//     console.log()
// }


// 3. ternary operator
const money = 100;
const getItem = (money > 99 ? 'biriyni' : 'cha');
// console.log(getItem);


// 4. string to number conversation
const num1 = '50';
// console.log(num1);
const numString = +num1;
// console.log(numString);


// 4. number to string conversation
const num2 = 50;
// console.log(num2);
const num = num2 + '';
// console.log(num);

// Check truthy && falsy statement
let isActive = true;
const showUser = () => console.log('Show User');
const hideUser = () => console.log('Hide User');
// const show = (isActive ? showUser() : hideUser());