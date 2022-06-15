const breadcrumbs = document.querySelector('.breadcrumbs');

function getBreadcrumbs() {
	let currentLocation = location.href.split('/').slice(3);
	let parts = [{"text": 'Home', "link": '/'}]
	
	for (let i = 0; i < currentLocation.length; i++) {
		let part = currentLocation[i];
		let textLower = part.toLowerCase().replace("-", " ").split('.')[0];
		let text = textLower[0].toUpperCase() + textLower.slice(1);
		let link = '/' + currentLocation.slice(0, i + 1).join('/');
		parts.push({ "text": text, "link": link });
	} 

	if (parts.length - 1 ) {
		return parts.map((part) => {
			return `
			<li class="breadcrumbs-item">
				<a class="breadcrumbs-link breadcrumbs-link--deactive" href="${part.link}">${part.text}</a>
			</li>`
		}).join('');
	} else {
		return parts.map((part) => {
			return `
			<li class="breadcrumbs-item">
				<a class="breadcrumbs-link" href="${part.link}">${part.text}</a>
			</li>`
		}).join('');
	}
}

breadcrumbs.innerHTML = getBreadcrumbs();