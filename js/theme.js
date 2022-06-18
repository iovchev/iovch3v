
let btnChangeTheme = document.querySelector('.btn-mode');
let imgDay = document.querySelector('.span-day');
let imgNight = document.querySelector('.span-night');
let html = document.querySelector('html');

btnChangeTheme.addEventListener('click', e => {
		e.preventDefault();

		if(localStorage.getItem('theme') === 'dark') {
			localStorage.removeItem('theme');
		} else {
			localStorage.setItem('theme', 'dark');
		}

		addDarkTheme();
	});

function addDarkTheme() {
	 try {

		if(localStorage.getItem('theme') === 'dark') {
			html.classList.add('dark');
			imgNight.classList.add('active');
			imgDay.classList.remove('active');
		} else {
			html.classList.remove('dark');
			imgNight.classList.remove('active');
			imgDay.classList.add('active');
		}
	
	} catch (err) {
		console.log('Dark theme not change!!!')
		}
}

addDarkTheme();