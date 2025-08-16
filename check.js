

const checkBoxContainer = document.getElementById('checkBoxContainer')
const checkOut = document.getElementById('checkOutID') //import 
const Total = document.getElementById('totalID')
const cartQuantity = document.querySelector('.cartQuantity')
let total = 0
const cart = {}
let cartItemCount = 0;



// drink 

// pepsi 0.5L
// Stop listni URL orqali olish
const urlParams = new URLSearchParams(window.location.search);
const stoplist = JSON.parse(urlParams.get("stoplist") || "{}");

// Mahsulotni tanlash
const pepsiProducthalf = document.querySelector('.pepsiHalf'); // Faqat pepsi

if (pepsiProducthalf) {
    const productName = pepsiProducthalf.getAttribute('data-name');
    let stock = stoplist[productName] ?? 0; // ❗ Python’dan kelgan qoldiq miqdor

    const qtySpan = pepsiProducthalf.querySelector("#stopListQuantity");
    qtySpan.textContent = `Qoldi: ${stock} ta`;

    // Agar mavjud bo‘lmasa, bloklab qo‘yamiz
    if (stock === 0) {
        pepsiProducthalf.style.opacity = "0.5";
        pepsiProducthalf.style.pointerEvents = "none";
        qtySpan.textContent = "❌ Mavjud emas";
        return;
    }

    // Click hodisasi
    pepsiProducthalf.addEventListener('click', () => {
        if (stock <= 0) {
            alert("❌ Bu mahsulot tugagan");
            return;
        }

        const productPrice = parseInt(pepsiProducthalf.getAttribute('data-price'));

        cartQuantity.classList.add('active');
        checkBoxContainer.style.display = 'block';

        if (cart[productName]) {
            // ✅ Faqat qoldiqdan oshmasa
            if (cart[productName].quantity < stock) {
                cart[productName].quantity += 1;
                const checkItem = checkOut.querySelector(`[data-name="${productName}"]`);
                checkItem.querySelector('.quantity').textContent = cart[productName].quantity;
            } else {
                alert("❗ Bu mahsulotdan ko‘p qo‘shib bo‘lmaydi (Stop list cheklovi)");
                return;
            }
        } else {
            cart[productName] = { quantity: 1, price: productPrice };

            const checkItems = document.createElement('div');
            checkItems.classList.add('checkItem');
            checkItems.setAttribute('data-name', productName);
            checkItems.setAttribute('data-price', productPrice);
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove();
                    delete cart[productName];

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
                if (cart[productName].quantity < stock) {
                    cart[productName].quantity += 1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent = total;
                } else {
                    alert("❗ Bu mahsulotdan ko‘p qo‘shib bo‘lmaydi (Stop list cheklovi)");
                }
            });
        }

        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1;
        cartQuantity.textContent = cartItemCount;
    });
}

// pepsi 0.5l



const pepsiProductOneLiter = document.querySelector('.pepsiOneLitr'); // Faqat pepsi

