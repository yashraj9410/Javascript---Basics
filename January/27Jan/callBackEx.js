// Example 1: Simple Callback Function

// Function that takes a callback function as an argument
function greet(name, callback) {
    // Invoke the callback function and pass the name to it
    callback(name);
  }
  
  // Callback function definition
  function sayHello(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Using the greet function with the sayHello callback
  greet("John", sayHello); 
  // Output: Hello, John!

  

  /*
    Explanation:

greet function: It takes two parameters - name and callback. The callback parameter is expected to be a function.

sayHello function: It's a separate function that will be used as a callback. It takes a name parameter and logs a greeting to the console.

Using the callback function: When we call greet("John", sayHello);, we are passing the sayHello function as a callback to greet. The greet function then invokes the callback with the provided name ("John").

Output: The output of the program is "Hello, John!" because the sayHello function is used as a callback, and it prints a greeting to the console.
  */


// more example ---> 

// we mainly use callbacks when we are dealing with apis 

// Example 2: Callback Function with Array Method using map 

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Callback function for mapping (doubling) each element in the array
function double(value) {
  return value * 2;
}

// Using the map method with the double callback
const doubledNumbers = numbers.map(double); // map is a functionality of array 

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]



// advanced example
// Example 3: Callback Function with setTimeout

// Callback function for displaying a message after a delay
// this function is later to be used as callback
function showMessage(message) {
    console.log("Message: " + message);
  }

// fetch(url)
  
  // Function that simulates an asynchronous operation using setTimeout
  // this function is using the callback (showMessage)
  function simulateAsyncOperation(callback) {
    // Simulating a delay of 2 seconds
    setTimeout(function () {
      // Invoke the callback function after the delay
      callback("Operation completed!");
    }, 2000);
  }
  
  // Using the simulateAsyncOperation function with the showMessage callback
  simulateAsyncOperation(showMessage);
  // Output (after 2 seconds): Message: Operation completed!
  