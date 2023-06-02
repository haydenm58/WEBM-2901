/*let js = 'amazing';
console.log(40 + 8 + 23 - 10); //This will show up in the console with this function. And it will indicate where the result is from with "script.js:5" for line 5

console.log ('Jonas');
console.log (23);

let firstName = "Jonas"; //You can't have a variable name *start* with a number. Variables can only have numbers, letters, underscores, and dollar signs.

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Errors also occur when you try to use reserved keywords like "new" and "function"

//"name" is a reserved keyword but still allowed, but you should avoid using it. 
//Don't start your variables with a capital letter. Those variables are reserved for Object Oriented programming in JavaScript

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher'; //These two are worse variable names than the ones above, because they are less descriptive

console.log(myFirstJob);
*/

    //LECTURE: Values and Variables
    //1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
    //2. Log their values to the console
/*
    let country = ("United States");
    //let continent = ("North America");
    let population = 330000000;

    console.log (country);
    //console.log (continent);
    console.log (population);
*/

/*
Multi
Line
Comment
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);//typeof lets us know what the type of value we are working with
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';//Do not use 'let' when redefining a variable. We changed the content of the "Box"
console.log(javascriptIsFun);

let year;//you can declare a variable without defining that variable
console.log(year);//value of the variable is undefined
console.log(typeof year);//type of the variable is undefined

year = 1991;//now that the variable year has a value, you will see the value and data type
console.log(year);
console.log(typeof year);

console.log(typeof null);//this is a bug in the JavaScript code. null returns "object" but it is not an object, it is null
*/

    //LECTURE: Data Types
    //1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
    //2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console
/*
    let isIsland = false;
    let language;

    console.log(typeof isIsland);
    console.log(typeof population);
    console.log(typeof country);
    console.log(typeof language);
*/

//let age = 30;
//age = 31;

//const variables can never be changed

//const birthYear = 1991;
//birthYear = 1990; This pulls an error because you cant reassign birthYear because it is a const variable

//const job; you also can't declare *empty* const variables

//Always use const by default, and only use let if you are really sure that a variable will be changed at some point in the future

//Its always good practice to set things up with const because it helps you to avoid unneeded variable mutations. This helps to avoid bugs.

// var should be completely avoided, but should be understood for legacy reasons

//var job = 'programmer';
//job = 'teacher';

//technically declaring variables is *not* mandatory, but it is *bad* practice


    //LECTURE: let, const and var
    //1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
    //2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
    //3. Try to change one of the changed variables now, and observe what happens
/*
    language = 'English';
    const continent = 'North America';
    console.log(continent);
    //continent = 'Europe';//pulls an error
*/

//Operators
/*
//Math Operators
const now = 2037; //We are using the now variable so we don't have to change it in multiple places later on
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schuman';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 ... 25
x *= 4; // x = x * 4 ... 100
x++; // x = x + 1 ... 101
x--; // x = x - 1 ... 100
x--; // x = x - 1 ... 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); //returns "true" because jonas is 42 and sarah is 19
// >, <, >=, <=
console.log(ageSarah >= 18);//true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
    //LECTURE: Basic Operators
    //1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
    //2. Increase the population of your country by 1 and log the result to the console
    //3. Finland has a population of 6 million. Does your country have more people than Finland?
    //4. The average population of a country is 33 million people. Does your country have less people than the average country?
    //5. Based on the variables you created, create a new variable 'description'which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese
/*
    console.log(population / 2);
    population++;
    console.log(population);
    console.log(population > 6000000);
    console.log(population < 33000000);
    const description = ('Portugal is in Europe, and its 11 million people speak portuguese');
    console.log(description);
*/

// Operator Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
console.log(ageJonas);//46
const ageSarah = now - 2018;
console.log(ageSarah);//19
console.log(now - 1991 > now - 2018);// result = true (boolean) because 46 > 19

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
//This site gives you a clue into what the order of precedence is. Higher number = higher priority

console.log(25 - 10 - 5); //10... - has a left-to-right Associativity

let x, y; //declaring x and y, so now they exist
x = y = 25-10-5;
console.log(x, y);//10, 10... the - has higher precedence, so it takes 25-10-5 first, then it takes the 10 and assigns it to y, and then to x from right-to-left.

//Grouping () has the highest possible precedence

