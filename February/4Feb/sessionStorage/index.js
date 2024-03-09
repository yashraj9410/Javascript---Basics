// Function to save data to session storage
function saveToSessionStorage() {
    // Get input value
    let inputData = document.getElementById("inputData").value;

    // Check if session storage is supported
    if (typeof(Storage) !== "undefined") {
        // Save data to session storage
        sessionStorage.setItem("storedData", inputData);
        alert("Data saved to session storage!");
    } else {
        alert("Sorry, your browser does not support session storage.");
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

    // Retrieve data from session storage
    let storedData = sessionStorage.getItem("storedData");

    // Display the data
    displayDiv.innerHTML = storedData ? `<p>Stored Data: ${storedData}</p>` : "<p>No data stored.</p>";
}

// Call the display function when the page loads
displayStoredData();


// quest -> difference bw session and localStorage 