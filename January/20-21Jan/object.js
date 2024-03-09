// more examples on object 

let myLaptop = {
    name:"MSI",
    processor:"Intel",
    cpuconfig:{
        core:6,
        clock_speed:"2.4Ghz"
    },
    runLaptop: function(){
        return ("My laptop is running")
    }
}

console.log(myLaptop.cpuconfig.core);

// we can access all the properties for any key in the object
console.log(myLaptop.cpuconfig.clock_speed.length)


// delete a property

// delete myLaptop.processor

// console.log(myLaptop)


// loop 
// for in

for(let key in myLaptop){
    console.log(key , myLaptop[key]);
}

// fetching an object throw array like structure 
// what are important usecases of objects - > fetch data from data base , or when you want to pas some data to the database
// JSON parse 

// spread operator 

let obj = {
    name:"abc"
}

let newObj = {...obj, age:35}

console.log(newObj)

// you are getting some data from databse

let num = {
    first:1,
    second:2
}

// increment every key in num by 1 


console.log(myLaptop.runLaptop())