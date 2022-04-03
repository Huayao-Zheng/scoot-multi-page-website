const menuOpenBtn = document.querySelector('.nav__menu--open');
const menuCloseBtn = document.querySelector('.nav__menu--close');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__menu');

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

function openMenu() {
    nav.classList.add('active-menu');
    menuOpenBtn.style.display = 'none';
    menuCloseBtn.style.display = 'inline-block';
}

function closeMenu() {
    nav.classList.remove('active-menu');
    menuOpenBtn.style.display = 'inline-block';
    menuCloseBtn.style.display = 'none';
}
