public with sharing class QuestionWithAnswersController {
     public String questionId{get;set;}
    // public Question__c objQuestion{get;set;}
    public String accountId{get;set;}
    public Account actObj{get;set;}

    public QuestionWithAnswersController(){
        //objQuestion = new Question__c();
        actObj = new Account();
    }

    @AuraEnabled
    public static void upvoteAnswer(Id answerId) {
        Answer__c answer = [SELECT Upvotesc__c FROM Answer__c WHERE Id =: answerId];
        answer.Upvotesc__c += 1;
        update answer;
    }

    @AuraEnabled
    public static void downvoteAnswer(Id answerId) {
        Answer__c answer = [SELECT Downvotesc__c FROM Answer__c WHERE Id =: answerId];
        answer.Downvotesc__c += 1;
        update answer;
    }

    @AuraEnabled(cacheable=true)
    public static List<Answer__c> getAnswersOfQuestion1(String questionId) {
        return [SELECT Id, Question__c, Answer__c.Description__c FROM Answer__c where Question__c = :questionId Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Question__c> getQuestion1() {
        return [SELECT Id, Description__c, CreatedById FROM Question__c Limit 10];
    }

    @AuraEnabled
    public static List<Question__c> getQuestionRecordList1() {
        return [SELECT Id, Description__c, CreatedById FROM Question__c Limit 10];
    }
    public pageReference retriveQuestionDetail1()
    {
        if(questionId!=null)
        {
            objQuestion=[SELECT Id, Description__c, CreatedById FROM Question__c where id=:questionId];
        }
        return null;
    }


    // For Account and Contact
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAnswersOfQuestion(String accountId) {
        return [SELECT Id, FirstName, LastName FROM Contact where AccountId = :accountId Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getQuestion() {
        return [SELECT Id, Name, Type FROM Account Limit 10];
    }

    @AuraEnabled
    public static List<Account> getQuestionRecordList() {
        return [SELECT Id, Name, Type FROM Account Limit 10];
    }
    public pageReference retriveQuestionDetail()
    {
        if(accountId!=null)
        {
            actObj=[SELECT Id, Name, Type FROM Account where id=:accountId];
        }
        return null;
    }

}