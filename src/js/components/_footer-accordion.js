const footer = document.querySelector('.footer__row')

window.addEventListener("click", function (event) {
	if (event.target.classList.contains('footer__title')) {
		event.target.classList.toggle("active")
	}
	if (event.target.classList.contains('Plans__title')) {
		event.target.classList.toggle("active")
	}
})