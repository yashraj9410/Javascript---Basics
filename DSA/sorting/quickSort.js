// Define a function called quickSort which takes an array arr as input
function quickSort(arr) {
    // Check if the length of the array is less than 2
    if (arr.length < 2) 
      // If it is, return the array because it's already sorted
      return arr
  
    // Choose the last element of the array as the pivot
    let pivot = arr[arr.length - 1]
    // Initialize two arrays to store elements less than pivot (left) and greater than pivot (right)
    let left = []
    let right = []
  
    // Iterate through the array except for the pivot element , to check all the elements 
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current element is less than the pivot, push it to the left array
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        // Otherwise, push it to the right array
        right.push(arr[i])
      }
    }
  
    // Recursively call quickSort on the left and right arrays,
    // then concatenate them with the pivot element in between
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  
  // Define an array called arr
  const arr = [8, 20, -2, 4, -6]
  // Call quickSort function with arr as input and print the result
  console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]
  
  
  // time 
  // 0(logn) X O(n) --> o(nlogn)