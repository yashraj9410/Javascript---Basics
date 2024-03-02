// selection sort algo 
// it is based on selecting the element from the array 
// select the smallest and place it in the front 

// arr = 29 , 10 , 14 , 37 , 14 

// slect the smallest in the first iteration and place it in the front 
// 10  29 14 37 14 

// code 

const selectionSort = (arr) => {
    let n = arr.length;
    for(let i =0 ; i<n-1;i++){
        let minIndex = i;
        for(let j = i+1; j<n;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort([29,10,14,37,14]))


// O(n2)