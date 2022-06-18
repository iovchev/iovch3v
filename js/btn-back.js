const btnLogoBack = document.querySelector('.logo-btn-back')
const arrow = document.querySelector('.span-arrow');
const logo = document.querySelector('.logo-text');
const btnLogo = document.querySelector('.logo-btn');

function getLogoBtn() {

	const here = location.href.split('/').slice(3);
    const parts = [{"text": 'Home', "link": '/'}];

    for (let i = 0; i < here.length; i++) {
        const part = here[i];
        const text = decodeURIComponent(part).toLowerCase().split('.')[0];
        const link = '/' + here.slice(0, i + 1).join('/');
        parts.push({"text": text, "link": link});
    }

		for (let j = 0; parts.length; j++) {
			if (parts[1].text === '') {
				logo.classList.add('active');
				break;
			} else {
				arrow.classList.add('active');
				btnLogoBack.addEventListener('click', () => {
					location.href = '/';
				});
				break;
			}
		}
}

getLogoBtn()