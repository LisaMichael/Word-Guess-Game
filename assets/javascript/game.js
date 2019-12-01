// creating my pseudo code aka love notes to myself

// create variables i'm going to use in the game. 

let wins = 0; //win-counter
let guessLetter = 0;
let wrongGuess = 5;
let randomCartoon = "";


//boolean to check if pressed letter is in word
let isInWord = false;

//incorrectly guessed letters  
var wrongLetter = [];

// cartoon variables should be stored in an array 
let cartoon = ["FLINTSTONES", "JETSONS", "FROZEN", "GARFIELD", "BAMBI", "UNDERDOG", "POPEYE"];


// lettersInWord = number of characters in the word
let lettersInWord = 0;

// reset button 

function reset() {
   alert("i hit the reset button");

    guessLetter = 0;
    wrongGuess = 5;
   randomCartoon = "";

   //boolean to check if pressed letter is in word
   isInWord = false;

   //incorrectly guessed letters  
   wrongLetter = [];

   lettersInWord = 0;
   unknownAnswer = [];

   // reset back default image in corner 

   let defaultImage = "<img src = ./assets/images/satcartoons.jpg>";
   document.querySelector('#imageHere').innerHTML = defaultImage ;


   // img.src = "";
   // var img = document.createElement("img");
   // img.src = "./assets/images/satcartoons.jpg";
   // var src = document.getElementById("imageHere");

   // src.appendChild(img);
   // localStorage


   // +++++++++++++++++++
   //++++++++++++++++++++ Display word to be guessed (dashes) in HTML
   //++++++++++++++++++++

   //select a random cartoon name from array 
   // randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
   // console.log(randomCartoon);
   // alert(randomCartoon);


   // random cartoon/ unguessed word will display in dashes
   // for (let i = 0; i < randomCartoon.length; i++) {

   // elements.join(''); to remove the quotation marks
   // unknownAnswer[i] = "_";

   // }
   // let html1 = "<p> " + unknownAnswer.join(' ') + "</p>";
   // console.log(html1);
   // document.querySelector('#word-array').innerHTML = html1;

   // printing to console and alert for testing
   // console.log(unknownAnswer.join(' '));


}


//press any key to get gamestarted

document.onkeyup = function () {

   //select a random cartoon 

   randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
   console.log(randomCartoon);
   alert(randomCartoon);


   // random cartoon/ unguessed word will display in dashes
   let unknownAnswer = [];
   for (let i = 0; i < randomCartoon.length; i++) {

      // elements.join(''); to remove the quotation marks
      unknownAnswer[i] = "_";

      // +++++++++++++++++++
      //++++++++++++++++++++ Display word to be guessed (dashes) in HTML
      //++++++++++++++++++++

      let html1 = "<p> " + unknownAnswer.join(' ') + "</p>";
      // console.log(html1);
      document.querySelector('#word-array').innerHTML = html1;

      //printing to console and alert for testing
      console.log(unknownAnswer.join(' '));

   }
   alert(unknownAnswer.join(' '));




   //this snippet was taken from the car assignment -wk3

   // when key is pressed, on key up, display the string  
   // of whatever is pressed and turn to string and make it uppercase

   document.onkeyup = function (event) {

      // this is the letter i'm guessing 
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
            console.log(unknownAnswer.join(' '));
            lettersInWord++;

            // +++++++++++++++++++
            //++++++++++++++++++++ Display word to be guessed (dashes) in HTML
            //++++++++++++++++++++

            let html1 = "<p> " + unknownAnswer.join(' ') + "</p>";
            document.querySelector('#word-array').innerHTML = html1;
            console.log("i pressed the correct letter in for loop");
         }

      }
      console.log("line 115 " + isInWord + wrongGuess);

      // ************************************
      // ************************************
      // ************************************
      //array of incorrect guessed letters
      // array code not here yet 



      // if the letter is incorrect, decrement the number of guesses left
      if (!isInWord) {
         console.log("this is wrong guess now " + wrongGuess);
         wrongGuess--;
         alert(wrongGuess + " of wrong guesses");
         console.log(wrongGuess + " of wrong guesses");
         let incorrectGuess = "<p> Guesses Left: " + wrongGuess + "</p>";
         document.querySelector('#remaining-guesses').innerHTML = incorrectGuess;
         console.log("used when incorrect letter pressed");

         // I NEED TO CREATE AN ARRAY THAT STORES THE LETTERS I HAVE GUESSED
         // I CAN USE THE PUSH COMMAND TO APPEND TO THE ARRAY
         wrongLetter.push(guessLetter);
         console.log("wrong letter line 140 " + wrongLetter);
         let badLtr = "<p>" + wrongLetter + "</p>"
         document.querySelector('#guessedLtrs').innerHTML = badLtr;

      }

      // correct letter was pressed 
      else {
         console.log("used when CORRECT letter is pressed");
         let correctGuess = true;
         console.log("line 133 and isinwrd tru but CHANGING to false")

         // now change it back to false (which is the default value, and we can start all over)
         isInWord = false;
      }

      //console log for testing
      console.log("line 140 " + isInWord);


      // if the # of correct characters in the my guesses equals the length of the word
      // means that i have guessed the word 
      if (lettersInWord === (unknownAnswer.length)) {
         wins++;
         console.log('wins ', wins)

         // +++++++++++++++++++++
         // ++++++++++++++++++++     ADD WIN++ COUNTER TO HTML


         let html = "<p> wins: " + wins + "</p>";
         document.querySelector('#win-counter').innerHTML = html;


         // display image on left hand panel for win
         let imagewin = "<p> WiNs: " + wins + "</p>";
         document.querySelector('#guessed-image').innerHTML = imagewin;

         // console log for testing
         console.log(randomCartoon, "line 179");

         // switch statement to display the correct image based upon random word guessed
         switch (randomCartoon) {
            case cartoon[0]:
               console.log(cartoon[0]);
               // add winning image for flintstones
               var img = document.createElement("img");
               img.src = "./assets/images/flintstones.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;

               break;

            case cartoon[1]:
               var img = document.createElement("img");
               img.src = "./assets/images/jetsons.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;

               break;

            case cartoon[2]:
               console.log(cartoon[2]);
               var img = document.createElement("img");
               img.src = "./assets/images/frozen.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;
               break;

            case cartoon[3]:
               console.log(cartoon[3]);

               var img = document.createElement("img");
               img.src = "./assets/images/garfield.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;
               break;

            case cartoon[4]:
               //display correct iamge for bambi
               var img = document.createElement("img");
               img.src = "./assets/images/bambi.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;
               break;

            case cartoon[5]:
               //display correct image for underdog 
               var img = document.createElement("img");
               img.src = "./assets/images/underdog.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;
               break;

            case cartoon[6]:

               var img = document.createElement("img");
               img.src = "./assets/images/popeye.jpg";
               var src = document.getElementById("imageHere");
               src.appendChild(img);
               document.getElementById("clearFields").disabled = false;
               break;
         }


         // reset();
      }


      // if you exhausted all your guesses, you lost the game
      if (wrongGuess < 1) {
         alert("YOU LOSE !!!");
         document.querySelector("clearFields").onclick = reset();
      }


   }


   // code so when you click on the button,it resets your settings


   // ***********************************************
   // ***********************************************
   // ***********************************************


   // IF THE SIZE OF THE ARRAY IS GREATER THAN 14, GAME OVER 


   // ***********************************************
   // ***********************************************
   // ***********************************************
   // I NEED TO CREATE CODE TO DETERMINE IF LETTER WAS ALREADY SELECTED




}

document.querySelector('clearfields')