const averageAge = (ageJonas + ageSarah) / 2 //if there wasn't the grouping (), then the averageAge would incorrectly be 55.5
console.log(ageJonas, ageSarah, averageAge);
*/

    /*
    Coding Challenge #1
    Mark and John are trying to compare their BMI (Body Mass Index), which is 
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) 
    (mass in kg and height in meters).

    Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both 
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about 
    whether Mark has a higher BMI than John.

    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
    m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
    m tall.
    GOOD LUCK �
    */
/*
    let markWeight1 = 78;//better to use const instead of let for these
    let markHeight1 = 1.69;
    let johnWeight1 = 92;
    let johnHeight1 = 1.95;

    let markWeight2 = 95;
    let markHeight2 = 1.88;
    let johnWeight2 = 85;
    let johnHeight2 = 1.76;

    let markBMI1 = markWeight1 / markHeight1 ** 2;
    let johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

    let markBMI2 = markWeight2 / markHeight2 ** 2;
    let johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
    let markHigherBMI = markBMI1 > johnBMI1;
    let markHigherBMI2 = markBMI2 > johnBMI2;

    console.log(markBMI1);
    console.log(johnBMI1);
    console.log(markHigherBMI);
    console.log(markBMI2);
    console.log(johnBMI2);
    console.log(markHigherBMI2);
*/  

//Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; //a much easier way to write the string above by using backticks ``.
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('Sting with \n\
multiple \n\
lines');

console.log(`String with
multiple 
lines`); //backticks just make this easier to break up this string on multiple lines compared to the old method above.
*/
    /*
    LECTURE: Strings and Template Literals
    1. Recreate the 'description' variable from the last assignment, this time 
    using the template literal syntax
    */
    //const description = `Portugal is in Europe, and its 11 million people speak portuguese`;
    //console.log(description);


//Taking Decisions: if/else statements

/*
const age = 15;
//const isOldEnough = age >= 18; not as common to input the condition outside of the if statement 

if(age >= 18) {
    console.log('Sarah can start driving! 🚗');//if the statement is true, the code will execute
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);//if the statement is false, this code will execute
}

const birthYear = 1991;
let century;

if(birthYear <= 2000) {
    let century = 20;// If you declare variables inside of a function like this, it won't be available outside of the function.
    console.log(`I was born in the ${century}th century.`)
} else {
    let century = 21;// If you declare variables inside of a function like this, it won't be available outside of the function.
    console.log(`I was born in the ${century}st century.`)
}
/*

    /*
    LECTURE: Taking Decisions: if / else Statements
    1. If your country's population is greater that 33 million, log a string like this to the 
    console: 'Portugal's population is above average'. Otherwise, log a string like 
    'Portugal's population is 22 million below average' (the 22 is the average of 33 
    minus the country's population)
    2. After checking the result, change the population temporarily to 13 and then to 
    130. See the different results, and set the population back to original
    */
    /*
    const population = 330000000;

    if(population > 33000000){
        console.log(`Portugal's population is above average`);
    } else {
        console.log(`Portugal's population is 22 million below average`);
    }
    */

    /*
    Coding Challenge #2
    Use the BMI example from Challenge #1, and the code you already wrote, and 
    improve it.
    Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message 
    is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
    BMI (28.3) is higher than John's (23.9)!"
    Hint: Use an if/else statement 
    GOOD LUCK 
    */

    // const markWeight1 = 78;
    // const markHeight1 = 1.69;
    // const johnWeight1 = 92;
    // const johnHeight1 = 1.95;

    // const markWeight2 = 95;
    // const markHeight2 = 1.88;
    // const johnWeight2 = 85;
    // const johnHeight2 = 1.76;

    // const markBMI1 = markWeight1 / markHeight1 ** 2;
    // const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

    // const markBMI2 = markWeight2 / markHeight2 ** 2;
    // const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);
    // const markHigherBMI = markBMI1 > johnBMI1;
    // const markHigherBMI2 = markBMI2 > johnBMI2;

    // console.log(markHigherBMI);

    // if(markBMI1 > johnBMI1){
    //     console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
    // } else {
    //     console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
    // }

    // console.log(markHigherBMI2);

    // if(markBMI2 > johnBMI2){
    //     console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
    // } else {
    //     console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
    // }


//Type Conversion and Coercion

//Type Conversion = when we manually convert from one data type to another

// const inputYear = '1991';
// console.log(inputYear + 18);//This actually just adds the string '1991' and number 18 to the end for 199118
// console.log(Number(inputYear));//converts string to number but not permanently
// console.log(Number(inputYear) + 18);//2009
// console.log(Number('Jonas'));//NaN
// console.log(typeof NaN);//number, so it's just an invalid number

