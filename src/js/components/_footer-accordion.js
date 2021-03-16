const footer = document.querySelector('.footer__row')

footer.addEventListener("click", function (event) {
	if (event.target.classList.contains('footer__title')) {
		event.target.classList.toggle("active")
	}
})