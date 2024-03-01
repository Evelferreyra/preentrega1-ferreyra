document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const payButton = document.getElementById('pay-btn');

    let cart = [];
    let subtotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            subtotal += price;
            cart.push({ name: name, price: price });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
        });
        cartSubtotal.textContent = subtotal.toFixed(2);
        cartTotal.textContent = subtotal.toFixed(2);
    }

    payButton.addEventListener('click', function() {
        alert('Gracias por su compra!');
        cart = [];
        subtotal = 0;
        updateCart();
    });
});