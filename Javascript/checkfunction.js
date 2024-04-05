let age;
let prompt = require("prompt-sync")();

function checkAge(Any){

    if(age>=18){
        return true
    }else {
        return console.log( "You don't have permission for your parents?");
    }
    //end of function checkAge 

    let age= prompt("How old are you", 18)
    if(checkAge(age)){
        console.log("Access is granted");
        showMovie();
    }else {}
    console.log("Access is denied!!");
}

function showMovie(){
    let d= 1000000
    let i= 0;
    for(i=100000;i >d;i--){ 
         console.log("Access is granted");

         console.log("Playing a movie time", i);
    }
        
    
}
showMovie();
    
