// Syntax --
// const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

/* array: The array to iterate over.
callback: Function to execute on each element in the array, taking four arguments:
accumulator: The accumulator accumulates the callback's return values. It is the accumulated 
result of the previous iterations.
currentValue: The current element being processed in the array.
index: The index of the current element being processed in the array.
array: The array reduce was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback.
 If no initial value is provided, the first element of the array is used as the initial accumulator 
 value.
 */

// returning functions 


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// 1st iteration --> acc = 0 , curr = 1 => 0+1 = 1 --> acc = 1;
// 2nd Iteration --> acc =1 , curr =2 => 1+2  =3 --> acc = 3
// 3rd Iteration --> acc= 3 , curr = 3 + 3+3 = 6 --> acc =6
// jumps out of the loop

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// calculating the total cart price 
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// it just follows the above iteration only 

console.log(priceToPay);


// more examples 
// Given array of fruits
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

// Using reduce to count occurrences of each fruit
const fruitCount = fruits.reduce(function (accumulator, fruit) {
  // Check if the fruit is already a property in the accumulator
  if (accumulator[fruit]) {
    // If yes, increment the count for that fruit
    accumulator[fruit]++;
  } else {
    // If not, initialize the count for that fruit to 1
    accumulator[fruit] = 1;
  }
  // Return the updated accumulator for the next iteration
  return accumulator;
}, {}); // {} is the initial value for the accumulator, an empty object

// Output the final result
console.log(fruitCount);
/*
Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/

// flatten an array 
const nestedArrays = [[1, 2],
                      [3, 4],
                      [5, 6]];

const flattenedArray = nestedArrays.reduce(function (accumulator, currentArray) {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6]


// average in arrray 
// Given array of numbers
const numbers = [10, 20, 30, 40, 50];

// Using reduce to calculate the average of numbers  Note: all four parameters are already present in reduce method 
const average = numbers.reduce(function (accumulator, currentValue, index, array) {
  // Accumulate the sum of numbers
  accumulator += currentValue;

  // Check if it's the last iteration (index is the last element's index)
  if (index === array.length - 1) {
    // If it's the last iteration, calculate the average
    return accumulator / array.length;
  } else {
    // If not the last iteration, return the accumulator for the next iteration
    return accumulator;
  }
}, 0); // 0 is the initial value for the accumulator

// Output the final result
console.log(average);
// Output: 30
