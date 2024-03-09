// multiplying every element of array 
// arr = [1,2,3,4]  -> Op = 24 
// 1*2*3*4

// basic approach 

let arr = [1,2,3,4]

function multiply(arr){

    // 1. Determine the base case 
    
    if(arr.length <= 1) return 1;   // further validated if array is empty just throw that empty array 

    //        4              X   returned value by multiply([1,2,3])
    return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1));
}

console.log(multiply(arr));