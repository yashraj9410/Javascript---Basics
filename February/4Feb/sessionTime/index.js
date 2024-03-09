// Task - make all the required checks 

// Function to start the session
function startSession() {
    // Store the current timestamp in sessionStorage
    let startTime = new Date().getTime();
    sessionStorage.setItem("sessionStart", startTime);

    alert("Session started!");

    // Display session information initially
    displaySessionInfo();

    // Update session information every 1 seconds
    setInterval(displaySessionInfo, 1000); // 1 seconds in milliseconds
}

// Function to display session information
function displaySessionInfo() {
    // Get the div where session information will be displayed
    let sessionInfoDiv = document.getElementById("sessionInfo");

    // Retrieve the start time from sessionStorage
    let startTime = sessionStorage.getItem("sessionStart");

    // Check if a session has started
    // reframe this with ? 
    if (startTime) {
        // Calculate elapsed time
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - parseInt(startTime);

        // Convert milliseconds to seconds
        let elapsedSeconds = Math.floor(elapsedTime / 1000);

        // Display session information
        sessionInfoDiv.innerHTML = `<p>Session started ${elapsedSeconds} seconds ago.</p>`;
    } else {
        sessionInfoDiv.innerHTML = "<p>No session started.</p>";
    }
}
