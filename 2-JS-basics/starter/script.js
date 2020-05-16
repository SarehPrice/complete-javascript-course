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
let firstName = 'John';
let age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

let job = "instructor";
switch (job) {
	case 'teacher':
	case 'instructor':
	console.log(firstName + 'teaches kids how to code.');
	break;
	case 'driver':
	console.log(firstName + 'drives an uber in Libson.');
	break;
	case 'designer':
	console.log(firstName + 'designs beautiful websites.');
	break;
	default:
	console.log(firstName + ' does something else.');
}

age = 10;
switch (true) {
	case age < 13:
	console.log(firstName + 'is a boy.');
	break;
	case age >= 13 && age < 20:
	console.log(firstName + ' is a teenager.');
	break;
	case age >= 20 && age < 30:
	console.log(firstName + ' is a young man.');
	break;
	default:
	console.log(firstName + ' is a man.');
}

