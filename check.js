

const checkBoxContainer = document.getElementById('checkBoxContainer')
const checkOut = document.getElementById('checkOutID') //import 
const Total = document.getElementById('totalID')
const cartQuantity = document.querySelector('.cartQuantity')
let total = 0
const cart = {}
let cartItemCount = 0;



// drink
const drinkdivProducts = document.querySelectorAll('.drinkDiv') //import product

drinkdivProducts.forEach(drinkDiv => {
    drinkDiv.addEventListener('click', () => {
        const productName = drinkDiv.getAttribute('data-name');
        const productPrice = parseInt(drinkDiv.getAttribute('data-price'));

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

// drink


// bread 
const breadDivProducts = document.querySelectorAll('.breadDiv') //import product
breadDivProducts.forEach(breadDiv => {
    breadDiv.addEventListener('click', () => {
        const productName = breadDiv.getAttribute('data-name');
        const productPrice = parseInt(breadDiv.getAttribute('data-price'));

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
// bread


// salad 
const saladdivProducts = document.querySelectorAll('.saladDiv') //import product

saladdivProducts.forEach(saladDiv => {
    saladDiv.addEventListener('click', () => {
        const productName = saladDiv.getAttribute('data-name');
        const productPrice = parseInt(saladDiv.getAttribute('data-price'));

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



// salad 


// kofe
const kofeDivProducts = document.querySelectorAll('.kofeDiv') //import product

kofeDivProducts.forEach(kofeDiv => {
    kofeDiv.addEventListener('click', () => {
        const productName = kofeDiv.getAttribute('data-name');
        const productPrice = parseInt(kofeDiv.getAttribute('data-price'));

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



// kofe

//  national food1
const natioanalFood1DivProduct = document.querySelectorAll('.natioanalFood1Div') //import product
natioanalFood1DivProduct.forEach(natioanalFood1Div => {
    natioanalFood1Div.addEventListener('click', () => {
        const productName = natioanalFood1Div.getAttribute('data-name');
        const productPrice = parseInt(natioanalFood1Div.getAttribute('data-price'));

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






//  national food1


//  national food2

const natioanalFood2DivProduct = document.querySelectorAll('.natioanalFood2Div') //import product
natioanalFood2DivProduct.forEach(natioanalFood2Div => {
    natioanalFood2Div.addEventListener('click', () => {
        const productName = natioanalFood2Div.getAttribute('data-name');
        const productPrice = parseInt(natioanalFood2Div.getAttribute('data-price'));

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


//  national food2

// uygur food

const UygurFoodDivProducts = document.querySelectorAll('.UygurFoodDiv') //import product
UygurFoodDivProducts.forEach(UygurFoodDiv => {
    UygurFoodDiv.addEventListener('click', () => {
        const productName = UygurFoodDiv.getAttribute('data-name');
        const productPrice = parseInt(UygurFoodDiv.getAttribute('data-price'));

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


// kombo food
const KomboFoodDivProducts = document.querySelectorAll('.KomboFoodDiv') //import product
KomboFoodDivProducts.forEach(KomboFoodDiv => {
    KomboFoodDiv.addEventListener('click', () => {
        const productName = KomboFoodDiv.getAttribute('data-name');
        const productPrice = parseInt(KomboFoodDiv.getAttribute('data-price'));

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
// kombo food


// set shashlik
const setShashlikDivProduct = document.querySelectorAll('.setShashlikDiv') //import product

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


// set shashlik


// fast food

const fastFoodDivProduct = document.querySelectorAll('.fastFoodDiv') //import product


fastFoodDivProduct.forEach(fastFoodDiv => {
    fastFoodDiv.addEventListener('click', () => {
        const productName = fastFoodDiv.getAttribute('data-name');
        const productPrice = parseInt(fastFoodDiv.getAttribute('data-price'));

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
// fast food


// cake
const cakeDivProduct = document.querySelectorAll('.cakeDiv') //import product

cakeDivProduct.forEach(cakeDiv => {
    cakeDiv.addEventListener('click', () => {
        const productName = cakeDiv.getAttribute('data-name');
        const productPrice = parseInt(cakeDiv.getAttribute('data-price'));

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



// cake



// grill
const grillDivProduct = document.querySelectorAll('.grillDiv') //import product


grillDivProduct.forEach(grillDiv => {
    grillDiv.addEventListener('click', () => {
        const productName = grillDiv.getAttribute('data-name');
        const productPrice = parseInt(grillDiv.getAttribute('data-price'));

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


// grill




// bill confirm teg open
const checkbox = document.getElementById('openOrderInfoID')
const billConfirmTeg = document.getElementById('orderInfoID')
const check  = document.getElementById('check')

checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        billConfirmTeg.style.display = 'block'
        
        
    }

    else {
        billConfirmTeg.style.display = 'none'
    }
})








// === MANZIL TANLASH DROPDOWN ===
const input = document.querySelector('.orderInfoInputMaps');
const locationList = document.querySelector('.locationItem');
const options = locationList.querySelectorAll('div');

input.addEventListener('focus', () => {
  locationList.style.display = 'block';
});
options.forEach(option => {
  option.addEventListener('click', () => {
    input.value = option.textContent;
    locationList.style.display = 'none';
  });
});
document.addEventListener('click', e => {
  if (!e.target.closest('.orderInfoInputMapsWrapper')) {
    locationList.style.display = 'none';
  }
});

// === BUYURTMA YUBORISH (FAQAT BIR MARTA) ===
function sendToTelegram() {
  // ✅ Faqat 1 marta yuborishga tekshiruv
  if (localStorage.getItem("orderSent") === "true") {
    alert("❗ Siz buyurtmani allaqachon yuborgansiz.");
    return;
  }

  const phone = document.querySelector('.orderInfoInputNumber').value.trim();
  const address = input.value.trim();
  const total = document.getElementById('totalID').textContent.trim();

  const checkItems = document.querySelectorAll('.checkItem');
  const products = Array.from(checkItems).map(item => {
    const name = item.getAttribute('data-name');
    const qty = item.querySelector('.quantity')?.textContent.trim();
    return name && qty ? `• ${name} x${qty}` : null;
  }).filter(Boolean);

  if (!phone || !address || !total || products.length === 0) {
    alert("❗ Iltimos, barcha maydonlarni to‘ldiring va mahsulot tanlang!");
    return;
  }

  const message = `
🧾 *Sizning buyurtmangiz:*

${products.join('\n')}

📞 *Telefon:* ${phone}
📍 *Manzil:* ${address}
💰 *Umumiy summa:* ${total} so'm
`;

  if (window.Telegram && Telegram.WebApp) {
    const tg = Telegram.WebApp;
    const chat_id = tg.initDataUnsafe?.user?.id;

    if (!chat_id) {
      alert("❗ Telegram foydalanuvchisi aniqlanmadi.");
      return;
    }

    fetch(`https://api.telegram.org/bot7929962047:AAG3Ku-NlryaBhnIJ3A_zzHqj5rle1tq-as/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
        parse_mode: "Markdown"
      })
    })
    .then(res => {
      if (res.ok) {
        alert("✅ Buyurtma muvaffaqiyatli yuborildi!");
        localStorage.setItem("orderSent", "true"); // 🔐 Belgilab qo‘yish

        // ✅ Web ilovani yopish
        setTimeout(() => {
          tg.close();
        }, 500);
      } else {
        alert("❌ Yuborishda xatolik yuz berdi!");
      }
    })
    
