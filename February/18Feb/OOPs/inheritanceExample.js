// Example of inheritance in JavaScript

// Parent class
class Shape {
    // Constructor initializes the color property
    constructor(color) {
        this.color = color;
    }

    // Method for drawing the shape
    draw() {
        console.log(`Drawing a shape with color ${this.color}`);
    }
}

// extends keyword is used to implement inheritence 
// Child class inheriting from Shape
class Circle extends Shape {
    // Constructor initializes color and radius properties
    constructor(color, radius) {
        // Call the constructor of the parent class (Shape)
        super(color);
        this.radius = radius;
    }

    // method overriding --> polymorphism 
    // Override the draw method to provide specific behavior for Circle
    draw() {
        console.log(`Drawing a circle with color ${this.color} and radius ${this.radius}`);
    }

    // we can add more methods here 
}

// Create instances of Shape and Circle
const genericShape = new Shape('Red');
const myCircle = new Circle('Blue', 5);

// Output information about the objects
console.log(`${genericShape.color} is a Shape.`);
console.log(`${myCircle.color} circle with radius ${myCircle.radius}.`);

// Demonstrate polymorphism
const shapes = [genericShape, myCircle];
shapes.forEach(shape => shape.draw());



// implement the multi level inheritence 