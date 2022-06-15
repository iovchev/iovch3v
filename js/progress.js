
// full height
let fullHeight = document.body.scrollHeight;
// height not scroll section
let innerHeight = window.innerHeight;
const progressBar = document.querySelector('.progressbar>.progressbar-line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
	fullHeight = document.body.scrollHeight;
	innerHeight = window.innerHeight;
	progressBar.style.width = (pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
}