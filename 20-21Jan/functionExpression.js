// function expression 
// let a = 5+4 is an expression 

// in js we can make functions as expressions .

// flexibility 

let add = function(num1,num2 ,num3=12){  // local scoped parameters 
                return num1+num2+num3;
            }

let a =10 , b= 10;  // global 
console.log(add(a,b));  // arguments 

// html bgColor function to change bgColor , changeBg(defalut){

let strConcat = function(str1, str2){
    return str1 + str2
}

console.log(strConcat("Hello", "Welcome"))