// Define regular expression for password validation
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Function to validate password
function validatePassword(password) {
    return regexPassword.test(password);
}

// Test passwords
const passwords = ["MyP@ssword", "myp@ssWORD123", "StrongPa$$w0rd"];

passwords.forEach(password => {
    if (validatePassword(password)) {
        console.log(`"${password}" is a valid password.`);
    } else {
        console.log(`"${password}" is an invalid password.`);
    }
});
