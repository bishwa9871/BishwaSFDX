import { LightningElement, api } from 'lwc';

export default class InputComp extends LightningElement {
    textValue;
    @api inputValue;

    handleInputFocus(event) {
        // modify parent to properly highlight visually
        const classList = event.target.parentNode.classList;
        classList.add('lgc-highlight');
    }

    handleInputBlur(event) {
        // modify parent to properly remove highlight
        const classList = event.target.parentNode.classList;
        classList.remove('lgc-highlight');
    }

    @api
    handleInputChange(event) {
        inputValue  = event.detail.value;
        console.log(event.detail.value);
        debugger;
        this.dispatchEvent(new CustomEvent('inputChange', {detail: {value:inputValue}, bubbles: true}));
    }
}