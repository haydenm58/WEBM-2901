'use strict';
// Strict Mode 
// 'use strict' always needs to be the first line of *code* if you want the doc to be in strict mode. You can put comments first because they aren't code. 
// you can also use strict mode for specific functions or blocks, but the teacher doesn't see a point in doing that so he always puts it first.

// Why is strict mode important? It helps us to write more secure code, avoid accidental errors, and helps us to avoid introducing bugs into the code.
// How does it help us avoid errors? 1. It prevents us from doing certain things 2. It actually creates visible errors for us in certain situations.

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriverLicense = true; // This pulls an error with strict mode in the console "hasDriverLicense is not defined"
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log (`I can drive`);

//const interface = 'Audio'; //Unexpected strict mode reserved (interface is a reserved variable name)
//const private = 534; //Unexpected strict mode reserved (private is a reserved variable name)
//const if = 23; //Unexpected strict mode reserved (if is a reserved variable name)


// Functions
// A function is a piece of code that you can use over and over again in the code

// function logger() {
//     console.log(`My name is Jonas`);
// }

// calling / running / invoking the function
// logger();
// logger();
// logger();
// logger();

// when we use functions, we often pass data into the function
// functions can also return data as well

// functions can be thought of as *machines*
// A function is like a food processor, like a juicer. We input the fruit(data) into the processor and it returns it back to us as something new, like fruit -> juice. 

//Here we'll input Parameters into the function -> apples, oranges
//Parameters are like variables that are specific only to this function
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);// this gives us the apples, oranges values in the console
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // string with variables
//     return juice; // if we don't return juice, we will get undefined
// }

// fruitProcessor(5, 0);

// const appleJuice = fruitProcessor(7, 3); // We *save* the values 7, 3 within the new variable appleJuice
// console.log(appleJuice);

// console.log(fruitProcessor(10, 5)); // Here we don't *capture* the values within a variable, we simply display the result

// const appleOrangeJuice = fruitProcessor(1, 8);
// console.log(appleOrangeJuice);

// A very important principle for writing clean code = understanding that functions need to be used so you don't have to write the same code over and over again
// Keep your code DRY -> Don't Repeat Yourself

    /*
    LECTURE: Functions
    1. Write a function called 'describeCountry' which takes three parameters: 
    'country', 'population' and 'capitalCity'. Based on this input, the 
    function returns a string with this format: 'Finland has 6 million people and its 
    capital city is Helsinki'
    2. Call this function 3 times, with input data for 3 different countries. Store the 
    returned values in 3 different variables, and log them to the console
    */

    // function describeCountry(country, population, capitalCity) {
    //     const countryDescription = (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
    //     return countryDescription;
    // }

    // const populationUSA = describeCountry(`The United States`, 330, `Washington D.C.`);// Assigning these Parameters to the variable populationUSA
    // const populationGermany = describeCountry(`Germany`, 83, `Berlin`);
    // const populationNZ = describeCountry(`New Zealand`, 5, `Wellington`);

    // console.log(populationUSA); //Calling the variable populationUSA with the parameters assigned above
    // console.log(populationGermany);
    // console.log(populationNZ);



// Function Declarations vs. Expressions

// Function Declaration
// The functions above are function declarations. Here's another function declaration below.

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);


// Function Expression

//Here we don't give the function a name
//Rather, the function is nested inside of a variable
//The function is now an expression (that returns a value)
//And then we store that value into the variable calcAge2

// const calcAge2 = function (birthYear) { 
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2); // 46 46 ... it's the same because the parameter and everything is the same, it was just written differently


//So what's the big deal and difference between function declarations and function expressions?
//One main difference is that we can actually call function declarations before they are defined in the code.
//You can't do that with a function expression.

