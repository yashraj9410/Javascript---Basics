// this is linear search algorithm 
// when we need to search for an element in the array 

let arr = [1,2,3,4,5]  

let number  = 5;

// task is to search for the number in the array 
// linear search 

// time complexity 
for(let i = 0;i<arr.length;i++){
    if(arr[i] === number){
        console.log("The number is present");
        break
    } 
}

// else if condition and if the element is my last element then 
// console.log("Number not present")

// task  --> implement linear search using recursion 
// 1.  Hints you can play with the index value each time in recursion  one way to tackle the question 
// Hint try to slice the array in such a way that whole array is being searched 

function linearSearch(arr, target) {
    // base case (two condition either found or not found )

    return linearSearch(arr.slice(1),target);
}


// binary search , sorting (various algo )

// DS --> LL , Stack Queue , .....advance 