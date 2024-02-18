// Add an event listener to the form's submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Get the values of username and email input fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Get the elements to display error messages
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");

    // Assume the form is valid by default
    var valid = true;

    // Validate username
    if (username === "") {
        // If username is empty, display an error message
        usernameError.textContent = "Username is required";
        // Mark the form as invalid
        valid = false;
    } else {
        // If username is not empty, clear the error message
        usernameError.textContent = "";
    }

    // Validate email
    if (email === "") {
        // If email is empty, display an error message
        emailError.textContent = "Email is required";
        // Mark the form as invalid
        valid = false;
    } else if (!isValidEmail(email)) {
        // If email is not empty but invalid, display an error message
        emailError.textContent = "Invalid email format";
        // Mark the form as invalid
        valid = false;
    } else {
        // If email is valid, clear the error message
        emailError.textContent = "";
    }

    // If the form is not valid
    if (!valid) {
        // Prevent the form from submitting
        event.preventDefault();
    }
});

// Function to validate email format
function isValidEmail(email) {
    // Regular expression to check if email has a valid format
    var regex = /\S+@\S+\.\S+/;
    // Return true if the email matches the regular expression, otherwise false
    return regex.test(email);
}


// this is the process to validate the inputs given by User 
// for every other inputs you can define your own regEx and match the values given by the user 
// isValidPassword(password){}