//Which of the two types should I use when I write my own functions?
//Oftentimes, it's just a matter of personal preference.
//Personally, Jonas prefers to use function expressions.
//This forces him to use a nice structure where he has to define all of his functions first at the top of the page before he can use them. 
//He also likes to have everything stored in variables, both values and functions.

    /*
    LECTURE: Function Declarations vs. Expressions
    1. The world population is 7900 million people. Create a function declaration
    called 'percentageOfWorld1' which receives a 'population' value, and
    returns the percentage of the world population that the given population 
    represents. For example, China has 1441 million people, so it's about 18.2% of 
    the world population
    2. To calculate the percentage, divide the given 'population' value by 7900 
    and then multiply by 100
    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
    store the results into variables, and log them to the console
    4. Create a function expression which does the exact same thing, called 
    'percentageOfWorld2', and also call it with 3 country populations (can be 
    the same populations)
    */

    //Function Declaration
    // function percentageOfWorld1 (population) {
    //     const country = population / 7900 * 100;
    //     return country;
    // }

    // let chinaPopulation = percentageOfWorld1(1441);
    // let germanyPopulation = percentageOfWorld1(83);
    // let usaPopulation = percentageOfWorld1(330);
    // let nzPopulation = percentageOfWorld1(5);

    // console.log(chinaPopulation);
    // console.log(germanyPopulation);
    // console.log(usaPopulation);
    // console.log(nzPopulation);

    //Function Expression
    // const percentageOfWorld2 = function (population) {
    //     const country = population / 7900 * 100;
    //     return country;
    // }

    // chinaPopulation = percentageOfWorld2(1441);
    // germanyPopulation = percentageOfWorld2(83);
    // usaPopulation = percentageOfWorld2(330);
    // nzPopulation = percentageOfWorld2(5);

    // console.log(chinaPopulation);
    // console.log(germanyPopulation);
    // console.log(usaPopulation);
    // console.log(nzPopulation);



// Arrow Function

//Arrow is a 3rd type of function that was added in ES6
//It's shorter and faster to write

// Let's compare to this Function expression here
// const calcAge2 = function (birthYear) { 
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age2);


// Arrow Function here
//birthYear => 2037 - birthYear; // But we want to save this function within a variable

// const calcAge3 = birthYear => 2037 - birthYear; //this value will be returned implicitly, so we don't need to add a "return" statement
// const age3 = calcAge3(1991); //saving the return value to a new variable age3
// console.log(age3);


//Let's calculate how many years someone has left until retirement
// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear; //2037 is the "current year"
//     const retirement = 65 - age;
//     return retirement; //you have to "return" if the code isn't just a single line
// }
// console.log(yearsUntilRetirement(1991)); //19 ... 65 - 46 ... (46 is the age)

//Now let's return a string and have two parameters (birthYear, firstName)
// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2037 - birthYear; //2037 is the "current year"
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// }
// console.log(yearsUntilRetirement2(1991, "Jonas")); //"Jonas retires in 19 years."
// console.log(yearsUntilRetirement2(1980, "Bob")); //"Bob retires in 8 years."
// console.log(yearsUntilRetirement2(1994, "Hayden")); //"Hayden retires in 22 years."

    /*
    LECTURE: Arrow Functions
    1. Recreate the last assignment, but this time create an arrow function called 
    'percentageOfWorld3'
    */

    // const percentageOfWorld3 = population => {
    //     const country = population / 7900 * 100;
    //     return country;
    // }

    // let chinaPopulation = percentageOfWorld3(1441);
    // let germanyPopulation = percentageOfWorld3(83);
    // let usaPopulation = percentageOfWorld3(330);
    // let nzPopulation = percentageOfWorld3(5);

    // console.log(chinaPopulation);
    // console.log(germanyPopulation);
    // console.log(usaPopulation);
    // console.log(nzPopulation);



// Functions Calling Other Functions

//Let's return to the example previously comparing functions to food processors

// function cutFruitPieces(fruit) {
//     return fruit * 4;//This function cuts the whole fruit into smaller pieces so that function "fruitProcessor" can handle it
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples); //calling the cutFruitPieces function inside of this function
//     const orangePieces = cutFruitPieces(oranges); //calling the cutFruitPieces function inside of this function

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`; // string with variables
//     return juice; // if we don't return juice, we will get undefined
// }

// console.log(fruitProcessor(2, 3)); //This calls the fruitProcessor function, which then calls the cutFruitPieces function twice within itself
//View Slideshow *important!!* to understand how the data flows in this above example.


    /*
    LECTURE: Functions Calling Other Functions
    1. Create a function called 'describePopulation'. Use the function type you 
    like the most. This function takes in two arguments: 'country' and 
    'population', and returns a string like this: 'China has 1441 million people, 
    which is about 18.2% of the world.'
    2. To calculate the percentage, 'describePopulation' call the 
    'percentageOfWorld1' you created earlier
    3. Call 'describePopulation' with data for 3 countries of your choice
    */

    // function percentageOfWorld1 (population) {
    //     const country = population / 7900 * 100;
    //     return country;
    // }

    // function describePopulation(country, population) {
    //     const countryPercentage = percentageOfWorld1(population);

    //     const countryDescription = `${country} has ${population} million people, which is about ${countryPercentage}% of the world's population.`;
    //     return countryDescription;
    // }

    // const chinaPopulation = (describePopulation("China", 1441));
    // const germanyPopulation = (describePopulation("Germany", 83));
    // const usaPopulation = (describePopulation("USA", 330));
    // const nzPopulation = (describePopulation("New Zealand", 5));

    // console.log(chinaPopulation);
    // console.log(germanyPopulation);
    // console.log(usaPopulation);
    // console.log(nzPopulation);


