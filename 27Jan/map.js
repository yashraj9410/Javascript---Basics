// Syntax :
// const newArray = array.map(callback(currentValue, index, array));

// array: The array to iterate over.
// callback: Function that produces an element of the new Array.
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map was called upon.


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


// more advanced example on map

// example --2 
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 22 },
  ];
  
  const names = people.map(function (person) {
    return person.name;
  });
  
  console.log(names);
  // Output: ['John', 'Jane', 'Bob']
  

// example --3 
  const products = [

    { name: 'Laptop', price: 1000 },

    { name: 'Phone', price: 500 },

    { name: 'Tablet', price: 300 },

  ];
  
  const discountedPrices = products.map(product => {
    return {
      name: product.name,
      discountedPrice: product.price * 0.9, // 10% discount
    };
  });
  
  console.log(discountedPrices);
  /*
  Output:
  [
    { name: 'Laptop', discountedPrice: 900 },
    { name: 'Phone', discountedPrice: 450 },
    { name: 'Tablet', discountedPrice: 270 }
  ]
  */
  

  // difference between map and forEach 