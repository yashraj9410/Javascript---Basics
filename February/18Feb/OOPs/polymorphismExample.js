// Example of polymorphism in JavaScript

class Animal {
    // Method for speaking
    speak() {
        console.log('Animal speaks.');
    }
}

// inherited
class Dog extends Animal {
    // Override the speak method for Dog
    speak() {
        console.log('Dog barks.');  // child oveerridden
    }
}

class Cat extends Animal {
    // Override the speak method for Cat
    speak() {
        console.log('Cat meows.');
    }
}

// Create instances of Animal, Dog, and Cat
const genericAnimal = new Animal();
const myDog = new Dog();
const myCat = new Cat();

// Call the speak method on each object, showcasing polymorphism
genericAnimal.speak();
myDog.speak();
myCat.speak();
