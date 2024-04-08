const Person={
    //data properties 
    //Key    Value
    firstName: 'Alice',

//accessor property (getter)
get getName () {
    return this.firstName;
}
,
set changeName(newName){// A parameter for re-assigning or mapping new values
 this.changeName=newName;//take the firstName and reassign to newPerson

}
} 
//End of the object 



console.log(Person)// This is just an object 
console.log(Person.firsName) // This is called accessing data property 
console.log(Person.getName) // this called accessuing using getter method 

//console.log(Person.getName())//

//set Method start Here to re-assign{
Person.newName= "Alison";
console.log(Person.firstName)
//} end of set method 