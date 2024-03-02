// sorting is arranging the element of the array in a arranged manner (asecending , descending order)

// arr  = [2,1,3,4,7,5]   sorted array --> [1,2,3,4,5,7]

// bubble sort algo 

// intution behind bubble sort 

// 29    10    14    37   14 

// 29  swap with 10 (takes two item and compare then  (then swap if needed ))

// 10 29 14 37 14

// 29 swap with 14 

// 10 ,14 , 29 ,37 ,14

// 29 and 37 everything is ok so now point to 37 

// 37 swap with 14 

// 10,14,29,14,37

// o(n2)


// code for bubble sort 

const bubbleSort = (arr) => {
    let n = arr.length;

    for(let i = 0; i<n ;i++){
        for(j = 0;j<n-1;j++ ){
            // comparing the adjacent elemnt and swapping then
            if(arr[j] > arr[j+1]){
                // array destructuring based swapping 
                // make a temp and then swap (3 lines )
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
 console.log(bubbleSort([29,10,14,37,14]))
