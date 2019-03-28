





//Rock Paper Scissors Game 

/* commented out for use later 
let computerSelection1 =  ["rock", "paper", "scissors"];
const playerSelection = "rock";



function computerPlay (computerSelection1) {
    
return computerSelection1[Math.floor(Math.random() * computerSelection1.length)]



}
/*
console.log(computerPlay(computerSelection));
*/

//let playerSelection = ["Rock", "Paper", "Scissors"];
//let computerSelection = ["Rock", "Paper", "Scissors"];
//let reg = /(rock) (paper) (scissors)/gi;




/*function computerPlay (computerSelection1) {
    
   return computerSelection1[Math.floor(Math.random() * computerSelection1.length)]
   }
   
   console.log(computerPlay(computerSelection));
   */
   //let playerSelection = ["Rock", "Paper", "Scissors"];
   let playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();
   let computerSelection = ["Rock", "Paper", "Scissors"];
   let computerWins= 0;
   let playerWins = 0;
   let tied = 0;
   

   function playRound (computerSelection , playerSelection){
      
    computerSelection = Math.floor(Math.random() * computerSelection.length);
   
     if (computerSelection == [0]){
   
      computerSelection = "rock";
      
   } else if (computerSelection == [1]){
   
         computerSelection = "paper";
         
   }  else if (computerSelection == [2]){

            computerSelection = "scissors";
   }
   
         if (computerSelection == playerSelection) {
   
            tied++

            return "Game drawn, play again?";
   
   } else if (computerSelection == "rock" && playerSelection == "paper"){

         playerWins++

         return "You win - Paper beats Rock";
         
   
      }else if (computerSelection == "scissors" && playerSelection == "paper"){

        computerWins++

          return "You lose, Scissors beats paper";
      }
   
   
   if (computerSelection == "paper" && playerSelection == "scissors") {
   
       playerWins++

       return "You win, Scissors beats Paper";
   
   
      } else if (computerSelection == playerSelection){
          
         tied++

         return "Game drawn, play again?";
      }
   
   
   if (computerSelection == "scissors" && playerSelection == "rock") {

       playerWins++

      return "You win, Rock beats Scissors";

      } else if (computerSelection == playerSelection) {
          
         tied++
        return "Game drawn, play again?";
      }

      if (computerSelection == "rock" && playerSelection == "scissors"){

        computerWins++
         
          return "You lose, Rock beats Scissors";
      
      } else if (computerSelection  == playerSelection){

         tied++

         return "Game drawn, play again?";
      }


      if (computerSelection == "paper" && playerSelection == "rock"){

         computerWins++

         return "You lose - Paper beats Rock";
      }
      
   };
   

   function score1(){ 
      
        for (i=0; i<4;i++){
            
         playRound(computerSelection, playerSelection);
         playerSelection = prompt("Do you choose rock, paper or scissors?");
         computerSelection = ["Rock", "Paper", "Scissors"];
         
      }
      
      playerWins 
      computerWins  
      tied  

      document.write("player has " + playerWins + " wins<br>");
      document.write("computer has " + computerWins + " wins<br>" );
      document.write("Games tied " + tied + "<br>");
      
   };
     /*if (computerWins > playerWins){

      document.write("computer has " + computerWins + " wins and is the winner");

     }else if (computerWins < playerWins){

      document.write("player has " + playerWins + " wins and is the winner");

   } else if (computerWins == playerWins) {

      document.write("Game tied");
   }*/

//playRound(computerSelection, playerSelection);
//score1();
   
   function game (){

    playRound (computerSelection , playerSelection);
   score1();
};
game();

