





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
//regexp = /rock paper scissors/gi; // with flags g,m and i (to be covered soon)


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

console.log(playRound(computerSelection, playerSelection));