// Reviewing Functions

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear); // we are using the function above "calcAge" within this function
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement; //return statements exit the code! So anything afterward won't run
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


    /*
    Coding Challenge #1
    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

    A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
    
    Your tasks:
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
    2. Use the function to calculate the average for both teams
    3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. 
    Example: "Koalas win (30 vs. 13)"
    4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
    5. Ignore draws this time

    Test data:
    § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
    Hints:
    § To calculate average of 3 values, add them all together and divide by 3
    § To check if number A is at least double number B, check for A >= 2 * B. 
    Apply this to the team's average scores �
    GOOD LUCK 
    */


    // const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3 );

    // let dolphinScore = calcAverage(44, 23, 71);
    // console.log(dolphinScore);//46

    // let koalaScore = calcAverage(65, 54, 49);
    // console.log(koalaScore);//56

    // dolphinScore = calcAverage(85, 54, 41);
    // console.log(dolphinScore);//60

    // koalaScore = calcAverage(23, 34, 27);
    // console.log(koalaScore);//28 


    // const checkWinner = function (avgDolphins, avgKoalas) {
    //     if (avgDolphins >= 2 * avgKoalas) {
    //         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    //     } else if (avgKoalas >= 2 * avgDolphins) {
    //         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    //     } else {
    //         console.log(`Nobody wins :(`);
    //     }
    // }

    // checkWinner(45, 56);
    // checkWinner(60, 28);
    // checkWinner(40, 100);

    // dolphinScore = calcAverage(200, 300, 400);
    // koalaScore= calcAverage(22, 44, 84);
    // checkWinner(dolphinScore, koalaScore);// You can use the previous variables and input them as the parameters



//Arrays

//Storing data (like names) for later use

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';// If we had 30 friends, we would have to create 30 variables, which would not be fun.
// That's why we have arrays

// An Array is like a big container into which we can throw in variables and then later reference them.

// The two most important data structures in JavaScript are Arrays and Objects


//There are two ways to write an array
//1
// const friends = ['Michael', 'Steven', 'Peter'];//Literal Array syntax => more common
// console.log(friends);
//2
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);


// console.log(friends[0]);//calls the element in position 0, "Michael"
// console.log(friends[2]);//calls "Peter"

// console.log(friends.length);//3 => exact amount of elements in the Array
// console.log(friends[friends.length - 2]);//Steven => friends.length is "3" - 2 is 1, which is the position of Steven

// friends[2] = 'Jay';//replace element 2 (Peter)
// console.log(friends);// ['Michael', 'Steven', 'Jay']

//An array is *not* a primitive value, so even if it is declared with const, it can still be changed.

//One thing that we *cannot* do is replace the entire array
//friends = ['Bob', 'Alice'];//error. You cannot replace the entire array like this

//An Array can hold values with different types all at the same time like this vvv

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schuman', 2037 - 1991, 'teacher', friends];
// console.log(jonas); //['Jonas', 'Schuman', 46, 'teacher', Array(3)]


//Array Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;//Remember "2037" is the "current year"
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// //console.log(calcAge(years));//This gives us NaN, because you cant use subtract the whole Array from one number (2037)

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);//This lets you grab the last element in the array without counting it.
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// //Here we can see that any element of an array just has to be an expression (not a statement), so these calcAge expressions work here. So we can place function *calls* into the array.
// console.log(ages); //(3) [47, 70, 19]

    /*
    LECTURE: Introduction to Arrays
    1. Create an array containing 4 population values of 4 countries of your choice. 
    You may use the values you have been using previously. Store this array into a 
    variable called 'populations'
    2. Log to the console whether the array has 4 elements or not (true or false)
    3. Create an array called 'percentages' containing the percentages of the 
    world population for these 4 population values. Use the function 
    'percentageOfWorld1' that you created earlier to compute the 4 
    percentage values
    */

    // const populations = [1300, 330, 83, 5];
    
    // if (populations.length === 4) {
    //     console.log(`true`);
    // } else {
    //     console.log(`false`);
    // }

    // function percentageOfWorld1 (population) {
    //     const country = population / 7900 * 100; // population / 7.9 billion * 100
    //     return country;
    // }

    // const percentages = [
    //     percentageOfWorld1(populations[0]),
    //     percentageOfWorld1(populations[1]),
    //     percentageOfWorld1(populations[2]),
    //     percentageOfWorld1(populations[3])
    // ];

    // console.log (percentages);//4) [16.455696202531644, 4.177215189873418, 1.0506329113924051, 0.06329113924050633]



