// Define regular expressions
const regexLowerCase = /[a-z]/;
const regexUpperCase = /[A-Z]/;
const regexDigit = /\d/;
const regexSpecialChar = /[@$!%*?&]/;

// Function to validate password
function validatePassword(password) {
    const isValidPassword = regexLowerCase.test(password) &&
                            regexUpperCase.test(password) &&
                            regexDigit.test(password) &&
                            regexSpecialChar.test(password) &&
                            password.length >= 8;
    return isValidPassword;
}

// Test passwords
const passwords = ["MyP@ssw0rd", "myp@ssWORD123", "StrongPa$$w0rd"];

passwords.forEach(password => {
    if (validatePassword(password)) {
        console.log(`"${password}" is a valid password.`);
    } else {
        console.log(`"${password}" is an invalid password.`);
    }
});
