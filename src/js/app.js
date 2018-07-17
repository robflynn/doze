import Doze from './doze/doze';

window['Doze'] = Doze;

window['$$'] = (query) => {
	return document.querySelectorAll(query);
}

window['$'] = (query) => {
	return document.querySelector(query);
}

class Womble extends Doze.Component {
	constructor(noodle) {
		super();		

		this.noodle = noodle;
	}

	render() {
		this.element = super.render();

		this.element.innerHTML = this.noodle;

		return this.element;
	}
}
const init_app = () => {
	let app = new Doze.App();
	let pane = new Doze.Pane();
	// Maybe we should call this thing a window, and each app has to have
	// some kind of window or screen on display
	app.contentPane = pane;

	let button = new Doze.Button("Save");

	let buttonBar = new Doze.Pane();
	buttonBar.layout = Doze.Layout.Horizontal;
	buttonBar.addChild(button);

	pane.addChild(buttonBar);

	Doze.Render(app, $("#app"));

	console.log(Doze);
}

// Main entry point
document.addEventListener('DOMContentLoaded', init_app);

