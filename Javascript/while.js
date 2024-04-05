//lets create program that calculate positive number only 

// If a user enters a negative number that number is skipped 
let prompt = require('prompt-sync')();

// negative number -> loop must terminte
//non numeric charecters --> skip it

let sum= 0;
let num = 0.1;
while (num> 0){
    sum += num;

    //accept input for uesr 
    num= parseInt(prompt ('Enter a number: '));

    //contine condition NaN = Not an Number
    if(isNaN(num)){
        console.log('You entered a string that is not a number');
        num=0
        continue;
    }

    //display results
    console.log('The sum is ${sum}');
}