import { controller, target } from '@github/catalyst';

@controller
class TodoAppElement extends HTMLElement {
    @target list: HTMLElement;

    connectedCallback() {
        this.update();
    }

    alert(ev: CustomEvent){
        const text = ev.detail;
        this.list.add(text);
    }

    update(){
        this.innerHTML = `
            <h1>Hello World!</h1>
            <section class="main">
                <todo-input data-action="customsubmit:todo-app#alert"></todo-input>
                <todo-list data-target="todo-app.list"></todo-list>
            </section>
        `
    }
}

export default TodoAppElement;