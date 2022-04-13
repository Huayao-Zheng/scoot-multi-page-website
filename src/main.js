const menuOpenBtn = document.querySelector('.nav__menu--open');
const menuCloseBtn = document.querySelector('.nav__menu--close');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__menu');

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

function openMenu() {
    document.body.style.overflow = 'hidden';
    nav.classList.add('active-menu');
    menuOpenBtn.style.display = 'none';
    menuCloseBtn.style.display = 'inline-block';
}

function closeMenu() {
    document.body.style.overflow = '';
    nav.classList.remove('active-menu');
    menuOpenBtn.style.display = 'inline-block';
    menuCloseBtn.style.display = 'none';
}

/* ================= Close mobile menu when Get Scootin cta is clicked ================= */
const scootBtnOnMobileMenu = document.querySelector('.nav__menu .btn');

scootBtnOnMobileMenu.addEventListener('click', closeMenu);

/* ================= Close mobile menu when click outside of mobile menu ================= */
window.addEventListener('click', (e) => {
    const hasClickedOutsideOfMenu = !menu.contains(e.target);
    const isMenuOpen = getComputedStyle(menu).getPropertyValue('left') === '0px';

    if (hasClickedOutsideOfMenu && isMenuOpen) {
        closeMenu();
    }
});

/* ================= Apply shadow style to header when scroll down ================= */
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 44);
});

/* ================= handle FAQs toggle ================= */
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
