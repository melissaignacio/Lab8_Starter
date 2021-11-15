# Lab 8 - Starter
1. In your own words: Where would you fit your automated tests in your Recipe project development pipeline?

Within a Github action that runs whenever code is pushed because it is important to make sure that all edits to a project does not have a bug that causes things to stop working.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

no 

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No because it seem like it would be testing two different functions such as writting and sending. Unit test should only test one function.


4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

yes because it seems like it would only need to test one function rather than multiple.