// console.log(String(23), 23);//sting, number


//Type Coercion = when JavaScript automatically converts our data from one data type to another

// console.log('I am ' + 23 + " years old.");//whenever there is a number between two strings, it is converted to a string in the log.
// console.log('I am ' + "23" + " years old.");//This is the same output as above.

// console.log('23' - '10' - 3);//10 ... here strings are converted to numbers because of the minus operator
// console.log('23' + '10' + 3);//23103 ... here numbers are converted to stings because of the plus operator
// console.log('23' * '2');//46 ... string converted to numbers
// console.log('23' / '2');//46 ... string converted to numbers

// let n = '1' + 1; //11 (string)
// n = n - 1; //10
// console.log(n); //10 ... 

// console.log(2+3+4+'5'); //95 ... numbers add up to 9, then they convert to a string and add string value 5 to the end

// console.log('10'-'4'-'3'-2+'5'); //15 ... 1 plus 5 as a string -> 15

    /*
    LECTURE: Type Conversion and Coercion
    1. Predict the result of these 5 operations without executing them:
    '9' - '5';
    '19' - '13' + '17';
    '19' - '13' + 17;
    '123' < 57;
    5 + 6 + '4' + 9 - 4 - 2;
    2. Execute the operations to check if you were right
    */

    // console.log('9' - '5');//4
    // console.log('19' - '13' + '17');//617
    // console.log('19' - '13' + 17);//23
    // console.log('123' < 57);//false
    // console.log(5 + 6 + '4' + 9 - 4 - 2);//1143

    
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// Everything else is a truthy value

// console.log(Boolean(0));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean('Jonas'));//true, any string that isn't empty
// console.log(Boolean({}));//true, empty object but not empty string
// console.log(Boolean(''));//false, empty string

// const money = 0;//this is a number, but when input into the if statement it is converted to a Boolean value
// if(money) {
//     console.log("Don't spent it all ;)");
// } else {
//     console.log("You should get a job!");
// }

// let height;//If you don't define height here (falsy value), then it will return the else

// if(height) {
//     console.log("YAY! Height is defined");
// } else {
//     console.log("Height is UNDEFINED");
// }


//Equality Operators

// const age = 18;
// if(age === 18) console.log ("You just became an adult :D (strict)"); //If an if statement is on one line, then you don't need {}

// // === is the strict equality operator. It is strict because it does *not* perform type coercion. It is only true when both values are *exactly* the same. so "18 === '18'" would be false

// // == loose equality operator. It does type coercion. so "18 == '18'" would be true

// if(age == 18) console.log ("You just became an adult :D (loose)"); 

// if(age === '18') console.log ("You just became an adult :D (strict)"); //doesn't equal (string), false

// if(age == '18') console.log ("You just became an adult :D (loose)"); 

// // Avoid the Loose equality operator as much as you can because it can introduce bugs

// const favorite = Number(prompt("What's your favorite number?"));//When you input a value in the popup (without adding Number()), it is a string
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
//     console.log("Cool! 23 is an amazing number!"); 
// }

// if (favorite === 23) { //23 === 23
//     console.log("Cool! 23 is an amazing number!");//This will not give you a result unless you convert the string value from the prompt into a number
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7');
// }

// // the different operator != (loose) and !== (strict)
// // always use the strict version !=

// if(favorite !== 23) console.log('Why not 23?');//Doesn't execute if number is 23

    /*
    LECTURE: Equality Operators: == vs. ===
    1. Declare a variable 'numNeighbors' based on a prompt input like this: 
    prompt('How many neighbor countries does your country 
    have?');
    2. If there is only 1 neighbor, log to the console 'Only 1 border!' (use loose equality 
    == for now)
    3. Use an else-if block to log 'More than 1 border' in case 'numNeighbors'
    is greater than 1
    4. Use an else block to log 'No borders' (this block will be executed when 
    'numNeighbors' is 0 or any other value)
    5. Test the code with different values of 'numNeighbors', including 1 and 0.
    6. Change == to ===, and test the code again, with the same values of 
    'numNeighbors'. Notice what happens when there is exactly 1 border! Why 
    is this happening?
    7. Finally, convert 'numNeighbors' to a number, and watch what happens now 
    when you input 1
    8. Reflect on why we should use the === operator and type conversion in this 
    situation
    */

    // const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));

    // if (numNeighbors === 1) console.log("There is only 1 border!");

    // if (numNeighbors === 1) {
    //     console.log("There is only 1 border!");
    // } else if (numNeighbors > 1) {
    //     console.log("More than 1 border");
    // } else {
    //     console.log("No borders!");
    // }


