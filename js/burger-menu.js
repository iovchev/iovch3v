
	// Мобильное меню бургер
		const burger = document.querySelector('.btn-burger')
		burger.addEventListener('click', () => {
			document.querySelector('.menu-burger').classList.toggle('active')
		})
 		window.addEventListener('scroll', () => { 
			document.querySelector('.menu-burger').classList.remove('active')
		})