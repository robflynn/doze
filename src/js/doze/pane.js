import Component from './component.js';
import Layout from './layout.js';

class Pane extends Component {
    constructor() {
        super();

        this.children = [];

        this.layout = Layout.Default;

        this.classes.add('doze--Container');
        this.classes.add('doze--Pane');
    }

    get layout() {
        return this._layout;
    }

    set layout(newValue) {
        this.classes.remove(`doze--Pane--${this._layout}`);

        this._layout = newValue;

        this.classes.add(`doze--Pane--${this._layout}`);        
    }

    render() {
        this.element = super.render();

        this.children.forEach(child => {
            Doze.Render(child, this.element);
        });

        return this.element;
    }

    addChild(child) {
        if (child instanceof Component === false) {
            throw new Error("child must be of type Component");
        }

        if (this.containsChild(child)) {
            throw new Error("child already exists in Container");
        }

        this.children.push(child);

        return this;
    }

    removeChild(child) {
        if (child instanceof Component === false) {
            throw new Error("child must be of type Component");
        }

        if (!this.containsChild(child)) {
            throw new Error("child is not in this Container");
        }

        this.children.splice(this.children.indexOf(child), 1);

        return this;        
    }

    containsChild(child) {
        return this.children.includes(child);
    }
}

export default Pane;