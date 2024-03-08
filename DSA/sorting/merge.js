// program for merge sort 
// Define a function called mergesort which takes an array arr as input
function mergesort(arr) {
    // Check if the length of the array is less than 2
    if (arr.length < 2) {
      // If it is, return the array because it's already sorted
      return arr
    }
    // Calculate the midpoint of the array
    const mid = Math.floor(arr.length / 2)
    // Split the array into two halves, left and right, based on the midpoint
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    // Recursively call mergesort on both halves of the array
    // Merge the sorted halves together
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
  
  // Define a function called merge which takes two sorted arrays, leftArr and rightArr, as input
  function merge(leftArr, rightArr) {
    // Initialize an empty array to store the sorted elements
    const sortedArr = []
    // Loop until either leftArr or rightArr is empty
    while (leftArr.length && rightArr.length) {
      // Compare the first elements of leftArr and rightArr
      if (leftArr[0] <= rightArr[0]) {
        // If the first element of leftArr is less than or equal to the first element of rightArr,
        // remove the first element of leftArr and push it to sortedArr
        sortedArr.push(leftArr.shift())
      } else {
        // Otherwise, remove the first element of rightArr and push it to sortedArr
        sortedArr.push(rightArr.shift())
      }
    }
    // Concatenate sortedArr with any remaining elements in leftArr and rightArr
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    // Return the merged and sorted array
    return resultArr
  }
  
  // Define an array called arr
  const arr = [8, 20, -2, 4, -6]
  // Call mergesort function with arr as input and print the result
  console.log(mergesort(arr)) // [-6, -2, 4, 8, 20]
  
  
  // O(nlogn)
  
  // do 3 questions on binary search 
  // implement the printAll element function of the stack 
  //  try to implement the merge sort 
  
  
  // queue 
  // linked list 
  // after that non linear data structure that is tree , graphs 
  // we will do some questions on that 