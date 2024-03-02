// binary search algorithm
// problem : check if a given target is present in the array or not 
// to reduce our time complexity

let arr = [1, 2, 3, 4, 5, 6, 7]
let target = 3;

let start = 0;       // start index of the array 
let end = arr.length - 1;  // end index of the array

while (start <= end) {

    // calculate the mid value 
    let mid = start + (end - start) / 2;  // to avoif the integer overflow problem 

    if (arr[mid] == target) {
        console.log("Element is present at index:", mid);
        break;
    } else if (arr[mid] > target) {    // if my mid ele is greater than 1 than all the element after the mid ele will be greater than the target because it is a sorted array
        end = mid-1;
    } else if(arr[mid] < target){
        // if my mid ele is smaller than target than all the element before the mid ele will be smaller than the target because it is a sorted array
        start  = mid+1;
    }
}

