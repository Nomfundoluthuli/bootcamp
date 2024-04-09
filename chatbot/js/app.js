function talk(){
    var know = {
         "Hello" : "Hi there ",
         "Who are you?" : "My name, is Alice ",
         "How are you?" : " I am good :-)",
         "What can I do for you?" : "Give us a follow and a like!",
        "Your followers?" : "I have 1000 likes, no followers yet!",
        "Okay" : "Thanks for the convo",
        "Bye" : "Okay! We will meet soon, was nice chatting with you",
    }
    var user= document.getElementById('userBox').value;  //get the user input 
    document.getElementById('chatLog').innerHTML = user + "<b>";

    if(user in know){
         document.getElementById('chatLog').innerHTML = know[user] + "</b>";
    
    } else{
        document.getElementById('chatLog').innerHTML ="Sorry I didn't understand"
    }
}