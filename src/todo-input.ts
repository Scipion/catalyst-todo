import { controller, target } from '@github/catalyst';
import { html, render } from '@github/jtml';

@controller
class TodoInputElement extends HTMLElement {
    @target text: HTMLInputElement;

    connectedCallback() {
        this.update();
    }
    
    handleOnSubmit(ev: Event) {
        ev.preventDefault();

        if (!this.text.value) return;
        this.dispatchEvent(new CustomEvent("customsubmit", { detail: this.text.value }));

        this.text.value = '';
    }

    update() {
        render(
            html`
                <form data-action="submit:todo-input#handleOnSubmit">
                    <input
                        class="new-todo"
                        data-target="todo-input.text"
                        type="text"
                        placeholder="What neds to be done?"
                        />
                </form>
            `,
            this
        )
    }
}

export default TodoInputElement;