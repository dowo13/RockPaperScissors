





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
let playerSelection = ["Rock", "Paper", "Scissors"];
let computerSelection = ["Rock", "Paper", "Scissors"];
let reg = /(rock) (paper) (scissors)/gi;


function playRound (computerSelection , playerSelection){

 playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();
 
 computerSelection = Math.floor(Math.random() * computerSelection.length);


  if (computerSelection == [0]){

   computerSelection = "rock";
   
} else if (computerSelection == [1]){

      computerSelection = "paper";
      
}  else {

         computerSelection =  "scissors";
      };

      if (computerSelection == playerSelection) {

         return  "Game drawn, play again?";

} else if (computerSelection == "rock"){
   if (playerSelection == "paper"){

      return "You win - Paper beats Rock";

   }else {
      return "You lose, Scissors beats paper";
   }
}

if (computerSelection == "paper") {

   if (playerSelection == "scissors") {

return "You win, Scissors beats Paper";

   } else {
       
      return "Game drawn, play again?";
   }
} 

if (computerSelection == "scissors") {
   
   if (playerSelection == "rock") {

      return "You win, Rock beats Scissors";
   } else {
       
      return "Game drawn, play again?";
   }
}
     

      


   

};

document.write(playRound(computerSelection, playerSelection));




