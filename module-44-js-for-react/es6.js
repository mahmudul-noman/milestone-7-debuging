const num = [1, 2, 3, 4, 5, 24];

const info = {
    name: 'noman',
    roll: 3119,
    campus: 'WUB'
}

// 1. Template String
const about = `My Name is: ${info.name}. My Age: ${num[5]}. My Campus: ${info.campus}`;
console.log(about);

// 2. Arrow function

// 3. Spread operator
//    create a new array from an older array and add an element