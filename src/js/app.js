window['$$'] = (query) => {
	return document.querySelectorAll(query);
}

window['$'] = (query) => {
	return document.querySelector(query);
}

class TestApp {
	constructor(query) {
		this.component = $(query);
	}

	render() {
		this.component.innerHTML = 'App Test';
	}
}

const init_app = () => {
	let app = new TestApp('#app');

	app.render();
}

// Main entry point
document.addEventListener('DOMContentLoaded', init_app);

