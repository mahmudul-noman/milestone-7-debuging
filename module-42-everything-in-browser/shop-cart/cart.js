const addProduct = () => {
    const productField = document.getElementById('productName');
    const qtyField = document.getElementById('productQty');
    const product = productField.value;
    const qty = qtyField.value;
    if (product === "" && qty === "") {
        alert('Enter Your Product');
        return false;
    }
    else {
        showProduct(product, qty);
    }
    productField.value = '';
    qtyField.value = '';
    saveProductLocalStorage();
}

const showProduct = (product, qty) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.style.color = 'tomato';
    li.innerHTML = `${product}: ${qty}`;
    ul.appendChild(li);
    showProductsFromLocalStorage();
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductLocalStorage = (product, qty) => {
    const cart = getStoredShoppingCart();
    cart[product] = qty;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const showProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart) {
        const qty = savedCart[product];
        showProduct(product, qty);
    }
}