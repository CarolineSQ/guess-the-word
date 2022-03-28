//List of the letters that have already been guessed Element
const guessedLettersElement = document.querySelector(".guessed-letters");
//Guess button Element
const guessButton = document.querySelector (".guess");
console.log(guessButton);
//text input of a letter Element by user
const letterInput = document.querySelector (".letter");
console.log(letterInput);
//word in progress element
const wordIP = document.querySelector (".word-in-progress");
//remaining guesses
const remaining = document.querySelector ("remaining");
//number of guesses number
const remainingNum = document.querySelector ("span");
console.log(remainingNum);
// message after guess
const message = document.querySelector (".message");
//Play again button
const paButton = document.querySelector (".play-again");
console.log(paButton);
console.log(wordIP);
//starting word
const word = "magnolia";
//all the letters that the player guesses
const guessedLetters = [];

//Function to add placeholders

const placeholder = function (){
  // 1 -creating an array of characters made of the letters of const word
//console.log(word.split(""));
  const wordLetters = word.split("");
  console.log(wordLetters);
  //2 - function to swap a circle symbol for each letter in the array
  const symbolArray = wordLetters.map(function (item){
    return item = "●";
  });
  //3 - adding circle symbol to paragrah
wordIP.innerText = symbolArray.join("");
};
placeholder (word);
//console.log(symbolArray);


//Add an event listener for the Button
guessButton.addEventListener("click",function(e){
  e.preventDefault();
  //empty the value of the message element
  message.innerText = "";
  //record what has been typed in box
  const guess = letterInput.value;

 //console.log(guess);
 //adding step2
const validInput = checkInput(guess);
//console.log(validInput);
//adding step3
if (validInput)  {// it's a letter not a number &*etc
  makeGuess(guess);
}
//empty the value of the input ready for the next guess
letterInput.value = "";
});


//STEP 2 - validate player input
const checkInput = function (input){
  const acceptedLetter = /[a-zA-Z]/;
  if(input.length === 0) {
    message.innerText = "You need to guess a letter!";
  }  else if (input.length > 1) {
    message.innerText = "Only one letter is needed!";
  } else if (!input.match (acceptedLetter)) {
    message.innerText = "Please only use letters";
  }
  else {
    return input;
  }
};
//step 3 function to capture input
const makeGuess = function (guess){
  guess = guess.toUpperCase();
  if (guessedLetters.includes (guess)) {
    message.innerText = "You've already tried that letter, please try again";
  } else {
    guessedLetters.push(guess);
  
console.log(guessedLetters);
  }
};







