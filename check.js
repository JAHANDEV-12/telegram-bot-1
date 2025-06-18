

const checkBoxContainer = document.getElementById('checkBoxContainer')
const checkOut = document.getElementById('checkOutID') //import 
const Total = document.getElementById('totalID')
const cartQuantity = document.querySelector('.cartQuantity')
let total = 0
const cart = {}
let cartItemCount = 0;



// drink
const drinkProducts = document.querySelectorAll('.drinkDiv') //import product

drinkProducts.forEach(drinkDiv => {
    drinkDiv.addEventListener('click', () => {
        const productName = drinkDiv.getAttribute('data-name')
        const productPrice = parseInt(drinkDiv.getAttribute('data-price'))
        document.querySelector('.cartQuantity').classList.add('active')


        checkBoxContainer.style.display = 'block'

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name ="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity  ;
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div');
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName);
            checkItems.innerHTML = `${productName} - ${productPrice} so'm  <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }
        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;
        //            cartQuantity.classList//
    })
})

// drink


// bread 
const breadDivProducts = document.querySelectorAll('.breadDiv') //import product
breadDivProducts.forEach(breadDiv => {
    breadDiv.addEventListener('click', () => {
        const productName = breadDiv.getAttribute('data-name'); // Получаем название продукта
        const productPrice = parseInt(breadDiv.getAttribute('data-price')); // Получаем цену продукта

        document.querySelector('.cartQuantity').classList.add('active'); // Активируем количество в корзине

        checkBoxContainer.style.display = 'block'; // Показываем контейнер с чекбоксами (если нужно)

        if (cart[productName]) {
            // Если продукт уже есть в корзине, увеличиваем его количество
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name ="${productName}"]`);
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity;
        }

        else {
            // Если продукта нет в корзине, добавляем его
            cart[productName] = { quantity: 1, price: productPrice };
            const checkItems = document.createElement('div');
            checkItems.classList.add('checkItem');
            checkItems.setAttribute('data-name', productName);
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `;
            checkOut.appendChild(checkItems);


            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice; // Обновляем общую сумму
        Total.textContent = total;

        cartItemCount += 1; // Увеличиваем количество товаров в корзине
        cartQuantity.textContent = cartItemCount; // Обновляем отображение количества товаров в корзине
    });
});
// bread


// salad 
const saladProducts = document.querySelectorAll('.saladDiv') //import product

saladProducts.forEach(saladDiv => {
    saladDiv.addEventListener('click', () => {
        const productName = saladDiv.getAttribute('data-name')
        const productPrice = parseInt(saladDiv.getAttribute('data-price'))

        document.querySelector('.cartQuantity').classList.add('active')

        checkBoxContainer.style.display = 'block'


        if (cart[productName]) {
            cart[productName].quantity += 1
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity;
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('chekItem')
            checkItems.setAttribute('data-name', productName);
            checkItems.innerHTML = `${productName}- ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }
        total += productPrice;
        Total.textContent = total;


        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;


    })
})




// salad 


// kofe
const kofeDivProducts = document.querySelectorAll('.kofeDiv') //import product

kofeDivProducts.forEach(kofeDiv => {
    kofeDiv.addEventListener('click', () => {
        const productName = kofeDiv.getAttribute('data-name');
        const productPrice = parseInt(kofeDiv.getAttribute('data-price'));

        checkBoxContainer.style.display = 'block';

        document.querySelector('.cartQuantity').classList.add('active');

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name = "${productName}"]`);
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity;
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice };
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem');
            checkItems.setAttribute('data-name', productName);
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total;


        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;
    })
})



// kofe

//  national food1
const natioanalFood1DivProduct = document.querySelectorAll('.natioanalFood1Div') //import product
natioanalFood1DivProduct.forEach(natioanalFood1Div => {
    natioanalFood1Div.addEventListener('click', () => {
        productName = natioanalFood1Div.getAttribute('data-name')
        productPrice = parseInt(natioanalFood1Div.getAttribute('data-price'))

        checkBoxContainer.style.display = 'block'

        document.querySelector('.cartQuantity').classList.add('active');


        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName);
            checkItems.innerHTML = `${productName} - ${productPrice} so'm  <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }


        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1;
        cartQuantity.textContent = cartItemCount;


    })
})





//  national food1


//  national food2

const natioanalFood2DivProduct = document.querySelectorAll('.natioanalFood2Div') //import product
natioanalFood2DivProduct.forEach(natioanalFood2Div => {
    natioanalFood2Div.addEventListener('click', () => {
        const productName = natioanalFood2Div.getAttribute('data-name');
        const productPrice = parseInt(natioanalFood2Div.getAttribute('data-price'));

        // Показать checkbox и label
        checkBoxContainer.style.display = 'block';

        // Логика добавления товара в корзину (можно оставить вашу текущую логику)

        document.querySelector('.cartQuantity').classList.add('active');

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name = "${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }

        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName}- ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total

        cartItemCount += 1;
        cartQuantity.textContent = cartItemCount
    })
})


