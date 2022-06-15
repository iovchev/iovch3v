
const btnMode = document.querySelector('.btn-mode');

btnMode.addEventListener('click', (e) => {
		e.preventDefault();

		if(localStorage.getItem('theme') === 'dark') {
			localStorage.removeItem('theme')
		} else {
			localStorage.setItem('theme', 'dark')
		}
		addDarkTheme()
	});

function addDarkTheme() {
	 try {
		if(localStorage.getItem('theme') === 'dark') {
			document.querySelector('html').classList.add('dark')
			document.querySelector('.span-night').classList.add('active')
			document.querySelector('.span-day').classList.remove('active')
		} else {
			document.querySelector('html').classList.remove('dark')
			document.querySelector('.span-night').classList.remove('active')
			document.querySelector('.span-day').classList.add('active')
		}
	
	} catch (err) {	}
}

addDarkTheme();