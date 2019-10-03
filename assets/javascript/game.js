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
      unknownAnswer[i] = "_";


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
      guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
      alert(guessLetter);
      console.log(guessLetter);


        //checking to see if alphabet selected(pressed) is contained in randomly chosen Cartoon
   // https://github.com/the-realest-stu/Hangman-Game/blob/master/assets/javascript/game.js

      for (let j = 0; j < randomCartoon.length; j++) {
         if (randomCartoon[j] === guessLetter) {
            isInWord = true;
             unknownAnswer[j] = guessLetter ;
   console.log(isInWord);
            alert(unknownAnswer);
         }
         else{console.log("im ignoring the if statement");}
      }
      
      //checking to see if isInWord is true or false. if false ++
      if(randomCartoon !=guessLetter) {
         isInWord=false;
      incorrectGuess++
      console.log("number of incorrect guesses: " + incorrectGuess);
   }
   }


 


   
}



