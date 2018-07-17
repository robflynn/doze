import Component from './component.js';

const DEFAULT_BUTTON_LABEL = "Button";

class Button extends Component {
    constructor(label) {
        super();

        this._label = label || DEFAULT_BUTTON_LABEL;
    }

    get label() {
        return this._label;
    }

    set label(newValue) {
        this._label = newValue;

        this._propertyChanged("label");
    }

    render() {

        let el = document.createElement("button");
        el.innerHTML = this.label;

        this.element = el;

        return this.element;
    }
}

export default Button;