if (pepsiProductOneLiter) {
    pepsiProductOneLiter.addEventListener('click', () => {
        const productName = pepsiProductOneLiter.getAttribute('data-name');
        const productPrice = parseInt(pepsiProductOneLiter.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove();
                    delete cart[productName];

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
}


// pepsi 1.5L
const pepsiProductOnehalf = document.querySelector('.pepsiOneHalf'); // Faqat pepsi

if (pepsiProductOnehalf) {
    pepsiProductOnehalf.addEventListener('click', () => {
        const productName = pepsiProductOnehalf.getAttribute('data-name');
        const productPrice = parseInt(pepsiProductOnehalf.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove();
                    delete cart[productName];

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
}


// fanta 0.5l
const fantaProducthalf = document.querySelector('.fantaHalf'); // Faqat pepsi

if (fantaProducthalf) {
    fantaProducthalf.addEventListener('click', () => {
        const productName = fantaProducthalf.getAttribute('data-name');
        const productPrice = parseInt(fantaProducthalf.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove();
                    delete cart[productName];

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
}
// fanta 0.5l

// fanta 1l



const fantaProductOneLiter = document.querySelector('.fantaOneLitr'); // Faqat pepsi

if (fantaProductOneLiter) {
    fantaProductOneLiter.addEventListener('click', () => {
        const productName = fantaProductOneLiter.getAttribute('data-name');
        const productPrice = parseInt(fantaProductOneLiter.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove();
                    delete cart[productName];

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
}

// fanta 1 l


// fanta 1.5l
const fantaProductOnehalf = document.querySelector('.fantaOneHalf'); // Faqat pepsi

if (fantaProductOnehalf) {
    fantaProductOnehalf.addEventListener('click', () => {
        const productName = fantaProductOnehalf.getAttribute('data-name');
        const productPrice = parseInt(fantaProductOnehalf.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove();
                    delete cart[productName];

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
}
// fanta 1.5l
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
const setShashlikDivProduct = document.querySelectorAll('.setShashlikSmall') //import product

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
            checkItems.setAttribute('data-price', productPrice);
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


// set shashlik small


// set shashlik middle
const setShashlikDivProductMiddle = document.querySelectorAll('.setShashlikMiddle') //import product

setShashlikDivProductMiddle.forEach(setShashlikDivProductMiddle => {
    setShashlikDivProductMiddle.addEventListener('click', () => {
        const productName = setShashlikDivProductMiddle.getAttribute('data-name');
        const productPrice = parseInt(setShashlikDivProductMiddle.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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


// set shashlik midle



//set shashlik big

const setShashlikDivProductBig = document.querySelectorAll('.setShashlikBig') //import product

setShashlikDivProductBig.forEach(setShashlikDivProductBig => {
    setShashlikDivProductBig.addEventListener('click', () => {
        const productName = setShashlikDivProductBig.getAttribute('data-name');
        const productPrice = parseInt(setShashlikDivProductBig.getAttribute('data-price'));

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
            checkItems.setAttribute('data-price', productPrice);
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

// set shashlikbig
// set shashlik
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
            checkItems.setAttribute('data-price', productPrice);
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
            checkItems.setAttribute('data-price', productPrice);
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
const grillDivProduct = document.querySelectorAll('.grillDiv'); // import product

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
            checkItems.setAttribute('data-price', productPrice); // ✅ kerakli atribut
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
                    total -= productPrice;
                    Total.textContent = total;

                    checkItems.remove(); // HTMLdan olib tashlash
                    delete cart[productName]; // cart objectdan o‘chirish

                    cartItemCount -= 1;
                    cartQuantity.textContent = cartItemCount;

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
        sendData.style.display = 'block'
    
    }

    else {
        billConfirmTeg.style.display = 'none'
        sendData.style.display = 'none'

    }
})


// === MANZIL TANLASH (DROPDOWN ISHLASHI) ===
const input = document.querySelector('.orderInfoInputMaps');
const locationList = document.querySelector('.locationItem');
const options = locationList.querySelectorAll('div');

// Inputga bosilganda ro‘yxat ochiladi
input.addEventListener('focus', () => {
  locationList.style.display = 'block';
});

// Variant tanlanganda inputga yoziladi va yopiladi
options.forEach(option => {
  option.addEventListener('click', () => {
    input.value = option.textContent;
    locationList.style.display = 'none';
  });
});

// Tashqariga bosilganda yopiladi
document.addEventListener('click', (e) => {
  if (!e.target.closest('.orderInfoInputMapsWrapper')) {
    locationList.style.display = 'none';
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const webApp = window.Telegram.WebApp;
  webApp.expand();

  const phoneInput = document.getElementById('userNumber');

  // Boshlang'ich +998 qo'yish
  phoneInput.value = "+998";

  // Inputda faqat raqam qabul qilish
  phoneInput.addEventListener("input", () => {
    // Faqat raqamlarni qoldirish (plusni ham qoldiramiz)
    phoneInput.value = "+998" + phoneInput.value.replace(/\D/g, "").slice(3, 12);
  });

  const sendDataButton = document.getElementById('sendData');
  sendDataButton.addEventListener('click', () => {
    const number = phoneInput.value.trim();
    const maps = document.getElementById('userMaps')?.value.trim();
    const note = document.getElementById('userNote')?.value.trim();
    const checkBox = document.getElementById('openOrderInfoID')?.checked;

    // Telefon formati: +998 va keyingi 9 ta raqam
    const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(number)) {
      alert("❗ Raqam formati noto‘g‘ri! Masalan: +998901234567");
      return;
    }

    const checkItems = document.querySelectorAll('.checkItem');
    const products = [];

    checkItems.forEach(item => {
      const name = item.getAttribute('data-name');
      const price = item.getAttribute('data-price');
      const quantity = item.querySelector('.quantity')?.textContent.trim();

      if (name && quantity && price) {
        products.push(`📦 ${name} x${quantity} | ${price} so'm`);
      }
    });

    const total = document.getElementById('totalID')?.textContent.trim();

    if (!number || !maps || products.length === 0 || !checkBox) {
      alert("❗ Iltimos, barcha maydonlarni to‘ldiring, mahsulot tanlang va checkni tasdiqlang!");
      return;
    }

    const data = {
      raqam: number,
      manzil: maps,
      note: note || "",
      mahsulotlar: products,
      jami: `${total} so'm`
    };

    webApp.sendData(JSON.stringify(data));
    webApp.close();
  });
});