// Boolean Logic: the And, Or, and Not operators

// See lecture slides



// Logical Operators

// let hasDriversLicense = true; // A
// let hasGoodVision = true; // B
// console.log(hasDriversLicense && hasGoodVision);//true ... && = And (combines the two variables - here true + true === true)

// hasDriversLicense = true; // A
// hasGoodVision = false; // B
// console.log(hasDriversLicense && hasGoodVision);//false ... && = And (here true + false === false)

// hasDriversLicense = true; // A
// hasGoodVision = false; // B
// console.log(hasDriversLicense || hasGoodVision);//true ... || = Or (here true + false === true) You only need one to be true with OR

// hasDriversLicense = true; // A
// hasGoodVision = false; // B
// console.log(!hasDriversLicense || hasGoodVision);//false ... || = Or (here (not)!true + false === false)



// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');//This is the result because the most recent value for these variables are false
// }

// hasDriversLicense = true; // A
// hasGoodVision = false; // B
// const isTired = true; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);//true, at least one is true
// console.log(hasDriversLicense && hasGoodVision && isTired);//false, at least one is false

// if(hasDriversLicense && hasGoodVision && !isTired) { //invert isTired, because we don't want her to be tired
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

    /*
    LECTURE: Logical Operators
    1. Comment out the previous code so the prompt doesn't get in the way
    2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
    country that speaks english, has less than 50 million people and is not an 
    island.
    3. Write an if statement to help Sarah figure out if your country is right for her. 
    You will need to write a condition that accounts for all of Sarah's criteria. Take 
    your time with this, and check part of the solution if necessary.
    4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
    not, log 'Portugal does not meet your criteria :('
    5. Probably your country does not meet all the criteria. So go back and temporarily 
    change some variables in order to make the condition true (unless you live in 
    Canada :D)
    */

    // const population = 330000000;
    // const language = "English";
    // const isIsland = false;

    // console.log(typeof population);
    
    // if((population < 50000000) && (language === "English") && (isIsland === false)) {
    //     console.log(`You should live in Portugal :)`);
    // } else {
    //     console.log(`Portugal does not meet your criteria :(`);
    // }


    /*
    Coding Challenge #3
    There are two gymnastics teams, Dolphins and Koalas. They compete against each 
    other 3 times. The winner with the highest average score wins a trophy!
    Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition, 
    and print it to the console. Don't forget that there can be a draw, so test for that 
    as well (draw means they have the same average score)

    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
    team only wins if it has a higher score than the other team, and the same time a 
    score of at least 100 points. Hint: Use a logical operator to test for minimum 
    score, as well as multiple else-if blocks �
    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
    both teams have the same score and both have a score greater or equal 100 
    points. Otherwise, no team wins the trophy
    Test data:
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    GOOD LUCK
    */

    // const dolphinsScore1 = 96;
    // const dolphinsScore2 = 108;
    // const dolphinsScore3 = 89;

    // const koalasScore1 = 88;
    // const koalasScore2 = 91;
    // const koalasScore3 = 110;

    // const dolphinsAverage = ((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);
    // console.log(`The Dolphin's average score is ${dolphinsAverage}.`);

    // const koalasAverage = ((koalasScore1 + koalasScore2 + koalasScore3) / 3);
    // console.log(`The Koala's average score is ${koalasAverage}.`);

    // if (dolphinsAverage > koalasAverage) {
    //     console.log(`The Dolphin's average score ${dolphinsAverage} is greater than the Koala's average score ${koalasAverage}.`);
    // } else if (dolphinsAverage < koalasAverage){
    //     console.log(`The Dolphin's average score ${dolphinsAverage} is less than the Koala's average score ${koalasAverage}.`);
    // } else {
    //     console.log(`The Dolphin's average score ${dolphinsAverage} is equal to the Koala's average score ${koalasAverage}.`);
    // }


    // Bonus 1 and 2

    // const dolphinsScore1 = 97;
    // const dolphinsScore2 = 112;
    // const dolphinsScore3 = 101;

    // const koalasScore1 = 109;
    // const koalasScore2 = 95;
    // const koalasScore3 = 123;

    // const dolphinsAverage = ((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);
    // console.log(`The Dolphin's average score is ${dolphinsAverage}.`);

    // const koalasAverage = ((koalasScore1 + koalasScore2 + koalasScore3) / 3);
    // console.log(`The Koala's average score is ${koalasAverage}.`);

    // if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) { //bonus 1
    //     console.log(`The Dolphin's average score ${dolphinsAverage} is greater than the Koala's average score ${koalasAverage}.`);
    // } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100){ // bonus 1
    //     console.log(`The Dolphin's average score ${dolphinsAverage} is less than the Koala's average score ${koalasAverage}.`);
    // } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100){ // bonus 2
    //     console.log(`Both teams win the trophy! 🏆`);
    // } else {
    //     console.log(`No one wins the trophy`);
    // }


