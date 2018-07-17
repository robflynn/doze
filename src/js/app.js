import Doze from './doze/doze';

window['Doze'] = Doze;

window['$$'] = (query) => {
	return document.querySelectorAll(query);
}

window['$'] = (query) => {
	return document.querySelector(query);
}

const init_app = () => {
	let component = new Doze.Component();

	Doze.Render(component, $("#app"));

	console.log(Doze);
}

// Main entry point
document.addEventListener('DOMContentLoaded', init_app);

