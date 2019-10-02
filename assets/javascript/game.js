 // creating my pseudo code aka love notes to myself

    // create variables i'm going to use in the game. 
    
    let wins = 0;
    let guessLetter = 0;
// let incorrectGuess = 0;
   
    // cartoon variables should be stored in an array 
    let cartoon = ["flintstones", "jetsons" ,"frozen", "garfield", "bambi", "underdog"];

    //press any key to get started

    document.onkeyup = function() {
       //using alert window as test
      alert("key was pressed. Game good to go");
      console.log("this is test text");

      //select a random cartoon 

      let randomCartoon = cartoon[Math.floor(Math.random() * cartoon.length)];
      console.log(randomCartoon);
      alert(randomCartoon);

      // rnadom cartoon/ unguessed word will display in dashes

      let unknownAnswer = []; 
      for (let i=0; i < randomCartoon.length; i++) {
       unknownAnswer[i] = "_ ";
         // addDashToArray = "_ " ;

         console.log(unknownAnswer);
         // console.log(unknownAnswer.join(''));
      } 
      // elements.join('');
       console.log(unknownAnswer);
       alert(unknownAnswer);

    //array of incorrect guessed letters

   
   }

   
 
    