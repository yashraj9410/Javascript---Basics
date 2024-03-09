// Introuction to data object manipulation

/* DOM stands for Document Object Model, and it is a programming interface for
 web documents. In the context of JavaScript, the DOM represents the structure 
 of a web page as a tree-like structure of objects. Each element on a web page, 
 such as paragraphs, headings, images, etc., is represented as a node in this tree.

Here are some key points about the DOM in JavaScript:

Document Object Model (DOM): The DOM is a representation of a structured document
 (like an HTML or XML document) as a tree of objects. It provides a way for programs 
 (like JavaScript) to manipulate the structure, style, and content of web documents.

Tree Structure: The DOM represents the document as a tree structure, with the "document" object at the
 top, representing the entire HTML document. Each HTML element, attribute, and text content is
  represented as a node in the tree.

Nodes: Nodes are the fundamental building blocks of the DOM tree. There are different types of nodes,
 such as elements, text, attributes, etc. Elements are nodes representing HTML tags, and they can have
  child nodes (other elements, text nodes, etc.).

Accessing Elements: JavaScript allows you to access and manipulate elements in the DOM.
 You can select elements using methods like getElementById, getElementsByClassName, getElementsByTagName,
  querySelector, and querySelectorAll.

Example:

// Get an element by its ID
var myElement = document.getElementById('myId');
// doc.getElementById('id_of_element')
// doc.getElementByClassName
// access by the tag name

Manipulating Elements: You can change the content, attributes, or style of elements using JavaScript.
 For example, you can change the text content of an element, modify its attributes, or change its CSS
  styles.

Example:

// Change text content
myElement.textContent = 'New content';

// Modify attributes
myElement.setAttribute('class', 'newClass');

Events: The DOM allows you to handle events, such as user interactions (clicks, keypresses, etc.).
 You can attach event listeners to elements to execute JavaScript code in response to these events.


Example:

// Add a click event listener
myElement.addEventListener('click', function() {
    alert('Element clicked!');
});

Understanding the DOM and how to manipulate it with JavaScript is crucial for building dynamic
 and interactive web pages. It forms the foundation for many web development tasks and is an 
 essential skill for web developers.
  */




 // use of script tag in html 

 /*
  The `<script>` tag in HTML is used to embed or reference JavaScript code within an HTML document.
   It can be placed in the `<head>` or `<body>` of the HTML document, and it allows developers to
    include client-side scripts that enhance the interactivity and functionality of the webpage.

Here are some aspects of using the `<script>` tag:

1. **Inline JavaScript:**
   ```html
   <script>
       // JavaScript code goes here
       alert('Hello, World!');
   </script>
   ```

   In this example, JavaScript code is written directly between the opening `<script>` and closing
    `</script>` tags. This is called inline JavaScript. While this is simple and works, it's often 
    better to separate your JavaScript code into external files for better organization and 
    maintainability.

2. **External JavaScript File:**
   ```html
   <script src="myscript.js"></script>
   ```

   You can also link an external JavaScript file using the `src` attribute. This allows you to keep 
   your JavaScript code in a separate file, promoting a cleaner separation of concerns.

3. **Placement of `<script>` Tag:**

   - Placing `<script>` in the `<head>`: This blocks the rendering of the HTML content until the script
    is fully loaded and executed. It's not always recommended because it can lead to slower page loading
     times, especially for larger scripts.

   ```html
   <head>
       <script src="myscript.js"></script>
   </head>
   ```
  
   - Placing `<script>` at the end of `<body>`: This allows the HTML content to load first, improving 
   initial page load times. It's often recommended for performance reasons.
   ```html

   <body>
       <!-- HTML content goes here -->
       <script src="myscript.js"></script>
   </body>

   ```

4. **`defer` Attribute:**
   The `defer` attribute is used to delay the execution of the script until after the HTML has been 
   fully parsed. It's particularly useful when the script relies on elements that may not have been 
   parsed yet.

   ```html
   <script defer src="myscript.js"></script>
   ```

   When the `defer` attribute is present, the script will be executed in order with other deferred 
   scripts, right before the `DOMContentLoaded` event is fired.

In summary, the `<script>` tag is essential for including JavaScript in HTML documents.
 You can use it to write inline scripts or reference external JavaScript files. The placement of the
  `<script>` tag affects page loading performance, and the `defer` attribute can be used to control 
  when the script is executed. It's good practice to keep JavaScript code organized and separated from 
  HTML for better maintainability.
*/