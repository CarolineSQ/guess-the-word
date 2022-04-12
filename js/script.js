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
const remaining = document.querySelector (".remaining");
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
let word = "magnolia";
//all the letters that the player guesses
let guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function(){
  const res = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
  const words = await res.text();
  //console.log (words);
  const wordArray = words.split("\n");
  //console.log(wordArray);
  // Get a random word from the array
  const randomIndex = Math.floor(Math.random() * wordArray.length);
 word = wordArray[randomIndex].trim();
 //console.log(randomIndex);  
 placeholder(word);
};
//start game
getWord();
//Function to add placeholders

const placeholder = function (word){

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
//step 3 function to capture input - BIG ONE with lots of passing functions
const makeGuess = function (guess){
  guess = guess.toUpperCase();
  if (guessedLetters.includes (guess)) {
    message.innerText = "You've already tried that letter, please try again";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showguessedLetters();
    countGuesses(guess);
    updateWIP(guessedLetters);


  }
};

//step 4 function to show the Guessed letters

const showguessedLetters = function (){
  //empty list
  guessedLettersElement.innerHTML = "";
    const listItem = document.createElement("li");
    listItem.innerText = guessedLetters.join(" ");
    guessedLettersElement.append(listItem);
  };


//create a function to update the word in progress

const updateWIP = function (guessedLetters) {
  //change word to uppercase
const wordUpper = word.toUpperCase();
//change wordUpper to an array
const wordArray = wordUpper.split(""); 
//console.log(wordArray);
const updatedChar = [];
  for (const letter of wordArray) {
    if(guessedLetters.includes(letter)) {
     updatedChar.push(letter.toUpperCase());
    }else {
      updatedChar.push("●");
    }
    
  }
  console.log(updatedChar);
  wordIP.innerText = updatedChar.join("");
  checkWin();
};

//function to count Guesses remaining

const countGuesses = function (guess){
  const wordUpper = word.toUpperCase();

    if (!wordUpper.includes(guess)){
    message.innerText = `Sorry, the word does not have the letter ${guess}.`;
remainingGuesses-= 1;
} else {
  message.innerText = `Good guess! The word has the letter ${guess}.`;
  }
if (remainingGuesses === 0) {
  message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
  startOver();
} else if (remainingGuesses === 1) {
  remainingNum.innerText = "only 1 guess";
} else { remainingNum.innerText = `${remainingGuesses} guesses`;
}

};

//function to check if the player has won
const checkWin = function (){
  if (wordIP.innerText === word.toUpperCase()){
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    startOver();
  }
};
//function to hide guessButton, list of remaining guesses, guessed letters
const startOver = function() {
  guessButton.classList.add("hide");
  remaining.classList.add("hide");
  guessedLettersElement.classList.add("hide");
  paButton.classList.remove("hide");
};

paButton.addEventListener("click",function(){
//reset all original values - grab new word  
message.classList.remove("win");
guessedLetters = [];
remainingGuesses = 8;
remainingNum.innerText = `${remainingGuesses} guesses`;
guessedLettersElement.innerHTML = "";
message.innerText = "";

getWord();

//show the right UI elements

guessButton.classList.remove("hide");
remaining.classList.remove("hide");
guessedLettersElement.classList.remove("hide");
paButton.classList.add("hide");
});
