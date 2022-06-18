
let hamburger = document.querySelector('.btn-burger');
let menu = document.querySelector('.menu-burger');

const toggleMenu = () => {
	menu.classList.toggle('active');
}

hamburger.addEventListener('click', e => {
	e.stopPropagation();

	toggleMenu();
});

document.addEventListener('click', e => {
	let target = e.target;
	let itsMenu = target == menu || menu.contains(target);
	let itsHamburger = target == hamburger;
	let activeMenu = menu.classList.contains('active');

	if (!itsMenu && !itsHamburger && activeMenu) {
		toggleMenu();
	}
});
