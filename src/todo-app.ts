import { controller, target } from '@github/catalyst';
import { html, render } from '@github/jtml';
import TodoListElement from './todo-list';

@controller
class TodoAppElement extends HTMLElement {
    @target list: TodoListElement;

    connectedCallback() {
        this.update();
    }

    alert(ev: CustomEvent) {
        const text = ev.detail;
        this.list.add(text);
    }

    update() {
        this.innerHTML = `
            <section class="todoapp">
                <h1>Hello World!</h1>
                <section class="main">
                    <todo-input data-action="customsubmit:todo-app#alert"></todo-input>
                    <todo-list data-target="todo-app.list"></todo-list>
                </section>
            </section>
            <todo-footer></todo-footer>
        `;
    }
}

export default TodoAppElement;
