import Doze from './doze/doze';

window['Doze'] = Doze;

window['$$'] = (query) => {
	return document.querySelectorAll(query);
}

window['$'] = (query) => {
	return document.querySelector(query);
}

const init_app = () => {
	let app = new Doze.App();
	let pane = new Doze.Pane();

	app.contentPane = pane;

	Doze.Render(app, $("#app"));

	console.log(Doze);
}

// Main entry point
document.addEventListener('DOMContentLoaded', init_app);

