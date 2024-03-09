// Function to save data to local storage
function saveToLocalStorage() {
    // Get input value
    let inputData = document.getElementById("inputData").value;

    // two main functions getItem --> retrieve a data ,setItem --> set the data
    // keeps data in key value pair 

    // Check if local storage is supported
    if (typeof(Storage) !== "undefined") {
        // Save data to local storage
        localStorage.setItem("storedData", inputData);
        alert("Data saved to local storage!");
    } else {
        alert("Sorry, your browser does not support local storage.");
    }

    // Clear input field
    document.getElementById("inputData").value = "";

    // Display stored data
    displayStoredData();
}

// Function to display stored data
function displayStoredData() {
    // Get the div where data will be displayed
    let displayDiv = document.getElementById("displayData");

    // Retrieve data from local storage
    let storedData = localStorage.getItem("storedData");

    // Display the data
    displayDiv.innerHTML = storedData ? `<p>Stored Data: ${storedData}</p>` : "<p>No data stored.</p>";
}

// Call the display function when the page loads
displayStoredData();

// the data is always stored as string format
// JSON.stringyfy;
// JSON.parse();
// most common questions