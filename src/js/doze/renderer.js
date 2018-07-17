function Render(component, targetElement) {   
    if (!targetElement instanceof HTMLElement) {
        throw new Error("Target must be an HTMLElement");
    }

    if (!component instanceof Doze.Component) {
        throw new Error("component must be of type Doze.Component");
    }

    targetElement.appendChild(component.render());

    console.log(component, targetElement);
}

module.exports = {
    Render
}