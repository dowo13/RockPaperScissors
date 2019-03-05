





//Rock Paper Scissors Game 

/* commented out for use later 
let computerSelection1 =  ["rock", "paper", "scissors"];
const playerSelection = "rock";



function computerPlay (computerSelection) {
    
return computerSelection1[Math.floor(Math.random() * computerSelection1.length)]



}
/*
console.log(computerPlay(computerSelection));
*/
const playerSelection = "rock";
let computerSelection = ["rock", "paper", "scissors"];

function playRound (playerSelection, computerSelection){

   playerSelection;
computerSelection = Math.floor(Math.random() * computerSelection.length);

if (computerSelection == [0]){

   computerSelection = "rock";

return "Computer chooses Rock - Draw, play again ?";

} else if (computerSelection
   == [1]){

      computerSelection = "Paper";

      return "Computer chooses Paper, Computer  Wins, Bad luck";
   }
   else {

      computerSelection =  "scissors";

      return "You win!!! Computer chooses Scissors";
   };

};
console.log("Player always chooses " + playerSelection);
console.log(playRound(playerSelection, computerSelection));




