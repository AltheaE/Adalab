/*function showMobileMenu() {
  var mobileMenu = document.querySelector('#js-menuMobile');

  var menuStatus = mobileMenu.style.display;
  if (menuStatus === 'none' || menuStatus === "") {
    mobileMenu.style.display ='flex';
  } else {
    mobileMenu.style.display ='none';
  }
}


var btnMobileMenu = document.querySelector('#js-btnMenu');
btnMobileMenu.addEventListener('click', showMobileMenu)*/

function showMobileMenu(){
  var mobileMenu = document.querySelector('#js-menuMobile');
  mobileMenu.classList.toggle('active');
}
var btnMobileMenu = document.querySelector('#js-btnMenu');
btnMobileMenu.addEventListener('click', showMobileMenu)
