import { LightningElement, api, wire } from 'lwc';
import getAnswersOfQuestion from '@salesforce/apex/QuestionWithAnswersController.getAnswersOfQuestion';

export default class AnswerList extends LightningElement {
columns = [
        {label : 'First Name', fieldName : 'FirstName'},
        {label : 'Last Name', fieldName : 'LastName'}
    ]
    @api accountId;
    @wire(getAnswersOfQuestion, {accountId: '$accountId'})
    contacts;


}