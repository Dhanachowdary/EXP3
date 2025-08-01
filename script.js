let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = button.dataset.price;
            addToCart(name, price);
        });
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total-items").innerText = cart.length;

    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // clear previous list

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>Your cart is empty.</li>";
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function toggleCart() {
    const modal = document.getElementById("cart-modal");
    const isVisible = modal.style.display === "block";

    if (!isVisible) {
        updateCartDisplay();  // Refresh the list before opening
    }

    modal.style.display = isVisible ? "none" : "block";
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}
