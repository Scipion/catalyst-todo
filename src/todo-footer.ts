import { controller, target } from '@github/catalyst';

@controller
class TodoFooterElement extends HTMLElement {
    connectedCallback() {
        this.update();
    }

    update() {
        this.innerHTML = `
            <footer class="info">
                <p>
                    Simple ToDo list using WebComponents with
                    <a href="http://github.com/github/catalyst">@github/catalyst</a>
                </p>
                <p>Styles based on TodoMVC</p>
                <p>Created by <a href="http://github.com/scipion/">scipion</a></p>
            </footer>
        `;
    }
}

export default TodoFooterElement;
