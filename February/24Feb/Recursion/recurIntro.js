// introduction to recursion
// recursion means function calling itself for some number of iterations until the base condition is satisfied


// Function to calculate the sum of all positive integers up to n using recursion
function sumUpTo(n) {
    // Base case: if n is 1, return 1 (sum of 1 is 1)
    // 5 , 5+4+3+2+1 , 0, -1,-2,-3,-4
    if (n <= 1) {
        return 1;
    } else {
        // Recursive case: sum up all positive integers up to n-1 and add n
        return n + sumUpTo(n - 1);
    }
}

// Example usage
console.log(sumUpTo(5)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)



let sum =0;
function add(arr) {

    console.log(arr)
    if(arr.length == 0) return 0; // base case to check array is empty 
    return arr[arr.length-1] + add(arr.slice(0, arr.length-1));
}

let arr = [1,2,3,4,5]

console.log(add(arr));


// return arr[arr.length-1] + add(arr.slice(0, arr.length-1));
// 1st itr  -> 5+add(arr(0,4))
// 2nd itr add(arr(0,4))  -> 4 + add(arr(0,3))
// after two iterations final value  = 5 + 4 + add(arr(0,3)) = 9 + add(arr(0,3))
// 3rs                                          3 + add(arr(0,2))
                                            //      2 + add(arr(0,1))
                                            //          1 + add(arr(0,0))   length becomes 0
                                            //                 0