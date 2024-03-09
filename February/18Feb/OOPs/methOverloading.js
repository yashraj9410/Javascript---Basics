// method Overloading 
// polymorphism

// 
class Calculator {
    // add method , only works for 2 variables 
    add(){
        // arguments are in the form of array 
        let sum = 0;
        for(let i =0; i<arguments.length;i++){
            sum += arguments[i];
        }
        return sum;
    }

}

let calc = new Calculator();
console.log(calc.add(3,7))
console.log(calc.add(2,3,4))