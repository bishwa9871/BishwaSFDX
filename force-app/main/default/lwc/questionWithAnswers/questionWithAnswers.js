import { LightningElement,api, wire } from 'lwc';
//import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import getQuestion from '@salesforce/apex/QuestionWithAnswersController.getQuestion';

//const fields = [QUESTION_OBJECT, ANSWER_OBJECT];
// const columns = [
//     {label : 'Question Name', fieldName : 'Name'},
//     {label : 'Question Description', fieldName : 'Description__c'}
// ]

export default class QuestionAndAnswers extends LightningElement {

    //accountId;
    //columns = columns;
      
  //@api recordId;
  @wire(getQuestion) accounts;
  accountId;
  handleClick(event){
    event.preventDefault();
    this.accountId = event.target.dataset.accountId;
  }

  //results;
  //error;

//   get hasContacts() {
//     return this.account && this.account.Contacts && this.account.Contacts.length > 0;
// }

// get account() {
//     return this.contacts.data && this.contacts.data.length > 0 ? this.contacts.data[0] : null;
// }

//   @wire(getQuestionWithAnswers, { recordId: '$recordId', fields: [QUESTION_OBJECT, ANSWER_OBJECT] })
//   questionAndAnswers;

    // @wire(getRecord, {recordId: '$recordId', fields:'Question__c.Id'})
    // questionId;
    
  // @api questionId;
  // @wire(getQuestionWithAnswers, {questionId: '$questionId'})
  // wireAnswer({error, data})
  // {
  //   //console.log('questionId : ****************   ', this.questionId);
  //   if (data) {
  //       this.results = data;
  //    } else if (error) {
  //       this.error = error;
  //       //console.error(error);
  //    }
  // }

}