const info = {
    name: 'noman',
    roll: 3119,
    campus: 'WUB',
    subject: ['software', 'networking']
}

// 1. convert obj to stringify && stringify to obj.
const infoJSON = JSON.stringify(info);
// console.log(infoJSON);

const infoOBJ = JSON.parse(infoJSON);
// console.log(infoOBJ);

// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))




// 3. keys, values
const keys = Object.keys(info);
// console.log(keys)

const values = Object.values(info);
// console.log(values);


// 4. for Each (we use forEach, if we want to loop in array)
const num = [1, 2, 3, 4, 5, 24];
// num.forEach(num => console.log(num));
num.map(num => num * 2);

// 5. for of (we use for of, if we want loop array like object)

// 6. for in (using loop in object)



// 7. add or remove from array
const products = [
    { name: 'Laptop', price: 32000, brand: 'Asus', color: 'gray' },
    { name: 'Watch', price: 3000, brand: 'Xiomi', color: 'black' },
    { name: 'Headphone', price: 650, brand: 'Lenovo', color: 'red' },
    { name: 'Phone', price: 28000, brand: 'realme', color: 'yellow' },
    { name: 'Tablet', price: 50000, brand: 'realme', color: 'yellow' }
]

const newProduct = {name: 'Pen', price: 500, brand: 'Aroma', color: 'blue'};
// add product or array
const addProduct  = [...products, newProduct];
console.log(addProduct);

// remove randomly products or one of the array of objects from array
const remaining = products.filter(product => product.name !== 'Tablet')
console.log(remaining);