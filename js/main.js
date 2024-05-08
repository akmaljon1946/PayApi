const menuham = document.querySelector('.header__mobile-btn')
const menu = document.querySelector('.header__menu')
const closeBtn = document.querySelector('.header__menu-closed--button')
// const curtain = document.querySelector('.curtain');

menuham.addEventListener('click', e => {
	menu.classList.add('header__menu--on')
	menu.classList.remove('header__menu--animation-out')
	menu.classList.add('header__menu--animation-in')
	curtain.classList.add('curtain--on')
})

closeBtn.addEventListener('click', () => {
	menu.classList.remove('header__menu--on')
	menu.classList.remove('header__menu--animation-in')
	menu.classList.add('header__menu--animation-out')

	curtain.classList.remove('curtain--on')
})
