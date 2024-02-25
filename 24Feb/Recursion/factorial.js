// find the factorial of n using recursion 
//n = 5 
// factorial(5)  = 5X4X3X2X1 == 120

// factorial(0) = 1
// factorial(1) = 1;


// factorial is ver similar to multiplying each number of array 
// 5 --> 1  5,4,3,2,1
// let n =5;
// let fact  =1;
// for(let i = 1 ;i<=n;i++){
//     fact *= i;
// }

// console.log(fact)

// fact(0) == 1;

function factorial(n){
    // check if number is less than 0 (return enter a positive number )

    // base case 
    if(n === 0) return 1;

        // 5 * factorial(4)
                // 4 * factorial(3)
                        // 3 * factorial(2)
                                // 2 * factorial(1)
                                        // 1 * factorial(0)
                                                   // 1 
    return n * factorial(n-1); 

}

console.log(factorial(5));