//Basic Array Operations (Methods)

// const friends = ['Michael', 'Steven', 'Peter'];//Literal Array syntax => more common

// //Add elements
// //Push method. Push is a method (a method is a function) that adds an element to the end of the Array
// const newLength = friends.push('Jay');
// console.log(friends);// ['Michael', 'Steven', 'Peter', 'Jay']
// console.log(newLength);//new variable that gives (and stores) the amount of elements in the array. Different than just counting the length with friends.length

// //Unshift method. Add an element to the start of the Array
// friends.unshift('John');
// console.log(friends);//['John', 'Michael', 'Steven', 'Peter', 'Jay']

// //Remove elements
// //Pop method. Opposite of push -> remove element from the end of the Array
// friends.pop();
// const popped = friends.pop();
// console.log(popped);//Peter -> this variable is showing us what element was removed from the Array
// console.log(friends);//['John', 'Michael', 'Steven']

// //Unshift method. Opposite of unshift -> remove element from the start of the Array
// friends.shift();
// console.log(friends);//['Michael', 'Steven']


// //Other useful methods
// //indexOf method. Tells us which position a certain element is in the Array
// console.log(friends.indexOf('Steven'));//1 -> He's in the 1 position
// console.log(friends.indexOf('Bob'));//-1 -> false. Element not in the Array

// //includes method. Tells us if an element is in the Array -> *Strict Equality*
// console.log(friends.includes('Steven'));//true, element in the array
// console.log(friends.includes('Bob'));//false, element not in the array

// friends.push(23);//not a string so the includes below is false
// console.log(friends.includes('23'));//false, element not in the array
// console.log(friends.includes(23));//true, element in the array

// if (friends.includes('Michael')) {
//     console.log('You have a friend named Michael');
// }

    /*
    LECTURE: Basic Array Operations (Methods)
    1. Create an array containing all the neighboring countries of a country of your 
    choice. Choose a country which has at least 2 or 3 neighbors. Store the array 
    into a variable called 'neighbors'
    2. At some point, a new country called 'Utopia' is created in the neighborhood of 
    your selected country. So add it to the end of the 'neighbors' array
    3. Unfortunately, after some time, the new country is dissolved. So remove it from 
    the end of the array
    4. If the 'neighbors' array does not include the country ‘Germany’, log to the 
    console: 'Probably not a central European country :D'
    5. Change the name of one of your neighboring countries. To do that, find the 
    index of the country in the 'neighbors' array, and then use that index to 
    change the array at that index position. For example, you can search for
    'Sweden' in the array, and then replace it with 'Republic of Sweden'.
    */

    // const neighbors = [
        // 'France',
        // 'Belgium',
        // 'Netherlands',
        // 'Denmark',
        // 'Poland',
        // 'Czech Republic',
        // 'Austria',
        // 'Switzerland'
    // ];
    // console.log(neighbors);

    // neighbors.push('Utopia');
    // console.log(neighbors);

    // neighbors.pop();
    // console.log(neighbors);

    // if (neighbors.includes('Germany')) {
    //     console.log(`You're in central Europe :D`);
    // } else {
    //     console.log(`Probably not a central European country :D`);
    // }

    // neighbors[neighbors.indexOf('Czech Republic')] = 'Czechia';
    // console.log(neighbors)



    /*
    Coding Challenge #2
    Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

    Your tasks:
    1. Write a function 'calcTip' that takes any bill value as an input and returns 
    the corresponding tip, calculated based on the rules above (you can check out 
    the code from first tip calculator challenge if you need to). Use the function 
    type you like the most. Test the function using a bill value of 100
    2. And now let's use arrays! So create an array 'bills' containing the test data 
    below
    3. Create an array 'tips' containing the tip value for each bill, calculated from 
    the function you created before
    4. Bonus: Create an array 'total' containing the total values, so the bill + tip
    Test data: 125, 555 and 44
    Hint: Remember that an array needs a value in each position, and that value can 
    actually be the returned value of a function! So you can just call a function as array 
    values (so don't store the tip values in separate variables first, but right in the new 
    array) �
    GOOD LUCK 
    */
        //.start reference code
        //let bill = 275;// you can only have one bill variable active at one time. 
        // let bill = 40;
        // let bill = 430;

        // const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);

        // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
        //.end reference code
    
    // const calcTip = function (bill) {
    //     if (bill >= 50 && bill <= 300) {
    //         const tipValue = (bill * 0.15);
    //         return tipValue;
    //     } else {
    //         const tipValue = (bill * 0.2);
    //         return tipValue;
    //     }
    // }

    // const bill1 = calcTip(100);
    // const bill2 = calcTip(125);
    // const bill3 = calcTip(555);
    // const bill4 = calcTip(44);
    // console.log(bill1, bill2, bill3, bill4);//15 18.75 111 8.8

    // const bills = [100, 125, 555, 44];
    // console.log(bills);//(4) [100, 125, 555, 44]

    // const tips = [bill1, bill2, bill3, bill4]; //Alternative -> const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3])];
    // console.log(tips);//4) [15, 18.75, 111, 8.8]

    // const total = [
    //     (bills[0] + tips[0]),
    //     (bills[1] + tips[1]),
    //     (bills[2] + tips[2]),
    //     (bills[3] + tips[3]),
    // ];
    // console.log(total);//(4) [115, 143.75, 666, 52.8]


