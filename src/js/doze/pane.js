import Component from './component.js';
import Layout from './layout.js';

class Pane extends Component {
    constructor() {
        super();

        this.children = [];

        this._layout = Layout.Vertical;

        this.classes.add('doze--Container');
        this.classes.add('doze--Pane');
    }

    addChild(child) {
        if (component instanceof Component === false) {
            throw new Error("child must be of type Component");
        }

        if (this.containsChild(child)) {
            throw new Error("child already exists in Container");
        }

        this.children.push(child);

        return this;
    }

    removeChild(child) {
        if (component instanceof Component === false) {
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