// In JavaScript, the window object is a global object that represents the browser window or,
//  in the context of other environments like Node.js, the global environment in which the JavaScript 
// code is running. It serves as the top-level object that provides access to various properties and 
// methods related to the browser or the runtime environment.

// BOM --> Browser object manipulation

// some examples of window object

console.log(window.location.href); // Current URL
console.log(window.innerWidth);    // Inner width of the browser window

/*window also includes several methods. For example, window.alert(), window.confirm(),
 and window.prompt() are methods used to interact with the user through dialog boxes. */

window.alert("Hello, World!"); // Display an alert dialog

window.setTimeout(function() {
    console.log("Delayed message");
}, 1000);


window.open("https://www.google.com", "_blank");
// Opens google.com in a new tab/window
// we can also use window.close()

// some other examples 

let userInput = window.prompt("Enter something:", "Default value");
let userConfirmed = window.confirm("Are you sure?");