const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shippingCartContainer = document.querySelector('#shippingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshippingCartContainer);


/* function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  shippingCartContainer.classList.add('inactive');
} 

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
} */

function toggleDesktopMenu() { shippingCartContainer.classList.add('inactive'); desktopMenu.classList.toggle('inactive'); }

function toggleMobileMenu() { shippingCartContainer.classList.add('inactive'); mobileMenu.classList.toggle('inactive'); }

function toggleCarritoAside() { desktopMenu.classList.add('inactive'); mobileMenu.classList.add('inactive'); shippingCartContainer.classList.toggle('inactive'); }

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalla',
  price: 1120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computador',
  price: 2120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



  
  /* <section class="main-container">
<div class="cards-container">

  <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>

</div>
</section>
 */

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
   
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
   
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
   
    const productInfoDiv = document.createElement('div');
   
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;
   
   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);
   
   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
   productInfoFigure.appendChild(productImgCart);
   
   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);
   
   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);
   cardsContainer.appendChild(productCard);
   };
}

renderProducts(productList);

