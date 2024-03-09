// constructor, this example 

class Car {

    constructor(brand,model,year){
        // creating a new key 
        this.b = brand ;
        this.m = model;
        this.y = year;
    }
}

const car1 = new Car("Suzuki","abs", "1990")
const car2 = new Car("Toyota","camry", "2008")
console.log(car1,car2)