let arr = [1,2,3,4,5]
let count =0 ;

for(let i =0;i<arr.length;i++){  
    for(let j =0;j<arr.length;j++){
        count++;  
      console.log(arr[j]);
    }
}

// n2 
// the i loop is making 5 iterations   and for each iteration of i the j loop is runnig 5 times 
// total ==> 5 *5  +5 
console.log(count);


// 