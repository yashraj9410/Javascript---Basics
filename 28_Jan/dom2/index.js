// myscript.js

// This event listener ensures that the JavaScript code runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function () {

    // imp for interview percepective
    // Example using textContent
    var textContentExample = document.getElementById('textContentExample');
    // Update the text content of the element with the ID "textContentExample"
    textContentExample.textContent = '<strong>Updated using innerHTML</strong>';

    // Example using innerHTML
    var innerHTMLExample = document.getElementById('innerHTMLExample');
    // Update the content of the element with the ID "innerHTMLExample" using HTML markup
    innerHTMLExample.innerHTML = '<strong>Updated using innerHTML</strong>';

    // Example using appendChild
    var appendChildExample = document.getElementById('appendChildExample');
    
    // Create a new paragraph element
    var newParagraph = document.createElement('p');
    // Set the text content of the new paragraph
    newParagraph.textContent = 'New paragraph added using appendChild';

    // Append the new paragraph to the existing div
    appendChildExample.appendChild(newParagraph);
});