// The Switch Statement

// Another way of writing a complicated if/else statement when all we want to do is to compare one value to multiple different options.

// const day = 'Tuesday';

// switch(day) {
//     case 'Monday': // day === 'Monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break; //If you don't break these, then the code keeps executing until there is a break.
//     case 'Tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'Wednesday':
//     case 'Thursday': //Whatever we write here will execute for both Wednesday and Thursday
//         console.log('Write code examples');
//         break;
//     case 'Friday':
//         console.log('Record videos');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default: // in case all of the other cases fail
//         console.log('Not a valid day!');
// }

// // now to write this switch statement as an if/else statement

// if(day === "Monday") {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === "Tuesday"){
//     console.log('Prepare theory videos');
// } else if (day === "Wednesday" || day === "Thursday"){
//     console.log('Write code examples');
// } else if (day === "Friday"){
//     console.log('Record videos');
// } else if (day === "Saturday" || day === "Sunday"){
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

    /*
    LECTURE: The switch Statement
    1. Use a switch statement to log the following string for the given 'language':
    chinese or mandarin: 'MOST number of native speakers!'
    spanish: '2nd place in number of native speakers'
    english: '3rd place'
    hindi: 'Number 4'
    arabic: '5th most spoken language'
    for all other simply log 'Great language too :D
    */

    // const language = "Spanish";

    // switch(language){
    //     case 'Chinese':
    //     case 'Mandarin':
    //         console.log("MOST number of native speakers!");
    //         break;
    //     case 'Spanish':
    //         console.log("2nd place in number of native speakers");
    //         break;
    //     case 'English':
    //         console.log("3rd place");
    //         break;
    //     case 'Hindi':
    //         console.log("Number 4");
    //         break;
    //     case 'arabic':
    //         console.log("5th most spoken language");
    //         break;
    //     default:
    //         console.log("Great language too :D");
    // }


// Statements and Expressions

// Statement = A piece of code that produces a value

// 3 + 4 is an expression
// any number would also be an expression
// true && false && !false would also be an expression

// A declaration is like a complete sentence and an expression is like the words that makes up the sentence.

// if (23 > 10) {
//     const str = '23 is bigger';
// }
// this if statement is a "statement"

// This is important to know because JavaScript expects expressions in some areas and statements in others

// console.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
// const str = '23 is bigger';
// }
// }`)// This pulls an error because the statement cannot go into a place where an expression is expected.

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`)// This is correct


// Conditional (Ternary) Operator

// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧'); 

// // 3 parts needed 1. the condition (age >= 18) ? 2. (if) : 3. (else);

// // We can also conditionally declare variables as seen below. This is used much more than the example above.

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink); // the variable drink is conditionally valued as wine 🍷 because the age variable is greater than 18.

// let drink2;// need to define this outside of the statement because any variables declared within a statement cannot be used outside
// if(age >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// // since the ternary operator is an expression and not a statement (*important*, see above) then we can input it into the console.log in this way
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}.`);

// The ternary operator is not thought of as a replacement for the if/else statement. We still need if/else statements all the time.

    /*
    LECTURE: The Conditional (Ternary) Operator
    1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. 
    Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
    2. After checking the result, change the population temporarily to 13 and then to 
    130. See the different results, and set the population back to original
    */

    // const population = 340000000;

    // const portugalPopulation = population > 33000000 ? `Portugal's population is above average` : `Portugal's population is below average`;
    // console.log(portugalPopulation);



    // Coding Challenge #4

    // Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

    // Your tasks:
    // 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

    // 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

    // Test data:
    // § Data 1: Test for bill values 275, 40 and 430

    // Hints:
    // § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
    // § Value X is between 50 and 300, if it's >= 50 && <= 300 �
    // GOOD LUCK 


    
    // let bill = 275;// you can only have one bill variable active at one time. 
    // let bill = 40;
    // let bill = 430;

    // const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);

    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


