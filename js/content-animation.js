const btnWork = document.querySelector('.link-text--work')
const btnPhoto = document.querySelector('.link-text--location');
const photo = document.querySelector('.link-text--photo');

btnWork.addEventListener('click', (e) => {
	e.preventDefault();
});

btnPhoto.addEventListener('click', (e) => {
	e.preventDefault();

		photo.classList.add('active')
		setTimeout(() => {
			photo.classList.remove('active')
		}, 5000);
});