//Introduction to Objects
    
//This is an Array. In arrays, there is no way to give each element a name.
//You can only reference elements by the order number that they appear in the Array.
// const jonasArray = [
//     'Jonas',
//     'Schuman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

//This is an Object.
//Objects define key/value pairs. The key is the name, and the value can be any expression (functions can be expressions)
//This is the Object Literal syntax method
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schuman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);

//Objects are *probably* the most fundamental concept in the whole JavaScript language
//So... there many ways to create objects
//This above is probably the simplest way to create an object

//BIG difference between Objects and Arrays is that the order of Objects don't matter upon retrieval.

    /*
    LECTURE: Introduction to Objects
    1. Create an object called 'myCountry' for a country of your choice, containing 
    properties 'country', 'capital', 'language', 'population' and 
    'neighbors' (an array like we used in previous assignments)
    */

    // const myCountry = {
    //     country: 'Germany',
    //     capital: 'Berlin',
    //     language: 'German',
    //     population: 83000000,
    //     neighbors: [
    //     'France',
    //     'Belgium',
    //     'Netherlands',
    //     'Denmark',
    //     'Poland',
    //     'Czech Republic',
    //     'Austria',
    //     'Switzerland'
    //     ]
    // };

    // console.log(myCountry);


//Dot vs. Bracket Notation
//How to retrieve and change data in Objects using the Dot and the Bracket Notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schuman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas); //{firstName: 'Jonas', lastName: 'Schuman', age: 46, job: 'teacher', friends: Array(3)}

// //Data Retrieval
// //Dot Notation
// console.log(jonas.lastName);//Schuman
// //Bracket Notation
// console.log(jonas['lastName']);//Schuman
// //The difference between these two is that with the bracket [] notation, we can input any expression we would like.
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);//"firstName" string is retrieved. More common practice than you might think
// console.log(jonas['last' + nameKey]);//"lastName" string is retrieved.

//This would *not* work console.log(jonas.'first' + nameKey);

// const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.`);
// console.log(jonas[interestedIn]);//popup prompt input will display the result in the console.

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends.`);
// }


//Add new properties with Dot and Bracket
//Add with Dot notation
// jonas.location = 'Portugal';
// //Add with Bracket notation
// jonas['twitter'] = '@jonas.schuman';
// console.log(jonas);//{firstName: 'Jonas', lastName: 'Schuman', age: 46, job: 'teacher', friends: Array(3), …}

// //Challenge
// //"Jonas has 3 friends and his best friend is Michael."
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`);


    /*
    LECTURE: Dot vs. Bracket Notation
    1. Using the object from the previous assignment, log a string like this to the 
    console: 'Finland has 6 million finnish-speaking people, 3 neighboring countries 
    and a capital called Helsinki.'
    2. Increase the country's population by two million using dot notation, and then 
    decrease it by two million using brackets notation
    */

    // const myCountry = {
    //     country: 'Germany',
    //     capital: 'Berlin',
    //     language: 'German',
    //     population: 83,
    //     neighbors: [
    //     'France',
    //     'Belgium',
    //     'Netherlands',
    //     'Denmark',
    //     'Poland',
    //     'Czech Republic',
    //     'Austria',
    //     'Switzerland'
    //     ]
    // };

    // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

    // myCountry.population = 85;//increased by 2 million
    // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

    // myCountry["population"] = 83;//decreased by 2 million
    // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);



