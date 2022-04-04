const menuham = document.querySelector('.header__mobile-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu__closed--button');
// const curtain = document.querySelector('.curtain');

menuham.addEventListener('click', (e) => {
    menu.classList.add('menu--on');
    // curtain.classList.add('curtain--on')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--on')
    // curtain.classList.remove('curtain--on')
})