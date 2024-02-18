// Example of abstraction in JavaScript for shapes

// abstraction --> just declaring the properties and then implementing those in other classes 
// javascript does not have multiple inheritence 

// Abstract class representing a Shape
class Shape {
    // Constructor initializes the color property
    constructor(color) {
        this.color = color;
    }

    // ABSTRACT abstract class Shape 
    // Abstract method for calculating area (to be implemented by subclasses)
    // js does not have any built in keyword like abstract hence you need to explicitly define the keyword by throwing an exception
    calculateArea() {
        throw new Error('Abstract method - must be implemented in derived classes');
    }

    // Concrete method for displaying the color
    displayColor() {
        console.log(`This shape is ${this.color}.`);
    }
}

// Concrete subclass representing a Circle
class Circle extends Shape {
    // Constructor initializes the radius property
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // Implementing the abstract method for calculating the area of a circle
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Concrete subclass representing a Rectangle
class Rectangle extends Shape {
    // Constructor initializes the width and height properties
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Implementing the abstract method for calculating the area of a rectangle
    calculateArea() {
        return this.width * this.height;
    }
}

// Create instances of Circle and Rectangle
const myCircle = new Circle('Blue', 5);
const myRectangle = new Rectangle('Red', 4, 6);

// Call methods on the instances
myCircle.displayColor();
console.log(`Area of the circle: ${myCircle.calculateArea().toFixed(2)}`);

myRectangle.displayColor();
console.log(`Area of the rectangle: ${myRectangle.calculateArea()}`);