//Object Methods

//We can add functions to Objects
//name of the function is the key in the key/value pair
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schuman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function(birthYear) {
//         return 2037 - birthYear;
//     }
// };
// console.log(jonas); 

// console.log(jonas.calcAge(1991));//46
// console.log(jonas["calcAge"](1991));//46


//"This" function
//This is equal to the object on which it is called
//In other words, it is equal to the object calling the method
//Here, the method is calcAge, and the object calling the method is john
// const john = {
//     firstName: 'John',
//     lastName: 'Schuman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         console.log(this);//{firstName: 'John', lastName: 'Schuman', birthYear: 1991, job: 'teacher', friends: Array(3), …}
//         return 2037 - this.birthYear;
//     }
// };

// console.log(john.calcAge());//46
// console.log(john["calcAge"]());//46


// //We can also use "This" to store a new property
// const james = {
//     firstName: 'James',
//     lastName: 'Schuman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2037 - this.birthYear; //We calculate the age, and then "This" creates a new property on the parent object, which "This" is referring to the james object
//         //Here we are essentially creating this.age (james.age) and giving it the value "2037 - this.birthYear";
//         return this.age;
//     },

//     getSummary: function() {
//         if (this.hasDriversLicense === true) {
//           this.getSummary = (`${this.firstName} is a ${this.age}-year old ${this.job}, and he has a driver's license`);
//           return this.getSummary;
//         } else {
//           this.getSummary = (`${this.firstName} is a ${this.age}-year old ${this.job}, and he has no driver's license`);
//           return this.getSummary;
//         };
//     },

//     //Teacher's version below
//     getSummary1: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     } 

// };

// console.log(james.calcAge());//46
// console.log(james["calcAge"]());//46

// console.log(james.age);//46 -> this is possible because of "This"
// console.log(james.age);//46 -> this is possible because of "This"
// console.log(james.age);//46 -> this is possible because of "This"


// //Challenge 
// //Write a method called getSummary. In this method, it should return a string that summarizes the data about James (object) 
// //"James is a 46-year old teacher, and he has a/no driver's license"

// console.log(james.getSummary());

// console.log(james.getSummary1());


    /*
    LECTURE: Object Methods
    1. Add a method called 'describe' to the 'myCountry' object. This method 
    will log a string to the console, similar to the string logged in the previous 
    assignment, but this time using the 'this' keyword.
    2. Call the 'describe' method
    3. Add a method called 'checkIsland' to the 'myCountry' object. This 
    method will set a new property on the object, called 'isIsland'. 
    'isIsland' will be true if there are no neighboring countries, and false if 
    there are. Use the ternary operator to set the property
    */

    // const myCountry = {
    //     country: 'Germany',
    //     capital: 'Berlin',
    //     language: 'German',
    //     population: 83,
    //     neighbors: [
    //     'France',
    //     'Belgium',
    //     'Netherlands',
    //     'Denmark',
    //     'Poland',
    //     'Czech Republic',
    //     'Austria',
    //     'Switzerland'
    //     ],

    //     describe: function() {
    //         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
    //     },

    //     checkIsland: function() {
    //         this.isIsland = this.neighbors.length === 0 ? true : false;
    //     }

    // };

    // myCountry.describe();
    // myCountry.checkIsland();
    // console.log(myCountry);


    /*
    Coding Challenge #3
    Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

    Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
    2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
    3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
    
    Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
    tall.
    GOOD LUCK 
    */


    // const mark = {
    //     fullName: `Mark Miller`,
    //     mass: 78,
    //     height: 1.69,

    //     calcBMI: function() {
    //         this.bmi = this.mass / this.height ** 2;
    //         return this.bmi;
    //     },
    // };

    // const john = {
    //     fullName: `John Smith`,
    //     mass: 92,
    //     height: 1.95,

    //     calcBMI: function() {
    //         this.bmi = this.mass / this.height ** 2;
    //         return this.bmi;
    //     },
    // };

    // console.log(mark);
    // console.log(john);

    // mark.calcBMI();//27.309968138370508
    // john.calcBMI();//24.194608809993426
    // console.log(mark.calcBMI(), john.calcBMI());

    // if (mark.bmi > john.bmi) {
    //     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`)
    // } else if (john.bmi > mark.bmi) {
    //     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)
    // } else {
    //     console.log(`Their BMI's are equal!`)
    // };



//Iteration: the For Loop

//Loops are a fundamental aspect of every programming language
//They allow us to automate repetitive tasks

//Example: Lifting weights
//Lets "Automate" the lifting of weights 10x reps

// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');
//This is repetitive, time consuming, and not very DRY

//Let's implement this with a For Loop with a counter

//need to use let because the counter will update with the loop
//There are 3 parts in the For Loop
//1. variable -> gives starting value 
//2. condition -> for loop keeps running while condition is TRUE 
//3. counter -> if this doesn't increment, loop will remain at starting value forever

//Then you add the code that you want to be repeated
// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// };


    /*
    LECTURE: Iteration: The for Loop
    1. There are elections in your country! In a small town, there are only 50 voters. 
    Use a for loop to simulate the 50 people voting, by logging a string like this to 
    the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
    */

    // for(let vote = 1; vote <=50; vote++) {
    //     console.log(`Voter number ${vote} is currently voting.`);
    // };


//Looping Arrays, Breaking and Continuing

//We can use For Loops to loop through Arrays

// const jonas = [
//     'Jonas',
//     'Schuman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas [5] does NOT exist
// we can use jonas.length as the condition and it will stop once it reaches the length of the array

// for(let i = 0; i < jonas.length; i++) {
//     //Reading jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //Filling types array
//     //types[i] = typeof jonas[i]; //types[0] = typeof jonas[0]; This shows us what each data type is for each element.
//     //This is taking the typeof jonas and adding it into the types array.

//     //Filling types array method 2 -> push method
//     types.push(typeof jonas[i]);//Very Important! Don't use unshift, you need to use push (add to the end of array)
// };

// console.log(types);//(6) ['string', 'string', 'number', 'string', 'object', 'boolean']


//another practical For Loop array example 
//goal = calculate the ages for all 4 of these birth years.

// const years = [1991, 2007, 1969, 2020];
// const ages = [];//create another empty array to hold the ages

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);//adding the calculation done here to the empty array ages
// };
// console.log(ages);


