// Load cart from localStorage or initialize empty
updateCart();
}


function updateCart() {
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


if (!cartItems || !cartTotal) return; // Only run on cart page


cartItems.innerHTML = "";
let total = 0;


cart.forEach((item, index) => {
const li = document.createElement("li");
li.innerHTML = `
${item.name} - $${item.price}
<button onclick="removeFromCart(${index})">Remove</button>
`;
cartItems.appendChild(li);
total += item.price;
});


cartTotal.textContent = total;
}


function removeFromCart(index) {
cart.splice(index, 1);
saveCart();
updateCart();
}


// Populate catalog with Add to Cart buttons
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


// Update cart when on cart page
document.addEventListener("DOMContentLoaded", updateCart);
