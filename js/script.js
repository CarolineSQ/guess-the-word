//List of the letters that have already been guessed Element
const guessedLetters = document.querySelector(".guessed-letters");
//Guess button Element
const guessButton = document.querySelector (".guess");
console.log(guessButton);
//text input of a letter Element by user
const inputLetter = document.querySelector (".letter");
console.log(inputLetter);
//word in progress element
const wordIP = document.querySelector (".word-in-progress");
//remaining guesses
const remaining = document.querySelector ("remaining");
//number of guesses number
const remainingNum = document.querySelector ("span");
console.log(remainingNum);
// message after guess
const message = document.querySelector ("message");
//Play again button
const paButton = document.querySelector (".play-again");
console.log(paButton);
console.log(wordIP);
//starting word
const word = "magnolia"

//Function to add placeholders

// 1 -creating an array of characters made of the letters of const word
//console.log(word.split(""));

const wordLetters = word.split("");
console.log(wordLetters);


//changing letters to circle symbols

//2 - function to add a circle symbol for each letter in the array
const symbolArray = wordLetters.map(function (item){
  return item = "●";
});
console.log(symbolArray);

//3 - adding circle symbol to paragrah
wordIP.innerText = symbolArray.join("");

//Add an event listener for the Button
guessButton.addEventListener("click",function(e){
  e.preventDefault();
  const letter = inputLetter.value;
 console.log(letter);
 inputLetter.value = "";
});

//empty the value of the input
const clearInput = function() {
  inputLetter.value = "";
};