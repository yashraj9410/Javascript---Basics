// use of callback

// calback functions are like a parametre(variable)

let arr = [1,2,3,4,-2,5,8];

let func = (arr) => {
    return arr<0;
};

// find method array 
let res = arr.find(func)

console.log(res)

// findIndex
let index = arr.findIndex(func);

console.log(index)


// forEach

arr.forEach( (num) =>{
    console.log(num+1)
})

// practice 