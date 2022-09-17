//------> alert("Echo");



// data types
// let js = "amazing";

// console.log("Today is Friday!");

// let var1 = true;

// console.log(typeof true);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);


// var, let & const -- var (old version) let (changing values) const (fixed values)



// Math Operators in JS
// const now = 2022;
// const ageJonas = now - 1991;
// const ageSarah = now - 1992;
// console.log(ageJonas, ageSarah);


// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 3 to the power 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// Assignment Operators in JS
// let x = 10 + 5; // 15
// x += 10 // x = x + 10 = 25
// x *= 2; // x = x * 4 = 50
// x++; // x = x + 1 = 51
// x--; // x = x - 1 = 50
// x--; // 49
// console.log(x);


// Comparison Operators >, <, >=, <=
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 25);
// console.log(ageSarah <= 25);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1992 > now - 2020);


// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);


// const averageAge = (ageSarah + ageJonas) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// const firstName = 'Arfin';
// const job = 'Student';
// const birthyear = 1991;
// const year = 2050;

// const Arfin = "I'm " + firstName + ', a ' + (year - birthyear) + 'years old' + job + '!';


// Template Literals
// const jonasNew = `I'm ${firstName}`;

// console.log(jonasNew);


/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John

const massMark = 95;
const heightMark = 1.88;
const massJohn = 92;
const heightJohn = 1.79;

const BMIMark = massMark / heightJohn ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/



// --> Conditinal Statement

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young to drive. Wait another ${yearsLeft} years`)
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

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
*/

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 92;
// const heightJohn = 1.79;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark})is higher than John's! (${BMIJohn})`)
// } else {
//     console.log(`John's BMI (${BMIJohsn})is higher than Mark's (${BMIMark})`)
// }


// ----> Type Convertion and Coercion 

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);


// ====================================================

// ---> Prompt & '==' vs '==='

// const favourite = prompt("WHat's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//     console.log('Coo! its an amaizing number')
// }


// const favourite = Number(prompt("WHat's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Coo! its an amaizing number')
// }


// ============= Switch statement ======

const day = 'Monday';

switch (day) {
    case 'Monday': // day === 'monday'
        console.log('Plan for the day');
        console.log('Go to college');
        break;
    case 'Tueday':
        console.log('Prepare for math 225');
        break;
    case 'Wednesday': 
    case 'Thursday':
        console.log('Math 225 quiz');
        break;
    case 'Friday':
        console.log('Take a break');
        break;
    case 'Satureday':
    case 'Sunday':
        console.log('Weekend!');
    default:
        console.log('Not a valid day');
}

