// Basic examples of time complexity 

// Example of O(1) contant time complexity
function constantTimeExample(arr) {
    // Accessing the first element of the array
    return arr[0];
}

// No matter how large the array is, this operation takes constant time.


// Example of O(n) time complexity
function linearTimeExample(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {  //O(n)
        sum += arr[i];
    }
    return sum;
}

// As the size of the array increases, the time taken to compute the sum increases linearly.


// Example of O(n^2) time complexity
function quadraticTimeExample(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {    // n     ==> nXn = n2  // while loop  // O
        for (let j = 0; j < n; j++) { // n 
            result += i * j;
        }
    }
    return result;
}

// arr  = [1,2,3,4,5,6]   n == arr.length

// As the size of n increases, the time taken increases quadratically.



// Example of O(n^3) time complexity
function cubicTimeExample(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result += i * j * k;
            }
        }
    }
    return result;
}

// As the size of n increases, the time taken increases cubically.

// there are different complexities also like O(logn) , o(n!) , O(2^n)
