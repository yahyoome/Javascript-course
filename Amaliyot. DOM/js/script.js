const advs = document.querySelector('.promo__adv img'),
	promoGenre = document.querySelector('.promo__genre')


promoGenre.innerHTML = 'Comedy'

advs.forEach(item => {
	item.remove()
});