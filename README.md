# Lab 5 - Starter

Names: Avnish Kovi, Yashil Vora

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   **Answer:** No I wouldn't. Unit testing is used more for debugging on a small scale and testing individual parts of our code that are in encaspulated units. Because of this we can't test how the individual components interact with each other on an application level field- testing out the "message" feature is attempting to do exactly that since we have to check whether a user can write and send a message to another user.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
   **Answer:** Yes I would. Unit testing is used more for debugging on a small scale and testing individual parts of our code that are in encaspulated units. Checking the length of a message is exactly that and it is a simple feature that can be tested and is unaffected by changing other app features since its debugging on a small scale.