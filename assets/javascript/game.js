// creating my pseudo code aka love notes to myself

// create variables i'm going to use in the game. 

let wins = 0;
let guessLetter = 0;
let incorrectGuess = 0;

//boolean to check if pressed letter is in word
var isInWord = false;

// letters user can choose from
//remming out because it seems i don't need it. leaving in comments, just in case
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// cartoon variables should be stored in an array 
let cartoon = ["FLINTSTONES", "JETSONS", "FROZEN", "GARFIELD", "BAMBI", "UNDERDOG", "POPEYE"];

// lettersInWord = number of characters in the word
let lettersInWord = 0;

//press any key to get gamestarted

document.onkeyup = function () {
   //using alert window as test
   alert("key was pressed. Game good to go");
   console.log("this is test text");

   //select a random cartoon 

   let randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
   console.log(randomCartoon);
   alert(randomCartoon);

   // random cartoon/ unguessed word will display in dashes
   let unknownAnswer = [];
   for (let i = 0; i < randomCartoon.length; i++) {
      unknownAnswer[i] = "_";
   }

   // elements.join(''); to remove the quotation marks

   //printing to console and alert for testing
   console.log(unknownAnswer.join(' '));
   alert(unknownAnswer.join(' '));


   // ************************************
    // ************************************
     // ************************************
   //array of incorrect guessed letters
   // array code here 


   //this snippet was taken from the car assignment -wk3

   // when key is pressed, on key up, display the string  
   // of whatever is pressed and turn to string and make it lowercase


   document.onkeyup = function (event) {

      //  randomCartoon = String.fromCharCode(event.keyCode).toLowerCase();
      guessLetter = String.fromCharCode(event.keyCode).toUpperCase();
      alert(guessLetter);
      console.log(guessLetter);

      //TRIED A WHILE STATEMENT BUT NOT WORKING
      // while (incorrectGuess < 15){


      //checking to see if alphabet selected(pressed) is contained in randomly chosen Cartoon
      // https://github.com/the-realest-stu/Hangman-Game/blob/master/assets/javascript/game.js

      for (let j = 0; j < randomCartoon.length; j++) {
         if (randomCartoon[j] === guessLetter) {
           
            unknownAnswer[j] = guessLetter;
            isInWord = true;
            lettersInWord++
            console.log(isInWord);
            console.log(unknownAnswer.join(' '));
         }
         
         }
        
       //  ++++++++++++++

      if(!isInWord) {
         incorrectGuess++;
         alert(incorrectGuess + " of wrong guesses");
         console.log(incorrectGuess + " of wrong guesses");
      }
// if the # of correct characters in the my guesses equals the length of the word
// means that i have guessed the word 
      if (lettersInWord === (unknownAnswer.length)){
         wins++;
         console.log('wins ', wins)
      }

      // ***********************************************
      // ***********************************************
      // ***********************************************

      // I NEED TO CREATE AN ARRAY THAT STORES THE LETTERS I HAVE GUESSED
      // I CAN USE THE POP COMMAND TO APPEND TO THE ARRAY
      // IF THE SIZE OF THE ARRAY IS GREATER THAN 14, GAME OVER 


      // ***********************************************
      // ***********************************************
      // ***********************************************
      // I NEED TO CREATE CODE TO DETERMINE IF LETTER WAS ALREADY SELECTED


// ***********************************************
// ***********************************************
// ***********************************************
// I NEED TO CREATE CODE TO DETERMINE 

      //checking to see if isInWord is true or false. if false ++
      // THIS NEEDS WORK
      // if (randomCartoon != guessLetter) {
      //    isInWord = false;
      //    incorrectGuess++
      //    console.log("number of incorrect guesses: " + incorrectGuess);
      // }

   }


}

