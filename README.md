# axius-sms
SMS service for Axuis challenge

Code Challenge

Techmate replies heavily on call, email and SMS communication between it’s internal service and our specialists. Additionally, we want to keep customers’ informations private by having specialists communicate with customers through our dashboard.

Your task is to build an outbound SMS communication between a nodejs application. Here is what we’d like for you to build:

1. Simple web form that posts to an expressjs route
2. The form will have 1 field; number
3. Submitting form sends SMS message to the desired number and with the message ‘what day is it today?’
4. Phone number receives message (Please use Twilio for SMS sending and replying)
6. Phone replies to the message
- The answer to the question ‘what day is it today’ should be posted to an expressjs route
- The day should be checked whether correct or incorrect
7. Reply back to number of the correctness of answer
- ‘True’ or ‘false’ if correct or not

That’s it! 

What makes a good challenge?
- Try to keep your code as minimal and easily reusable as possible
- Replying back to number if the question was not answered (eg. phone number replies with I like ice cream!’)
- Do not need to use expressjs, if you like other libraries like Hapi, totally fine! 
- Verifies phone number correctness (eg. cannot type ‘123123123123123123123123213123’ or international, let’s keep it US only)
- Correct for capitalize (eg. ‘Tuesday’ and ‘tuesday’ are the same and okay. ‘Tue’ is not. Nor is ‘T’ or ‘2’)
+points for using a frontend framework for the form
+points for deploying an example

What it does not need, but you can have
- Database
- Other SMS services other than Twilio (we use Twilio)

If you have any questions, feel free to reach out to mo@jointechmate.com