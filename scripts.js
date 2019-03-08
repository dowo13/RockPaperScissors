





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

 playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
 
 computerSelection = Math.floor(Math.random() * computerSelection.length);


  if (computerSelection == [0]){

   computerSelection = "Rock";
   
} else if (computerSelection == [1]){

      computerSelection = "Paper";
      
}  else {

         computerSelection =  "Scissors";
      };

      if (computerSelection == playerSelection) {

         return  "Game drawn, play again?";

} else if (computerSelection == "Rock"){
   if (playerSelection == "Paper"){

      return "You win - Paper beats Rock";

   }else {
      return "You lose, Scissors beats paper";
   }
}

if (computerSelection == "Paper") {

   if (playerSelection == "Scissors") {

return "You win, Scissors beats Paper";

   } else {
       
      return "Game drawn, play again?";
   }
} 

if (computerSelection == "Scissors") {
   
   if (playerSelection == "Rock") {

      return "You win, Rock beats Scissors";
   } else {
       
      return "Game drawn, play again?";
   }
}
     

      


   

};

document.write(playRound(computerSelection, playerSelection));




