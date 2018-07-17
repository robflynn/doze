import { SetList, SetListEvent } from './utils/utils.js';

const uuid = require('uuid/v4');

class Component {
    constructor() { 
        this.id = uuid();
        this.element = null;
        this.classes = new SetList();

        this.classes.addListener((event, className) => { this._classesChanged(event, className) });
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

    htmlClasses() {
        console.log("UHH");
        console.log(this.classes);
        return this.classes.items.join(' ');
    }

    ///////////////////////
    // Events
    ///////////////////////
    componentWillRender() { console.log("component will render"); } 
    componentDidRender() { console.log("component did render"); } 

    _propertyChanged(name) {}

    _classesChanged(event, className) {

        console.log(event, className);

        if (!this.element) {
            console.log("--> not yet rendered, skipping");

            return;
        }


        switch (event) {
            case SetListEvent.Added: 
            {
               this.element.classList.add(className);
               break;
            }
            case SetListEvent.Removed: 
            {
                this.element.classList.remove(className);
                break;
            }
        }
    }    

    // Generate an HTMLElement that represents
    // our rendered component
    render() {
        let div = document.createElement("div");

        div.setAttribute('id', this.elementID());
        div.setAttribute('doze', this.componentType());

        if (this.classes.count > 0) {
            div.setAttribute('class', this.htmlClasses());
        }

        this.element = div;

        return this.element;
    }


}

export default Component;