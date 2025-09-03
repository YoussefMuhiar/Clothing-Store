let cart = [];


function addToCart(name, price) {
cart.push({ name, price });
updateCart();
}


function updateCart() {
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
if (!cartItems || !cartTotal) return;


cartItems.innerHTML = "";
let total = 0;


cart.forEach(item => {
const li = document.createElement("li");
li.textContent = `${item.name} - $${item.price}`;
cartItems.appendChild(li);
total += item.price;
});


cartTotal.textContent = total;
}


// Populate catalog
const productList = document.getElementById("product-list");
if (productList) {
products.forEach(p => {
const div = document.createElement("div");
div.classList.add("product");
div.innerHTML = `
<img src="${p.image}" alt="${p.name}">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
`;
productList.appendChild(div);
});
}
