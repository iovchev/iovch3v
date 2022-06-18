const breadcrumbs = document.querySelector('.breadcrumbs');

function getBreadcrumbs() {
	let linksObj = [];
	let currentLocation = location.href.split('/').slice(3);

	if (currentLocation[0] === '') {
		linksObj = {text: 'Home', link: '/'};
	} else {
		for(let i = 0; i < currentLocation.length; i++) {
			linksObj.push({text: 'Home', link: '/'});
			let itemLink = currentLocation[i];
			let textLower = itemLink.toLowerCase().replace("-", " ").split('.')[0];
			let textLink = textLower[0].toUpperCase() + textLower.slice(1)
			let link = '/' + currentLocation.slice(0, i + 1).join('/');
			linksObj.push({text: textLink, link: link});
		}
	}

	if (linksObj.length - 1 ) {
		return linksObj.map((part) => {
			return `
			<li class="breadcrumbs-item">
				<a class="breadcrumbs-link breadcrumbs-link--deactive" href="${part.link}">${part.text}</a>
			</li>`
		}).join('');
	} else {
		return linksObj.map((part) => {
			return `
			<li class="breadcrumbs-item">
				<a class="breadcrumbs-link" href="${part.link}">${part.text}</a>
			</li>`
		}).join('');
	}
}

breadcrumbs.innerHTML = getBreadcrumbs();

