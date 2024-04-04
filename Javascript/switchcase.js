//Simple calculator using JS and Switchcase 

//we need this lisbrary module to accept user input
const prompt= require('prompt-sync')();

let results;
//accept the operator input
const operator= prompt('enter operator(either +, -, *, or / :')

//accept on operator input 
const num1= parseFloat(prompt('Enter the first number:' ));
const num2= parseFloat(prompt('Enter the second number:'));

switch (operator) {
    //Formular for addition
    case '+':
        results= num1 + num2;
        console.log(`${num1} + ${num2}  =  ${results}`);
        break;
     // formular for subtraction
    case '-':
        results= num1 - num2;
        console.log(`${num1} - ${num2}  =  ${results}`);
        break;
    // formular for devision 
    case '/':
         results= num1 / num2
        console.log(`${num1} / ${num2}  =  ${results}`);
        break;
    // formular for muplication 
    case '*':
         results= num1 * num2
         console.log(`${num1} * ${num2}  =  ${results}`);
         break;

}   