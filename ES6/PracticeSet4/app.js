// 1 Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

// Your ES6 code here

const getMaxElement = (arr) =>{
    let maxEl= 0;
    for (i=0; i<arr.length; i++){
        if(arr[i] > maxEl){
            maxEl = arr[i];
        }
    }
    return maxEl;
}

let array = [4,78,8,90,99,0,12,34]
console.log(getMaxElement(array)) // 78

// 2 Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.
// Your ES6 code here

const calculateAverage =(arr)=>{
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    const average = sum/arr.length;
    return average;
}

console.log(calculateAverage([1, 2, 3, 9, 5])); // 3

// 3 write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.
// Your ES6 code here
const convertEvenToOdd = (arr) =>{
    let evenNum = 0;
    for (i=0; i<arr.length; i++){
        if(arr[i]%2 ===0){
            arr[i] = arr[i] + 1;
        }
    }
    return arr;
}


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

// 4 write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.
// Your ES6 code here

const filterWords =(arr)=>{
    const filteredArray = [];
    for (i=0; i<arr.length; i++){
        if (arr[i].length >5){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]

// 5 Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.
// Your ES6 code here

const capitalizeWords = (arr) =>{
    const capitalArray = [];
    for(i=0; i<arr.length; i++){
        capitalArray[i] = arr[i].toUpperCase();
    }
    return capitalArray;
}
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]


// 6 Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.
    // Your ES6 code here
const getValues =(arr, property)=>{
    const newArr = [];
    for(i=0; i<arr.length; i++){
        if(arr[i].key === property){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}



console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]

//   7 Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.
// Your ES6 code here

const podAndTeamAllocation = (obj) =>{
    const newUserData = {
        firstName: obj.firstName,
        lastName: obj.lastName,
        teamId: 667543
    }
    return newUserData
}


const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

// 8 Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

// Your ES6 code here

const checkForTeam = (obj) =>{
    if ('team' in obj){
        return obj;
    } else {
        obj.team= 'A';
        return obj;
    }
}


console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: A}

// 9 Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: 'O\'Reilly Media', location: 'CA'}
};

// const {title, author1{authors[0].name},  publisher} = book
// Your ES6 code here




// console.log(title); // JavaScript: The Definitive Guide
// console.log(author1); // David Flanagan 
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisher); // O'Reilly Media

// 10 Write an ES6 function that takes an array of objects and returns the sum of all ages.

// Your ES6 code here


const sumOfAges =(arr)=>{
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum = sum + arr[i].age
    }
    return sum;
}

var ageArray = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
];

console.log(sumOfAges(ageArray)); // 121