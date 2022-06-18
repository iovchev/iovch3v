
const buttonShowImg = document.querySelector('.link-text--location');
const img = document.querySelector('.link-text--photo');


const toggleImg = () => {
	img.classList.toggle('active');
}

buttonShowImg.addEventListener('click', e => {
	e.preventDefault();

	toggleImg();
});

document.addEventListener('click', e => {
	let target = e.target;
	let itsImage = target == img || img.contains(target);
	let itsButtonImg = target == buttonShowImg;
	let activeImg = img.classList.contains('active');

	if(!itsImage && !itsButtonImg && activeImg) {
		toggleImg();
	}

});
