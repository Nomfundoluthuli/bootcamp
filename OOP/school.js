let school ={
    name: " Secunda Secondary School",
    established: "199",
    location: "Mpumalanga",
    learners: 100,
///Create a function that fetches school properties and attributes
    displayinfo: function(){
        console.log(`The name of the school is ${school.location}' \n located at 
        ${school.located} established at ${school.established} `);
   
    },// End of function displayinfo

    

    hardData: function() {
         console.log("The name school is " + school.name + "\n"
          + "located at" + school.location)
    },

    //
    notationData: function(){

        console.log('The name of the school' + school['name']
        + "loctated at " + school['location']
        
        ) 
    }
}// End of object 

school.displayinfo() 
school.hardData()
school.nota