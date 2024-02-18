// example for constructor 
class Animal {
    // this is a special method that will be invoked when intsnce of class is created
    constructor(name){
        this.name = name;
    }

    animalName(){
        console.log(`Animal Name is ${this.name}`)
    }
}


const dog = new Animal("German Sepherd");

dog.animalName();
