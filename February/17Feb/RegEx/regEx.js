// Define regular expressions
const regexLowerCase = /[a-z]/;   // contains a lower case letter 
const regexUpperCase = /[A-Z]/;   // contains a upper case letter 
const regexDigit = /\d/;          // contains a digit 
const regexSpecialChar = /[@$!%*?&]/;  // contains a special characters 

// Function to validate password
function validatePassword(password) {
    // chaining the tests 
    const isValidPassword = regexLowerCase.test(password) &&
                            regexUpperCase.test(password) &&
                            regexDigit.test(password) &&
                            regexSpecialChar.test(password) &&
                            password.length >= 8;
    return isValidPassword;
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
