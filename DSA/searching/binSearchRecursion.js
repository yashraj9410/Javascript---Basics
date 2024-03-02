// binary search using recursion

// first we need to decide the base case 
// the base case is the exit case for the loop in the iterative approach 
// start < = end  || start > end   --> base condition



function binarySearch(arr,target,start = 0 ,end = arr.length-1){

    // mention the base condition
    if(start>end){  // quivalent to start<=end 
        return false;
    }

    let  mid  = start + (end-start)/2;

    // 3 cases -->  mid == target , mid>target , mid<target

    if(arr[mid] === target){
        return true;
    } else if(arr[mid]>target){
        return binarySearch(arr,target,start,mid-1);
    } else {                        // it eill take the condition by default because every other condition is defined 
        return binarySearch(arr,target,mid+1,end);
    }
}

let arr  = [1,2,3,4,5,6,7]
const target = 9

if(binarySearch(arr, target)){
    console.log("Element is present");
} else {
    console.log("element not present");
}


// task is to generate the recursion tree for the above program 