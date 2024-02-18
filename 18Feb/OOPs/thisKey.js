class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person1 = new Person('Alice');
  person1.greet(); // Output: Hello, my name is Alice
  
  const person2 = new Person('Bob');
  person2.greet(); // Output: Hello, my name is Bob
  