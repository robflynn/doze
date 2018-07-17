const uuid = require('uuid/v4');

class Component {
    constructor() { 
        this.id = uuid();
        this.element = null;
    }

    componentType() {
        return this.constructor.name;
    }

    ///////////////////////
    // HTML Helper Methods
    ///////////////////////
    elementID() {
        return `doze_${this.id}`;
    }

    querySelector() {
        return `#${this.elementID()}`;
    }

    // Generate an HTMLElement that represents
    // our rendered component
    render() {
        this.element = document.createElement("div");

        return this.element;
    }
}

export default Component;