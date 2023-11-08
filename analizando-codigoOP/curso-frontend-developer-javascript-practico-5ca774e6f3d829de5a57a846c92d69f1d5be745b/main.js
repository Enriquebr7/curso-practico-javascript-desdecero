const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


/* function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.add('inactive');
} 

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
} */

function toggleDesktopMenu() { aside.classList.add('inactive'); desktopMenu.classList.toggle('inactive'); }

function toggleMobileMenu() { aside.classList.add('inactive'); mobileMenu.classList.toggle('inactive'); }

function toggleCarritoAside() { desktopMenu.classList.add('inactive'); mobileMenu.classList.add('inactive'); aside.classList.toggle('inactive'); }

const productList = [];
productList.push({
  name: 'Bike',
  Price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Motorcicle',
  Price: 1120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Patines',
  Price: 1120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});