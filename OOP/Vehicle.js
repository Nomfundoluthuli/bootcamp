class Vehicle{
    constructor(name, maker, engine, color, wheels, )
    {
     this.name = name;
     this.maker = maker;
     this.engine = engine;
     this.color = color;
     this.wheels = wheels;


    } // end of constructor

    getDetails(){
        return("The name of the vehicle is: " + this.name)

    }
}
let sedan = new Vehicle( 'Atios', 'Toyota', '1.4', 'Red', '55')
