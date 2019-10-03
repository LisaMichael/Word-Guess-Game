// creating my pseudo code aka love notes to myself

// create variables i'm going to use in the game. 

let wins = 0;
let guessLetter = 0;

// let incorrectGuess = 0;
let incorrectGuess = 0;

//boolean to check if pressed letter is in work
var isInWord = false;

// letters user can choose from
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// cartoon variables should be stored in an array 
let cartoon = ["flintstones", "jetsons", "frozen", "garfield", "bambi", "underdog", "Popeye"];

//press any key to get started

document.onkeyup = function () {
   //using alert window as test
   alert("key was pressed. Game good to go");
   console.log("this is test text");

   //select a random cartoon 

   let randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
   console.log(randomCartoon);
   alert(randomCartoon);

   // rnadom cartoon/ unguessed word will display in dashes

   let unknownAnswer = [];
   for (let i = 0; i < randomCartoon.length; i++) {
      unknownAnswer[i] = "_ ";


      // console.log(unknownAnswer.join(' '));

   }
   // elements.join(''); to remove the quotation marks
   console.log(unknownAnswer.join(' '));
   alert(unknownAnswer.join(' '));

   //array of incorrect guessed letters
   // array code here 


   //this snippet was taken from the car assignment 

   // when key is pressed, on key up, display the string  
   // of whatever is pressed and turn to string and make it lowercase

   document.onkeyup = function (event) {
      let letter = String.fromCharCode(event.keyCode).toLowerCase();
      alert(letter);
   }


   //checking to see if alphabet selected is in randomly chosen Cartoon
   // https://github.com/the-realest-stu/Hangman-Game/blob/master/assets/javascript/game.js



   for (let i = 0; i < randomCartoon.length; i++) {
      if (unknownAnswer.charAt(i) === letter) {
         isInWord = true;

         alert(unknownAnswer);
      }
   }
}



