const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingcartContainer = document.querySelector('#shoppingcartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toogleDesktopMenu() {
    const isAsideClosed = shoppingcartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        //si aside esta open, hay que cerrar
        shoppingcartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu() {
    const isAsideClosed = shoppingcartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        //si aside esta open, hay que cerrar
        shoppingcartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
function toogleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        //si mobile esta open, hay que cerrar
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        //si mobile esta open, hay que cerrar
        productDetailContainer.classList.add('inactive');
    }
    shoppingcartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    shoppingcartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//Lista de productos

const productList = [];
productList.push({
    name:'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name:'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});
productList.push({
    name:'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});

function renderProducts(arr){
    //recorrer arrays
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productInfoFigures = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigures.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigures);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)