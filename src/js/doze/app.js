import Component from './component';
import Pane from './pane';
import { Render } from './renderer';

class App extends Component {
    constructor() {
        super();

        this.classes.add('doze--App')
        this._contentPane = null;
    }

    set contentPane(pane) {
        if (pane instanceof Pane === false) {
            throw new Error("contentPane must be a Pane");
        }

        this._contentPane = pane;
    }

    get contentPane() {
        return this._contentPane;
    }

    render() {
        this.element = super.render();

        if (this._contentPane) {
            let childElement = Render(this._contentPane, this.element);

            childElement.classList.add('fullsize');
        }

        return this.element;
    }
}

export default App;