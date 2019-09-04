var win = 0;
   var loss = 0;
   var tie = 0;
   for(i = 0; i < 3; i++) {
   
   var userChoice = prompt("Please choose rock, paper, or scissors?");
   if (! userChoice) {
       document.write("<p>Player 1, invalid choice try again</p>");
   } else {
       document.write("<p>Player 1:" + " " + userChoice + "</p>");
   }
   var computerChoice = Math.random();
   if (computerChoice < 0.34) {
       computerChoice = "rock";
   } else if(computerChoice <= 0.67) {
       computerChoice = "paper";
   } else {
       computerChoice = "scissors";
   }
   
   document.write("<p>Computer:" + " " + computerChoice + "</p>");
   var compare = function(choice1,choice2) {
       if (choice1 === choice2) {
           tie+=1;
           return "It's a tie!";
       }
       if (choice1 === "rock") {
           if (choice2 === "scissors") {
               win+=1;
               return "You win!";
           } else {
               loss+=1;
               return "You lose! Try again.";
           }
       }
       if (choice1 === "paper") {
           if (choice2 === "rock") {
               win+=1;
               return "You win!";
           } else {
               loss+=1;
               return "You lose! Try again.";
           }
       }
       if (choice1 === "scissors") {
           if (choice2 === "rock") {
               loss+=1;
               return "You lose! Try again.";
           } else {
               win+=1;
               return "You win!";
           }
       }
   };
   var results = compare(userChoice,computerChoice);
   
   document.write("<br><hr><b>Results: </b>" + results);
   
   }
   document.write("<br/>Final Results: W-"+win+"; L-"+loss+"; T-"+tie+";");