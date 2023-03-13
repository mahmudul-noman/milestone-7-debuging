
             /** use map(), filter(), find(), includes() */
/** ================================================================== */
/** ================================================================== */



/** ---------- Array of object ------------*/
const products = [
    { name: 'Laptop', price: 32000, brand: 'Asus', color: 'gray' },
    { name: 'Watch', price: 3000, brand: 'Xiomi', color: 'black' },
    { name: 'Headphone', price: 650, brand: 'Lenovo', color: 'red' },
    { name: 'Phone', price: 28000, brand: 'realme', color: 'yellow' },
    { name: 'Tablet', price: 50000, brand: 'realme', color: 'yellow' }
]

// 1. map()
const useMap = products.map(product => product.brand)
// console.log(brands);


// 2. filter()
const useFilter = products.filter(product => product.price < 5000);
// console.log(name);s


// 3. find()
const useFind = products.find(product => product.color.includes('yellow'));
console.log(useFind);



// 4. includes()
const useIncludes = products.filter(product => product.name.includes('W'));
console.log(useIncludes);
