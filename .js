setShashlikDivProduct.forEach(setShashlikDiv => {
    setShashlikDiv.addEventListener('click', () => {
        const productName = setShashlikDiv.getAttribute('data-name');
        const productPrice = parseInt(setShashlikDiv.getAttribute('data-price'));

        cartQuantity.classList.add('active');
        checkBoxContainer.style.display = 'block';

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`);
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity;
        } else {
            cart[productName] = { quantity: 1, price: productPrice };

            const checkItems = document.createElement('div');
            checkItems.classList.add('checkItem');
            checkItems.setAttribute('data-name', productName);
            checkItems.innerHTML = `
                ${productName} - ${productPrice} so'm
                <div class="quantityControls">
                    <button class="minus">-</button>
                    <button class="plus">+</button>
                    <span class="quantity">1</span>       
                </div>`;

            checkOut.appendChild(checkItems);

            // ➖ Minus button
            checkItems.querySelector('.minus').addEventListener('click', () => {
                if (cart[productName].quantity > 1) {
                    cart[productName].quantity -= 1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity;
                    total -= productPrice;
                    Total.textContent = total;
                } else {
                    // ⛔️ Mahsulotni to‘liq o‘chirish
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove(); // HTMLdan olib tashlash
                    delete cart[productName]; // cart objectdan o‘chirish

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

                    // Agar savat bo‘sh bo‘lsa
                    if (Object.keys(cart).length === 0) {
                        checkBoxContainer.style.display = 'none';
                        billConfirmTeg.style.display = 'none';
                        checkbox.checked = false;
                        cartQuantity.classList.remove('active');
                    }
                }
            });

            // ➕ Plus button
            checkItems.querySelector('.plus').addEventListener('click', () => {
                cart[productName].quantity += 1;
                checkItems.querySelector('.quantity').textContent = cart[productName].quantity;
                total += productPrice;
                Total.textContent = total;
            });
        }

        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1;
        cartQuantity.textContent = cartItemCount;
    });
});