//Continue and Break statements
//Continue
//In this example, we only want to print elements to the array that are strings. We can use the Continue statement.
// console.log(' ---- ONLY STRINGS ----');
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue; //Here we are skipping (continuing) anything that is not a string

//     console.log(jonas[i], typeof jonas[i]);
// };

//Break
//Break completely terminates the whole loop, not just the current iteration
//In this example, after a number is found, nothing else should be printed

// console.log(' ---- BREAK WITH NUMBER ----');
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break; //Here we are skipping (continuing) anything that is not a string

//     console.log(jonas[i], typeof jonas[i]);
// };

//The most important takeaway from this lecture is how we can loop through arrays using the logic of i from lines 1034 - 1040


    /*
    LECTURE: Looping Arrays, Breaking and Continuing
    1. Let's bring back the 'populations' array from a previous assignment
    2. Use a for loop to compute an array called 'percentages2' containing the 
    percentages of the world population for the 4 population values. Use the 
    function 'percentageOfWorld1' that you created earlier
    3. Confirm that 'percentages2' contains exactly the same values as the 
    'percentages' array that we created manually in the previous assignment, 
    and reflect on how much better this solution is
    */

    // const populations = [1300, 330, 83, 5];
    // const percentages2 = [];

    // for(let i = 0; i < populations.length; i++) {
    //     percentages2[i] = populations[i] / 7900 * 100;
    // };
    // //from earlier
    // function percentageOfWorld1 (population) {
    //     const country = population / 7900 * 100; // population / 7.9 billion * 100
    //     return country;
    // }
    // const percentages = [
    //     percentageOfWorld1(populations[0]),
    //     percentageOfWorld1(populations[1]),
    //     percentageOfWorld1(populations[2]),
    //     percentageOfWorld1(populations[3])
    // ];

    // console.log (percentages);//4) [16.455696202531644, 4.177215189873418, 1.0506329113924051, 0.06329113924050633]

    // console.log(percentages2);//Same as percentages - correct and easier



