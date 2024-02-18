// Function to set a cookie
function setCookie() {
    // Get the value entered in the input field
    var username = document.getElementById("username").value;
    // Set cookie with name "username" and value as the entered username
    document.cookie = "username=" + username + ";expires=Thu, 18 Dec 2025 12:00:00 UTC;path=/";
    // Display an alert to confirm that the cookie is set
    alert("Cookie set successfully!");
}

// Function to get a cookie
function getCookie() {
    // Split the cookie string into an array of individual cookies
    var cookies = document.cookie.split(";");
    // Initialize a variable to store the username
    var username = null;
    // Loop through each cookie
    for (var i = 0; i < cookies.length; i++) {
        // Trim any leading or trailing whitespace
        var cookie = cookies[i].trim();
        // Check if the current cookie starts with "username="
        if (cookie.startsWith("username=")) {
            // Extract the value after "username="
            username = cookie.substring("username=".length, cookie.length);
            // "username=Yash"
            // Exit the loop once the username is found
            break;
        }
    }
    // If a username is found, display a welcome message
    if (username) {
        alert("Welcome back, " + username + "!");
    } else {
        // If no username is found, display a message indicating the cookie was not found
        alert("Cookie not found!");
    }
}

// Function to delete a cookie
function deleteCookie() {
    // Set the expiry date of the cookie to the past, effectively deleting it
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    // Display an alert to confirm that the cookie is deleted
    alert("Cookie deleted successfully!");
}



// cookies are some required info for the website 
// cookies are seprated by ;