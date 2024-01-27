// // arrays and their working 
// let arr = [1,2,3];

// // indexing always starts from 0
// // indexing - position of the element in the array 

// // object -> for in loop , array -> for of 

// // length 
// let sum = 0 ;
// // task is to print the sum of all elements in the array

// for(let i = 0; i<arr.length;i++){
//     sum += arr[i];
// }

// let emp_arr = [];

// // push pop , push adds an elemnt in the last , pop removes an element from the last 

// emp_arr.push(1,2,3,4);
// emp_arr.push("hello")

// console.log(emp_arr)

// console.log(emp_arr.shift())
// console.log(emp_arr)

// // shift -> remove an element from front

// // unshift -> add element at front 

// emp_arr.unshift(1);
// console.log(emp_arr)

// // splice -> add or remove data from any particular index

// emp_arr.splice(1,1)
// console.log(emp_arr)

// an arrray can hold multiple dataTypes together 
let arr = [1,2, {user:"xyz"}, function greet(){console.log("Hello")}]

console.log(arr[2].user)

let newArray = [ 1,2,3,4];

// for(let ele in obj)

// for of loop
for(let ele of newArray){
    console.log(ele)
}