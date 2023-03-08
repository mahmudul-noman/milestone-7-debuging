/**Syntax Errors: These occur when the code is not written according to the syntax rules of JavaScript. For example, forgetting to close a parenthesis or adding an extra semicolon can result in a syntax error. */

// Syntax Error: missing closing parenthesis
function addNumbers(num1, num2 {
    return num1 + num2;
  }

// Syntax Error: extra semicolon
let greeting = "Hello World";;
console.log(greeting);


/**Type Errors: These occur when a value is not of the expected type. For example, trying to call a method on a variable that is undefined will result in a type error. */

// Type Error: undefined variable
let user;
user.getName();

// Type Error: accessing property of non-object
let number = 10;
number.toUpperCase();


/**Reference Errors: These occur when a variable or function is referenced but has not been declared or defined. For example, a misspelling or a scope issue can result in a reference error. */

// Reference Error: misspelled variable name
let message = "Hello World";
console.log(messages);

// Reference Error: accessing variable outside of scope
function showMessage() {
    let greeting = "Hello";
}
console.log(greeting);


/**Range Errors: These occur when a value is not within an expected range. For example, trying to access an index of an array that does not exist will result in a range error. */

// Range Error: accessing non-existent index
let numbers = [1, 2, 3];
console.log(numbers[5]);


/**Logic Errors: These occur when the code runs without error but produces incorrect results. For example, a mistake in the logic of the program or a misunderstanding of the problem being solved can result in a logic error. */

// Logic Error: using wrong operator
function calculateDiscount(price, discountPercentage) {
    return price - (price + discountPercentage);
}
console.log(calculateDiscount(100, 20));


/**Runtime Errors: These occur when an unexpected event occurs while the program is running. For example, if a file that is being read does not exist or if the user enters an invalid input, a runtime error will occur. */

// Runtime Error: trying to read non-existent file
const fs = require('fs');
fs.readFileSync('non-existent-file.txt');

// Runtime Error: invalid user input
let number = parseInt(prompt("Enter a number"));
console.log(number * 2);