//Looping Backwards and Loops in Loops

//Backwards loops
// const jonas = [
//     'Jonas',
//     'Schuman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];

// //Let's loop over this array backwards
// // 4, 3, ..., 0

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// };


//Loops in a Loop
// for (let exercise = 1; exercise < 4; exercise++ ) {
//     console.log(` ------------- Starting Exercise ${exercise}`);

//     //Now, we need to show the reps, which can be done with a loop inside of the exercise loop
//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️`);
//     };
// };


    /*
    LECTURE: Looping Backwards and Loops in Loops
    1. Store this array of arrays into a variable called 'listOfNeighbors'
    [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
    2. Log only the neighboring countries to the console, one by one, not the entire 
    arrays. Log a string like 'Neighbor: Canada' for each country
    3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
    worry if it's too difficult for you! But you can still try to figure this out anyway �
    */

    // const listOfNeighbors = [
    //     ['Canada', 'Mexico'], 
    //     ['Spain'], 
    //     ['Norway', 'Sweden', 'Russia']
    // ];

    // for (let i = 0; i < listOfNeighbors.length; i++)
    // for (let y = 0; y < listOfNeighbors[i].length; y++)
    // console.log(`Neighbor: ${listOfNeighbors[i][y]}`);


//While Loop
//Lets compare the While Loop and the For Loop by using the old weightlifting exercise


// for(let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// };

//We can still use the same 3 components
//A counter value
//A condition
//An increment
//However, in the while loop we can only specify the condition.
//Hence the name -> While this condition is TRUE, the loop will keep running
//Now we need to manually (more explicitly) define the other two components of the For Loop
// let rep = 1;//counter value
// while (rep <=10) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
//     rep++;//increment
// }

//The While Loop is more versatile than the For Loop
//It does *not* really need a counter (let rep = 1;)


//Here's an example of a While Loop that doesn't need a counter
//The Dice example
//We will "roll" the dice until we get a 6

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;//If this isn't added, you will get an infinite loop. You are assigning the new value to dice. 
//     if (dice === 6) console.log(`Loop is about to end...`);
// }

    /*
    LECTURE: The while Loop
    1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
    but this time using a while loop (call the array 'percentages3')
    2. Reflect on what solution you like better for this task: the for loop or the while
    loop?
    */

    // const populations = [1300, 330, 83, 5];
    // const percentages2 = [];
    // const percentages3 = [];

    // for(let i = 0; i < populations.length; i++) {
    //     percentages2[i] = populations[i] / 7900 * 100;
    // };
    // //from earlier
    // function percentageOfWorld1 (population) {
    //     const country = population / 7900 * 100; // population / 7.9 billion * 100
    //     return country;
    // }
    // const percentages = [
    //     percentageOfWorld1(populations[0]),
    //     percentageOfWorld1(populations[1]),
    //     percentageOfWorld1(populations[2]),
    //     percentageOfWorld1(populations[3])
    // ];
    // //.end from earlier

    // console.log (percentages);//4) [16.455696202531644, 4.177215189873418, 1.0506329113924051, 0.06329113924050633]

    // console.log(percentages2);//Same as percentages - correct and easier

    // let i = 0;
    // while(i < populations.length) {
    //     percentages3[i] = populations[i] / 7900 * 100;
    //     i++;
    // };

    // console.log(percentages3);//Same as percentages and percentages2 - for loop is probably better here


    /*
    Coding Challenge #4
    Let's improve Steven's tip calculator even more, this time using loops!
    Your tasks:
    1. Create an array 'bills' containing all 10 test bill values
    2. Create empty arrays for the tips and the totals ('tips' and 'totals')
    3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

    Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

    Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays �

    Bonus:
    4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array
    GOOD LUCK �
    */

    // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    // const tips = [];
    // const totals = [];

    // for(let i = 0; i < bills.length; i++) {
    //     if (bills >= 50 && bills <= 300) {
    //         tips[i] = (bills[i] * 0.15);
    //     } else {
    //         tips[i] = (bills[i] * 0.2);
    //     }

    //     totals[i] = bills[i] + tips[i];
    // }
    // console.log(bills);//(10) [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
    // console.log(tips);//(10) [4.4, 59, 35.2, 88, 7.4, 21, 2, 220, 17.2, 10.4]
    // console.log(totals);//(10) [26.4, 354, 211.2, 528, 44.4, 126, 12, 1320, 103.2, 62.4]


    //I didn't do the bonus challenge, don't have the time.
