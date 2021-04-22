import { controller, target } from '@github/catalyst';
import { html, render } from '@github/jtml';

@controller
class TodoInputElement extends HTMLElement {
    @target text: HTMLInputElement;
    #value = '';

    connectedCallback() {
        this.update();
    }

    handleInputChange(ev: KeyboardEvent) {
        this.#value = this.text.value;
    }

    handleOnSubmit(ev: Event) {
        ev.preventDefault();
        if (!this.#value) return;
        this.dispatchEvent(new CustomEvent("customsubmit", { detail: this.#value }));

        this.#value = '';
        this.text.value = this.#value;
    }

    update() {
        render(
            html`
                <form data-action="submit:todo-input#handleOnSubmit">
                    <input
                        class="new-todo"
                        data-target="todo-input.text"
                        data-action="keyup:todo-input#handleInputChange"
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