/*var firstName = 'Sarah';
console.log(firstName);

var lastName = 'Price';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

var _3years = 3;
var sarahJeanne = 'Sarah Jeanne';
//single comment
/*
So many lined comments can be put here to make jokes or to call out your coworkers.
*/

/*
Variable mutation and type coercion
*/
/*
var firstName = 'Sarah';
var age = 28;

console.log(firstName + '' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

alert(firstName + 'is a' + age + 'year old' + job + 'Is she married?' + isMarried);

age = 'twenty eight';
job = 'driver';

var lastName = prompt('What is her last Name?');
console.log(firstName + '' + lastName);
*/

//basic operators
/*var year, yearLeo, yearMark;
now = 2018;
yearLeo = now - ageLeo;
yearMark = now - ageMark;

console.log(yearLeo);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var leoOlder = ageLeo > ageMark;
console.log(leoOlder);

console.log(typeof leoOlder);
console.log(typeof ageLeo);
console.log(typeof 'Mark is older than Leo');
var x;
console.log(typeof x);

var now = 2018;
var yearLeo = 1993;
var fullAge = 26;

var isFullAge = now - yearLeo >= fullAge; */

/* var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)')
}

var isMarried = true;
if (isMarried === true){
  console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)')
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massMark / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log('Mark\ BMI is higher than John\'s.');
} else {
console.log('John\ BMI is higher than Mark\'s.');
} */

//Boolean Logic

/* let firstName = 'John';
let age = 20;

if (age < 13) {
	console.log(firstName + 'is a boy.');
} else if (age >= 13 && age < 20) {
 	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
} */

//The Ternary Operator and Switch Statements
// Ternay
// let firstName = 'John';
// let age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// let job = "instructor";
// switch (job) {
// 	case 'teacher':
// 	case 'instructor':
// 	console.log(firstName + 'teaches kids how to code.');
// 	break;
// 	case 'driver':
// 	console.log(firstName + 'drives an uber in Libson.');
// 	break;
// 	case 'designer':
// 	console.log(firstName + 'designs beautiful websites.');
// 	break;
// 	default:
// 	console.log(firstName + ' does something else.');
// }

// age = 10;
// switch (true) {
// 	case age < 13:
// 	console.log(firstName + 'is a boy.');
// 	break;
// 	case age >= 13 && age < 20:
// 	console.log(firstName + ' is a teenager.');
// 	break;
// 	case age >= 20 && age < 30:
// 	console.log(firstName + ' is a young man.');
// 	break;
// 	default:
// 	console.log(firstName + ' is a man.');
// }

//Truthy and Falsey ; (falsey) undefined, null, 0, '', Nan
// var height;

// height = 0;

// if (height || height === 0) {
// 	console.log('Variable is defined');
// } else {
// 	console.log('Varible has NOT been defined');
// }

// //Equality Operators
// if (height === '23') {
// 	console.log('The == operator does type coerction!');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var scoreJohn = (110 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// console.log(scoreJohn, scoreMike);

// if (scoreJohn > scoreMike) {
// 	console.log('John wins! with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
// 	console.log('Mike wins with ' + scoreMike + ' points');
// } else {
// 	console.log('There is a draw');
// }

//Functions

function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJeremy = calculateAge(1990);
console.log(ageJeremy);



