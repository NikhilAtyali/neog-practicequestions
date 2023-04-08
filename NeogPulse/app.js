// const click = () =>{
//     console.log("clicked");
// }

// click()

// QUESTION 2:

// Write a function that takes a number as input and determines if it is a multiple of 3.
// Return the statement as written in the output.

// Output looks like this:
// console.log(isMultipleOfThree(5)) // 5 is not a multiple of 3
// console.log(isMultipleOfThree(9)) // 9 is a multiple of 3


const isMultipleOfThree = (num) =>num % 3 === 0 ? `${num} is  a multiple of 3` : `${num} is not a multiple of 3`


console.log(isMultipleOfThree(3))
console.log(isMultipleOfThree(5))
console.log(isMultipleOfThree(9))

// Create a function changeSize that takes an object product and a string newSize as parameters, and changes the size property of the product object to the newSize. Log the product object to the console before and after calling the function.


// const product = { name: 'T-Shirt', size: 'M', price: 500, color: 'Blue' }
// // Your ES6 code here


// const changeSize = (product, newSize) =>  ({...product, size : newSize})

// console.log(product) 
// console.log(changeSize(product, 'L'))
// console.log(product)

// function changeSize(product, newSize) {
//     console.log('Product before change:', product)
//     product.size = newSize
//     console.log('Product after change:', product)
//   }

//   console.log(changeSize(product, 'L'))

const product = { name: 'T-Shirt', size: 'M', price: 500, color: 'Blue' }

function changeSize(product, newSize) {
  console.log('Product before change:', product)
  product.size = newSize
  console.log('Product after change:', product)
}

changeSize(product, 'L')
