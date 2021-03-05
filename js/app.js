const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const block = document.querySelector('.block')

window.addEventListener('resize', function () {
	adaptive_function();
	adaptive_header(w, h)
})
	
function adaptive_header(w, h) {
	const headerMenu = document.querySelector('.header__menu')
	const nav = document.querySelector('.header__list')
	const button = document.querySelector('.button')
	const container = document.querySelector('.header__top')
	const logo = document.querySelector('.logo')
	
	if (w < 768) {

		if (!nav.classList.contains('done')) {
			nav.classList.add('done')
			menu.append(logo)
			menu.append(nav)
			nav.append(button) 
		}
	}

	else {

		if (nav.classList.contains('done')) {
			nav.classList.remove('done')
			block.classList.remove('active')
			headerMenu.append(nav)
			container.append(logo)
			container.append(button)
		}

	}
}

function adaptive_function() {
	let w = window.innerWidth
	let h = window.innerHeight
	adaptive_header(w, h);
}

adaptive_function()



burger.addEventListener('click', ()=> {
	burger.classList.toggle('active')
	block.classList.toggle('active')

	if (window.innerWidth < 576) {
		burger.classList.toggle('w')
	}
})