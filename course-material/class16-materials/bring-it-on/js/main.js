// *Variables*
// Create a variable and console log the value
let name = "Brooke";
console.log(name);

// Create a variable, add 10 to it, and alert the value
let age = 25 + 10;
alert(age);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractNumbers(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

// Create a function that divides one number by another and returns the remainder
function getModulus(num1, num2) {
  return num1 % num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNumbers(num1, num2) {
  if((num1 + num2) > 50) {
    alert("Jumanji");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyNums(num1, num2, num3) {
  let total = num1 * num2 * num3;

  if(total%3 === 0) {
    alert("ZEBRA");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function yellWord(word, number) {
  for(let i = 0; i < number; i++) {
    console.log(word);
  }
}
