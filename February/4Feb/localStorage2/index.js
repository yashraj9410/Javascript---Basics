// Function to save object data to local storage
function saveObjectToLocalStorage() {
    // Get input values
    let name = document.getElementById("inputName").value;
    let age = document.getElementById("inputAge").value;

    // Create an object with the input data
    // Task1
    // practice the new ES6 format to declare obj
    let userObject = { name:name, age:age };

    // Check if local storage is supported
    if (typeof(Storage) !== "undefined") {
        // Convert the object to a JSON string and save it to local storage
        localStorage.setItem("userObject", JSON.stringify(userObject));
        alert("Object data saved to local storage!");
    } else {
        alert("Sorry, your browser does not support local storage.");
    }

    // Clear input fields
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";

    // Display stored object data
    displayStoredObjectData();
}

// Function to display stored object data
function displayStoredObjectData() {
    // Get the div where data will be displayed
    let displayDiv = document.getElementById("displayData");

    // Retrieve JSON data from local storage and parse it
    let storedJSONData = localStorage.getItem("userObject"); // this will give data in string
    let storedObject = JSON.parse(storedJSONData); // convert string to default js value 

    // Task 2 -- > try to use parseInt func , above func , explore 

    // Display the parsed object data
    displayDiv.innerHTML = storedObject ?
        `<p>Stored Object Data: Name - ${storedObject.name}, Age - ${storedObject.age}</p>` :
        "<p>No object data stored.</p>";
}

// Call the display function when the page loads
displayStoredObjectData();


// when dealing with objects we should always use JSON stringify and parse when dealing with objects .

// localStorage is limited 