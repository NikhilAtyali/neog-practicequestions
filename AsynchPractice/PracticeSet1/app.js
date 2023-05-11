// Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here
const delayedGreeting =()=> "Namaste React Developer";

setTimeout(()=>{
   console.log(delayedGreeting()) 
},2000)
delayedGreeting();
// Hello, welcome to my portfolio!

// Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console

const delayedAddition = (a,b) => {
    setTimeout(()=>{
        console.log(a+b);
    },4000)
};

delayedAddition(2,6);

// Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console

const delayAlert =(str, timer)=>{
    setTimeout(()=>{
        console.log(str)
    },timer)
}

delayAlert("Hello World", 3000)

// Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout

const delayedLoop=(num)=>{
    for(let i=0; i<num; i++){
        setTimeout(()=>{
            console.log("Hello");
        },i*2000)
    }
}

delayedLoop(3);