//  national food2

// uygur food

const UygurFoodDivProducts = document.querySelectorAll('.UygurFoodDiv') //import product
UygurFoodDivProducts.forEach(UygurFoodDiv => {
    UygurFoodDiv.addEventListener('click', () => {
        const productName = UygurFoodDiv.getAttribute('data-name');
        const productPrice = parseInt(UygurFoodDiv.getAttribute('data-price'));



        checkBoxContainer.style.display = 'block'
        document.querySelector('.cartQuantity').classList.add('active');


        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name = "${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total;


        cartItemCount += 1;
        cartQuantity.textContent = cartItemCount
    })
})


// kombo food
const KomboFoodDivProducts = document.querySelectorAll('.KomboFoodDiv') //import product
KomboFoodDivProducts.forEach(KomboFoodDiv => {
    KomboFoodDiv.addEventListener('click', () => {
        const productName = KomboFoodDiv.getAttribute('data-name')
        const productPrice = parseInt(KomboFoodDiv.getAttribute('data-price'))

        document.querySelector('.cartQuantity').classList.add('active')

        checkBoxContainer.style.display = 'block'

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;
    })
})
// kombo food


// set shashlik
const setShashlikDiv = document.querySelectorAll('.setShashlikDiv') //import product

setShashlikDiv.forEach(setShashlikDiv => {
    setShashlikDiv.addEventListener('click', () => {
        const productName = setShashlikDiv.getAttribute('data-name')
        const productPrice = parseInt(setShashlikDiv.getAttribute('data-price'))

        document.querySelector('.cartQuantity').classList.add('active')

        checkBoxContainer.style.display = 'block'

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;
    })
})


// set shashlik


// fast food

const fastFoodDivProduct = document.querySelectorAll('.fastFoodDiv') //import product

fastFoodDivProduct.forEach(fastFoodDiv => {
    fastFoodDiv.addEventListener('click', () => {
        const productName = fastFoodDiv.getAttribute('data-name')
        const productPrice = parseInt(fastFoodDiv.getAttribute('data-price'))

        document.querySelector('.cartQuantity').classList.add('active')

        checkBoxContainer.style.display = 'block'

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;
    })
})
// fast food


// cake
const cakeDivProduct = document.querySelectorAll('.cakeDiv') //import product

cakeDivProduct.forEach(cakeDiv => {
    cakeDiv.addEventListener('click', () => {
        const productName = cakeDiv.getAttribute('data-name')
        const productPrice = parseInt(cakeDiv.getAttribute('data-price'))

        document.querySelector('.cartQuantity').classList.add('active')

        checkBoxContainer.style.display = 'block'

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name="${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }
        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total;

        cartItemCount += 1
        cartQuantity.textContent = cartItemCount;
    })
})



// cake



// grill
const grillDivProduct = document.querySelectorAll('.grillDiv') //import product


grillDivProduct.forEach(grillDiv => {
    grillDiv.addEventListener('click', () => {
        const productName = grillDiv.getAttribute('data-name')
        const productPrice = parseInt(grillDiv.getAttribute('data-price'))

        document.querySelector('.cartQuantity').classList.add('active')

        checkBoxContainer.style.display = 'block'

        if (cart[productName]) {
            cart[productName].quantity += 1;
            const checkItem = checkOut.querySelector(`[data-name = "${productName}"]`)
            checkItem.querySelector('.quantity').textContent = cart[productName].quantity
        }

        else {
            cart[productName] = { quantity: 1, price: productPrice }
            const checkItems = document.createElement('div')
            checkItems.classList.add('checkItem')
            checkItems.setAttribute('data-name', productName)
            checkItems.innerHTML = `${productName} - ${productPrice} so'm <div class="quantityControls">
            <button class="minus">-</button>
            <button class="plus">+</button>
            <span class = "quantity">1</span>       
        </div> `
            checkOut.appendChild(checkItems)

            checkItems.querySelector('.minus').addEventListener('click',()=>{
                if(cart[productName].quantity>1){
                    cart[productName].quantity-=1;
                    checkItems.querySelector('.quantity').textContent = cart[productName].quantity
                    total -= productPrice;
                    Total.textContent = total
                }
                
            })
            checkItems.querySelector('.plus').addEventListener('click',()=>{
                
                    cart[productName].quantity +=1 ;
                    checkItems.querySelector('.quantity').textContent  = cart[productName].quantity;
                    total += productPrice;
                    Total.textContent  = total;
            })
        }

        total += productPrice;
        Total.textContent = total

        cartItemCount += 1;
        cartQuantity.textContent = cartItemCount
    })
})


// grill




// bill confirm teg open
const checkbox = document.getElementById('openBillConfirmTegID')
const billConfirmTeg = document.getElementById('billConfirmTeg')


checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        billConfirmTeg.style.display = 'block'
    }

    else {
        billConfirmTeg.style.display = 'none'
    }
})




    