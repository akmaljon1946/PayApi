const menuham = document.querySelector('.header__mobile-btn')
const menu = document.querySelector('.header__menu')
const closeBtn = document.querySelector('.header__menu-closed--button')
// const curtain = document.querySelector('.curtain');

menuham.addEventListener('click', e => {
	menu.classList.add('header__menu--on')
	menu.classList.add('animation-in')
	// curtain.classList.add('curtain--on')
})

closeBtn.addEventListener('click', () => {
	menu.classList.remove('header__menu--on')
	// curtain.classList.remove('curtain--on')
})
