const productControls = document.querySelector('.cart__products')
let productQuantityControl = document.querySelectorAll('.product__quantity-control')
const buttonAddProducts = document.querySelectorAll('.product__add')
function productsQuantity(event) {
    let value = event.target.parentElement.querySelector('.product__quantity-value')
    let count = value.textContent
    if (event.target.classList.contains('product__quantity-control_inc')){
        count++
        value.textContent = count
    } else if(count > 1) {
        count--;
        value.textContent = count
    }
    else count = 1
}
function addedProductsCart(event) {
    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const countFromProduct = +event.target.parentElement.querySelector('.product__quantity-value').innerText;
    const productImg = product.querySelector('.product__image').src;
    const productValue = product.querySelector('.product__quantity-value').innerText;
    const productToCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${productValue}</div>
                            </div>`;
    const productInCard = Array.from(productControls.querySelectorAll('[data-id]')).find((element) => element.dataset.id === id);
    if(productInCard) {
        let productCount = productInCard.querySelector('.cart__product-count');
        let total = +productCount.innerText;
        productCount.innerText = total + countFromProduct;
    } else {
        if (Number(productValue) !== 0) {
            productControls.insertAdjacentHTML('beforeend', productToCart);
        } else alert('Введите количество продуктов')
    }
}

productQuantityControl.forEach((item) => {
    item.addEventListener('click', productsQuantity)
})

buttonAddProducts.forEach((item) => {
    item.addEventListener('click', addedProductsCart)
})