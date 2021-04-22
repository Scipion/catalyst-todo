import { controller } from '@github/catalyst';

@controller
class TodoItemElement extends HTMLElement {
    index: number = 0;
    checked: boolean = false;
    label: string = '';

    connectedCallback() {
        this.update();
    }

    static get observedAttributes() {
        return ['index', 'checked', 'label'];
    }

    attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {

        if (attrName === 'label') {
            this.label = newVal;
        }
        else if (attrName === 'index') {
            this.index = parseInt(newVal);
        }
        else if (attrName === 'checked') {
            this.checked = newVal === 'true' ? true : false;
        }
    }

    handleOnRemoved() {
        this.dispatchEvent(new CustomEvent("removed", { detail: this.index }));
    }

    handleOnLabeled() {
        this.dispatchEvent(new CustomEvent("labeled", { detail: this.index }));
    }

    handleOnChecked(ev: CustomEvent) {
        this.dispatchEvent(new CustomEvent("checked", {
            detail: {
                index: this.index,
                checked: ev.detail.checked
            }
        }));
    }

    update() {
        this.innerHTML = `
                <li class="${this.checked ? 'completed' : ''}">
                    <div class="${this.checked ? 'checked' : ''}">
                        <input class="toggle" type="checkbox" 
                            ${this.checked ? 'checked' : ''}
                            data-action="change:todo-item#handleOnChecked">
                        <label>${this.label}</label>
                        <button class="destroy" data-action="click:todo-item#handleOnRemoved"></button>
                    </div>
                </li>
            `;
    }
}

export default TodoItemElement;