// creating my pseudo code aka love notes to myself

// create variables i'm going to use in the game. 

let wins = 0; //win-counter
let guessLetter = 0;
let wrongGuess = 15;


//boolean to check if pressed letter is in word
let isInWord = false;

// letters user can choose from
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// cartoon variables should be stored in an array 
let cartoon = ["FLINTSTONES", "JETSONS", "FROZEN", "GARFIELD", "BAMBI", "UNDERDOG", "POPEYE"];

// testing with 1 array element 
// let cartoon = ["BAMBI"];

// lettersInWord = number of characters in the word
let lettersInWord = 0;

// reset button 

function reset() {

   guessLetter = 0;
   wrongGuess = 15;
   unknownAnswer = [];
   randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
   //boolean to check if pressed letter is in word
   isInWord = false;
   return;
}

//press any key to get gamestarted

document.onkeyup = function () {
   //using alert and console.log as test
   // alert("key was pressed. Game good to go");
   // console.log("this is test text");

   //select a random cartoon 

   let randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
   console.log(randomCartoon);
   alert(randomCartoon);


   // random cartoon/ unguessed word will display in dashes
   let unknownAnswer = [];
   for (let i = 0; i < randomCartoon.length; i++) {

      // elements.join(''); to remove the quotation marks
      unknownAnswer[i] = "_";
   }

   // +++++++++++++++++++
   //++++++++++++++++++++ Display word to be guessed (dashes) in HTML
   //++++++++++++++++++++

   let html1 = "<p> " + unknownAnswer.join(' ') + "</p>";
   console.log(html1);
   document.querySelector('#word-array').innerHTML = html1;

   //printing to console and alert for testing
   console.log(unknownAnswer.join(' '));
   alert(unknownAnswer.join(' '));
   console.log(unknownAnswer);





   //this snippet was taken from the car assignment -wk3

   // when key is pressed, on key up, display the string  
   // of whatever is pressed and turn to string and make it uppercase


   document.onkeyup = function (event) {


      //  randomCartoon = String.fromCharCode(event.keyCode).toLowerCase();
      guessLetter = String.fromCharCode(event.keyCode).toUpperCase();
      alert(guessLetter);
      console.log(guessLetter);


      //check to see if alphabet selected(pressed) is contained in randomly chosen Cartoon
      // https://github.com/the-realest-stu/Hangman-Game/blob/master/assets/javascript/game.js


      for (let j = 0; j < randomCartoon.length; j++) {
         if (randomCartoon[j] === guessLetter) {

            unknownAnswer[j] = guessLetter;
            isInWord = true;
            console.log(isInWord);
            console.log(unknownAnswer.join(' '));
            lettersInWord++;

            // +++++++++++++++++++
            //++++++++++++++++++++ Display word to be guessed (dashes) in HTML
            //++++++++++++++++++++

            let html1 = "<p> " + unknownAnswer.join(' ') + "</p>";
            document.querySelector('#word-array').innerHTML = html1;
            console.log("i pressed the correct letter");
         }

      }
console.log("line 115 " + isInWord)

       // ************************************
      // ************************************
      // ************************************
      //array of incorrect guessed letters
      // array code not here yet 




      //  ++++++++++++++ 
      // +++++++++++++++ if letter is not in guess word, add to incorrect guesses counter
      //++++++++++++++++

      //THIS IS NOT BEING RECOGNIZED
      if (!isInWord) {
         console.log("line 132")
         wrongGuess--;
         alert(wrongGuess + " of wrong guesses");
         console.log(wrongGuess + " of wrong guesses");
         let incorrectGuess = "<p> Guesses Left: " + wrongGuess + "</p>";
         document.querySelector('#remaining-guesses').innerHTML = incorrectGuess;
         console.log("used when incorrect letter pressed");
      }
      else {
         console.log("used when CORRECT letter is pressed");
         let correctGuess = true;
         console.log("line 133 and isinwrd tru but CHANGING to false")

         // now change it back to false
         isInWord = false;
      }
      

      // if the # of correct characters in the my guesses equals the length of the word
      // means that i have guessed the word 
      if (lettersInWord === (unknownAnswer.length)) {
         wins++;
         console.log('wins ', wins)

         // +++++++++++++++++++++
         // ++++++++++++++++++++     ADD WIN++ COUNTER TO HTML
         // ++++++++++++++++++++

         let html = "<p> wins: " + wins + "</p>";
         document.querySelector('#win-counter').innerHTML = html;

         // display image on left hand panel for win

         // if (unknownAnswer = cartoon[0]) {
         let imagewin = "<p> wins: " + wins + "</p>";
         document.querySelector('#guessed-image').innerHTML = imagewin;

         reset();
      }
      if(wrongGuess=0){
         alert("YOU LOSE !!!");
         reset();
      }




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


   

}




