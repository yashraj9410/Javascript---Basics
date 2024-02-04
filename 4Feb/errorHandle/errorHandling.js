// to avoid internal exceptions for the user 

// Function that may throw an error
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Example usage with error handling
try {
    // Try to divide 10 by 2
    let result1 = divideNumbers(10, 2);
    console.log("Result 1:", result1);

    // Try to divide 8 by 0 (will throw an error)
    let result2 = divideNumbers(8, 0);
    console.log("Result 2:", result2); // This line won't be reached

} catch (error) {
    // Catch and handle the error
    console.error("Error:", error.message);
}

console.log("End of script");
