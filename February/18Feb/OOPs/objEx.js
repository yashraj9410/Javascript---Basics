// Example of creating objects in JavaScript

// Using object literal
const personLiteral = {
    // Properties of the person
    name: 'John Doe',
    age: 25,

    // Method for greeting
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Using constructor function
function PersonConstructor(name, age) {
    // Properties of the person
    this.name = name;
    this.age = age;
}

// Adding the greet method to the prototype of PersonConstructor
PersonConstructor.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create instances of the objects
const personConstructor = new PersonConstructor('Jane Doe', 30);

// Call the greet method on each object
personLiteral.greet();
personConstructor.greet();
