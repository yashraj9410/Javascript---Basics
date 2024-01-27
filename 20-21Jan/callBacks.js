// callback

// a variable can bve assigned to another 
// a variable can be passed as an argument , parmameter to a function

const calculate = (a,b,operation) => {
    return operation(a,b);
} 

// method 1 
const res1 = calculate(3,2, function(num1,num2){
                return num1+num2;
            });

// method2
let sub = (a,b) => a-b;

const res2 = calculate(3,2,sub)

console.log(res2);

// const calculate = (a,b,operation) => {
//     return operation(a,b);
// } 

// method 3
function multiply(a,b){
    return a*b;
}

// here we are only passing the function we are not calling it 
let res3 = calculate(2,3,multiply);

console.log(res3);

// uses of callback

