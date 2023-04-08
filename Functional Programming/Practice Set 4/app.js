// // // code example
// // // const array = [1, 2, 3, 4]
// // // const sumOfNumbers = (accumulator, currentValue, currentIndex) =>
// // //   accumulator + currentValue
// // // const sum = array.reduce(sumOfNumbers, 0)
// // // console.log(sum) // 10

// // const array = [1,2,3,4];
// // const sumOfNumbers= (acuumulator, currentValue, currentIndex) =>{
// //     return acuumulator + currentValue;
// // }

// // const sum = array.reduce(sumOfNumbers, 0);
// // console.log(sum)

// // const array2 = [1,2,3,4,5,6,7];

// // const sumOfOddNumers = (currentSum, valueFromArray) =>{
// //     return valueFromArray % 2 != 0 ? currentSum + valueFromArray : currentSum;
// // }

// // let currentSum = 0;
// // const reducedValue = array2.reduce(sumOfOddNumers, 0);
// // console.log(reducedValue);

// const array3 = [1,2,3,4,5];
// const multipluyNumbers = (currentMultiplyValue, numberFromArray) => currentMultiplyValue * numberFromArray;

// let currentMultiplyValue = 1;
// const mult = array3.reduce(multipluyNumbers,1);
// console.log(mult)

// // 1 Given an array, write an ES6 function that returns the total length of all the strings in an array.

// const strings = ["apple", "banana", "cherry", "date"];
// // Your code here
// const totalLength = (currentLength, valueFromArray) => currentLength + valueFromArray.length;
// let currentLength =0; 

// const totalStringLength = strings.reduce(totalLength,0);
// console.log(totalStringLength)

// const getTotalStringLength = arr => {
//     return arr.reduce((acc, str) => acc + str.length, 0);
//   }
//   const arr = ['hello', 'world', 'how', 'are', 'you'];
// const totalLength2 = getTotalStringLength(arr);
// console.log(totalLength2);

// // 2 Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

// const numbers = [1, 2, 3, 4, 5];
// // Your code here
// const sumOfSqueres = (accumulator, currentVal) => accumulator + (currentVal * currentVal);

// let accumulator = 0;
// const sumSquares = numbers.reduce(sumOfSqueres,0)

// console.log(sumSquares);
//  // Output: 55 

// //  3 Write an ES6 function that calculates and returns the total value of all items in an array of objects.

// const items = [
//     { name: "Item 1", price: 10 },
//     { name: "Item 2", price: 20 },
//     { name: "Item 3", price: 30 }
//   ];
//   // Your code here
  
//   const priceOfAll = (acc, items) => acc + items.price;
//   let acc =0;
//   const totalValue = items.reduce(priceOfAll,0);
  
//   console.log(totalValue); 
//   // Output: 60

// //   4 Write an ES6 function that takes an array of strings as input and concatenates them into a single string.
// // Your code here
// const concatStrings =(acc,stringArrEl) => acc + stringArrEl;
// stringArray = ["A", 'B', 'C', 'D', 'E'];

// const addedStrings = stringArray.reduce(concatStrings,'')


// console.log(addedStrings); // Output: 'thisisfun'

// // 5 Write an ES6 function to multiply and return all the elements of a given array.

// const numbers4 = [1, 2, 3, 4, 5];
// // Your code here
// const multiplyAllNumbers = (acc,num) => acc * num;
// const numbersArray = [1,2,3,4,5,];
// const multipliesNumbers = numbers4.reduce(multiplyAllNumbers,1)


// console.log(multipliesNumbers);
// // Output: 120

// // 6 Write an ES6 function that takes an array of strings and returns the longest string.

// const longstringsArray = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// // Your code here

// const longestString = (arr) =>{
//     return arr.reduce((longestString, currentString) => {
//       return  currentString.length > longestString.length ? currentString : longestString;
//     } , "")
// };

// console.log(longestString(longstringsArray))

// // 8 Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ];
//   // Your code here
// //   const getAverageAge = (arr) =>{
// //     const totalAge = arr.reduce((acc, arr.age) =>{
// //             return acc + arr.age;
// //     },0)
// //     const avgAge = totalAge/arr.length;
// //   }
  
// const getAverageAge = (arr) =>{
//     const totalAge = arr.reduce((acc, person) =>{
//             return acc + person.age;
//     },0)
//     const avgAge = totalAge/arr.length;
//     console.log(avgAge);
//   }
//   // Output: { averageAge: 32.5 }

//   const calculateAverageAge = people => {
//     const totalAge = people.reduce((acc, person) => acc + person.age, 0);
//     const averageAge = totalAge / people.length;
//     return { averageAge };
//   };
//   console.log(calculateAverageAge(people) )

// //   9 Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

// const products = [
//     { name: "Bread", price: 10, quantity: 2 },
//     { name: "Clips", price: 20, quantity: 5 },
//     { name: "Knife", price: 30, quantity: 1 },
//     { name: "Slipper", price: 40, quantity: 3 }
//   ];
//   // Your code here
//   const findMostExpensiveProduct = (products) =>{
//     return products.reduce((hightestPrice, product)=>{
//        return  product.price > hightestPrice ? product.price : hightestPrice;
//     },0)
//   }
  
//   console.log(findMostExpensiveProduct(products))
  
//   console.log(findMostExpensiveProduct(products)); 
//   // { name: "Slipper", price: 40, quantity: 3 }

// //   10 Write an ES6 function that takes an array of strings and returns an object with the count of each string.
// const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// // Your code here



// // console.log(countStrings(fruits));
// // Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

// const countStrings = strings => {
//     return strings.reduce((acc, string) => {
//       acc[string] = (acc[string] || 0) + 1;
//       return acc;
//     }, {});
//   }

//   console.log(countStrings(fruits))

const svg = document.getElementById("my-svg");

  svg.addEventListener("mouseenter", () => {
    svg.style.boxShadow = "inset 0 0 40px rgba(255, 0, 0, 0.5)";
  });

  svg.addEventListener("mouseleave", () => {
    svg.style.boxShadow = "none";
  });