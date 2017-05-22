/*var mobileMenu = document.querySelector('#js-menuMobile');

function showMobileMenu() {
  var menuStatus = mobileMenu.style.display;
  if (menuStatus =='none') {
    menuStatus ='flex';
  } else if( menuStatus== 'flex') {
    menuStatus ='none';
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
