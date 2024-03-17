// given array [1,2,3,4,,5,6,7]  , given a target = 9

// find two numbers in the array such that the sum of those two numbers == target 

// first approach 

 

// for(let i = 0;i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[i] + arr[j] === 9){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }

// O(n2)

// we can solve this in O(n)
// we will use hash map to solve this problem in )(n)

//  a + b == target , a = target - b;\
// 2 + 7 = 9 ,  9-7 = 2

// hasOwnProperty 

// second approach 

function twoSum(arr,target) {
    const numMap = {};
    // iterate over the array 
    for(let i =0;i<arr.length;i++){
        const complement = target - arr[i]; // calculating the compliment 
        if(numMap.hasOwnProperty(complement)){
            // if complement is already present 
            return [complement , arr[i]];
        }
        // store the current num in map
        numMap[arr[i]] = true;
    }
    return [];
}
let arr = [1,2,3,4,5,6,7];
console.log(twoSum(arr,9))