// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberThree = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(numberThree);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const a = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
const anotherNumberThree = a.toFixed(2);
console.log(anotherNumberThree);
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


const avgNum = ((one + two + three)/3).toFixed(5);
console.log(avgNum);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);
console.log(letter);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = capTerm(fact, "j");

function capTerm(phrase, term){
    return phrase.split(term).join(term.toUpperCase());
}

console.log(newFact);

// --------------------------------------