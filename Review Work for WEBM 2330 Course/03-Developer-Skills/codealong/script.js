// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1991));
// console.log(calcAge(1990));

//https://prettier.io/docs/en/options.html

//Life Server is a dev tool that allows us to save, and then the page reloads for us automatically

//We can use Life Server in 2 different ways:
//1. install an extension in VSCode
//2. more professional workflow would be to use Node.JS and an MDM package

// PROBLEM 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do if one occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

//example code
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
//console.log(array3);//(6) ['a', 'b', 'c', 'd', 'e', 'f']

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//Debugging with the Console and Breakpoints

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // C) FIX - was previously value: prompt("Degrees Celsius:");
//     value: Number(prompt("Degrees Celsius:")), //Now returning 373 as expected
//   };

//   // B) FIND
//   console.log(measurement);
//   console.table(measurement); //Here we can see that the value: prompt is giving us a string and not a number
//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin()); //returning 100273 instead of 373

//Using a Debugger in Google Chrome
//Watch the video for more info

//NOW, let's introduce a bigger bug into the code and then fix it using the debugger
//Using a Debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   // 2) FIND (debugger) and 3) FIX

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     //debugger;//Can be used to pull this line up in the console
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

/*
    Coding Challenge #1
    Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
    
    Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
    
    Your tasks:
    1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
    string like the above to the console. Try it with both test datasets.
    2. Use the problem-solving framework: Understand the problem and break it up 
    into sub-problems!

    Test data:
    § Data 1: [17, 21, 23]
    § Data 2: [12, 5, -5, 0, 4]
    GOOD LUCK 
    */

// 1) Understanding the problem
// - The function needs to take in a value (arr)
// - The function needs to console.log a string with the values from the array

// 2) Breaking up into sub-problems
// - We need to add a parameter (arr) that we can use to pass in the array values
// - We need a For Loop to pass through the array values

const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}ºC in ${i + 1} days`); // Close, but not quite the solution
  }
};

console.log(array1, array2);
console.log(printForecast(array1));
console.log(printForecast(array2));

const printForecastTeacher = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `; // We are taking the array and adding upon it each time like this: [2, 3, 4] -> 2+3=5+4=9
  }
  console.log("... " + str);
};

printForecastTeacher(array1);
printForecastTeacher(array2);
