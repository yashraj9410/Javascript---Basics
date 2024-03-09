// functions 
// function just wraps down bunch of executable statements 

// functions reduce lines of code hence optimize the performance 

// we can call the functions multiple times 
// DRY - Do not repeat yourself
// benifit is to break down our code segments 

// define a function 

// we are having a function with name greet
function greet(newUser) {
    return `${newUser} Hello`
}

// call the function
let user  = "ganesh";
let str = greet(user);
console.log(str)
// void -> the functions is not returning anything 

console.log(`hello how are you ${user}`)


console.log(typeof greet)

// internally jabvascript takes all data types as objects apart from primitive.