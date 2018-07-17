function Render(component, targetElement) {   
    if (!targetElement instanceof HTMLElement) {
        throw new Error("Target must be an HTMLElement");
    }

    if (component instanceof Doze.Component === false) {
        throw new Error("component must be of type Doze.Component");
    }

    let renderedComponent = component.render();

    component.componentWillRender();
    targetElement.appendChild(renderedComponent);
    component.componentDidRender();

    return renderedComponent;
}

module.exports = {
    Render
}