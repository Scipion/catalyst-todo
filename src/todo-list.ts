import { controller } from '@github/catalyst';

@controller
class TodoListElement extends HTMLElement {
    #list: { text: string; checked: boolean }[] = [
        { text: 'AAA', checked: false },
        { text: 'BBB', checked: true },
        { text: 'CCC', checked: false },
    ];

    set list(list: { text: string; checked: boolean }[]) {
        this.#list = list;
        this.update();
    }

    connectedCallback() {
        this.update();
    }

    add(text: string) {
        this.#list = [...this.#list, { text, checked: false }];
        this.update();
    }

    handleOnRemoved(ev: CustomEvent) {
        const index = ev.detail;
        this.#list = this.#list.filter((elem, ix) => index !== ix);
        this.update();
    }

    handleOnChecked(ev: CustomEvent) {
        const [index, checked] = [ev.detail.index, ev.detail.checked];
        this.#list[index] = { ...this.#list[index], checked: checked };
        this.update();
    }

    update() {
        this.innerHTML = `
            <ul class="todo-list">
                ${this.#list
                    .map(
                        (item, index) => `
                        <todo-item
                            index="${index}"
                            checked="${item.checked}"
                            label="${item.text}"
                            data-targets="todo-list.items"
                            data-action="
                                removed:todo-list#handleOnRemoved
                                checked:todo-list#handleOnChecked
                            "
                            ></todo-item>
                    `
                    )
                    .join('')}
            </ul>`;
    }
}

export default TodoListElement;
