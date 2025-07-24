

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


// ⚠️ Telegram WebApp mavjudligini tekshiramiz
if (window.Telegram && Telegram.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.expand();
} else {
  alert("❗ Iltimos, sahifani Telegram ilovasi orqali oching.");
}

// 💡 Mahsulotlar ro‘yxatini ko‘rsatish (dropdown manzil)
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

document.addEventListener('click', (e) => {
  if (!e.target.closest('.orderInfoInputMapsWrapper')) {
    locationList.style.display = 'none';
  }
});

// 📦 Mahsulot tanlash (cart logika)
const cartItems = document.querySelector(".cartItems");
const orderTotal = document.querySelector(".orderTotal");
const orderBtn = document.querySelector(".orderBtn");
const orderConfirmText = document.querySelector(".orderConfirmText");

let cart = [];
let total = 0;
let sent = false;

function addToCart(productName, productPrice) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  cartItems.innerHTML = "";
  total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <span>${itemTotal} so'm</span>
    `;
    cartItems.appendChild(itemDiv);
  });
  orderTotal.innerText = total + " so'm";
}

// ✅ Buyurtmani yuborish Telegram botga
let alreadySent = false;

function sendToTelegram() {
  if (alreadySent) {
    alert("❗ Buyurtma allaqachon yuborilgan!");
    return;
  }

  const phone = document.querySelector('.orderInfoInputNumber').value.trim();
  const address = document.querySelector('.orderInfoInputMaps').value.trim();
  const total = document.getElementById('totalID').textContent.trim();

  const checkItems = document.querySelectorAll('.checkItem');
  let products = [];

  checkItems.forEach(item => {
    const name = item.getAttribute('data-name');
    const quantity = item.querySelector('.quantity')?.textContent.trim();
    if (name && quantity) {
      products.push(`• ${name} x${quantity}`);
    }
  });

  if (!phone || !address || !total || products.length === 0) {
    alert("❗ Iltimos, barcha maydonlarni to‘ldiring va mahsulot tanlang!");
    return;
  }

  const message = `
🧾 *Yangi Buyurtma:*

🛍 *Maxsulotlar:*
${products.join('\n')}

📞 *Raqam:* ${phone}
📍 *Manzil:* ${address}
💰 *Umumiy summa:* ${total} so'm
  `;

  const tg = window.Telegram.WebApp;
  const userId = tg.initDataUnsafe?.user?.id;

  if (!userId) {
    alert("❗ Bu sahifa Telegram ichida ochilishi kerak.");
    return;
  }

  fetch(`https://api.telegram.org/bot7929962047:AAG3Ku-NlryaBhnIJ3A_zzHqj5rle1tq-as/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: userId,
      text: message,
      parse_mode: "Markdown"
    })
  })
  .then(response => {
    if (response.ok) {
      alreadySent = true;
      alert("✅ Siz checkni botga yubordingiz.\n\nEndi rasmiylashtirishni yakunlang!");
    } else {
      alert("❌ Xatolik yuz berdi!");
    }
  })
  .catch(error => {
    console.error("Xatolik:", error);
    alert("❗ Yuborishda muammo bo‘ldi!");
  });
}

// ▶️ Telegram WebApp orqali ma'lumot yuborish (sendData)
orderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Iltimos, mahsulot tanlang.");
    return;
  }

  if (sent) {
    alert("Siz allaqachon buyurtma yubordingiz.");
    return;
  }

  const data = {
    cart: cart,
    total: total
  };

  window.Telegram.WebApp.sendData(JSON.stringify(data));

  sent = true;
  orderConfirmText.style.display = "block";
  orderBtn.innerText = "✅ Yuborildi";
  orderBtn.disabled = true;
});

