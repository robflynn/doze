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

	app.contentPane = pane;

	let no1 = new Womble("AAA");
	let no2 = new Womble("BBB");
	let no3 = new Womble("CCC");

	pane.addChild(no1);
	pane.addChild(no2);
	pane.addChild(no3);

	Doze.Render(app, $("#app"));

	console.log(Doze);

	pane.layout = Doze.Layout.Horizontal;
}

// Main entry point
document.addEventListener('DOMContentLoaded', init_app);

