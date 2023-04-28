import { LightningElement, track } from 'lwc';
import InputComp from 'c/inputComp';

export default class HelloWorld extends LightningElement {

    countryName = 'India';
    @track childComponentValue;

    handleInputChangeEvent(event) {
        // Handle the inputchange event fired by the inputComp child component
        console.log('Value in Hello file is ' + event.detail.value);
        debugger;
        this.childComponentValue = event.detail.value;
    }
}