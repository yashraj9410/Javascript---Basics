class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log('Animal makes a sound');
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calling the constructor of the superclass
      this.breed = breed;
    }
  
    sound() {
      console.log('Dog barks');
    }
  }
  
  const myDog = new Dog('Buddy', 'Golden Retriever');
  console.log(myDog.name); // Output: Buddy
  console.log(myDog.breed); // Output: Golden Retriever
  myDog.sound(); // Output: Dog barks
  