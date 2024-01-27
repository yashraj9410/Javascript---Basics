const coding = ["js", "ruby", "java", "python", "cpp"]

// for each is not returning function

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// 

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// for each does not return anything hence to solve this peoblem we move to map filter and reduce 
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// can we manipulate data using forEach

let numbers = [1,2,3,4]

// index and array are byDefault present in the forEach function 
numbers.forEach((element,index,array) => {
    array[index] = element*2;
});

console.log(numbers)