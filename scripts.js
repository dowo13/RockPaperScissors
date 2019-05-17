





//Rock Paper Scissors Game 

/* commented out because this was the code for first part of project
let computerSelection1 =  ["rock", "paper", "scissors"];
const playerSelection = "rock";



function computerPlay (computerSelection1) {
    
return computerSelection1[Math.floor(Math.random() * computerSelection1.length)]



}
/*
console.log(computerPlay(computerSelection));
*/

   let playerSelection;
   let computerSelection = ["rock", "paper", "scissors"];
   let computerWins = 0;
   let playerWins = 0;
   let tied = 0;
   let button = '';

   function playRound (computerSelection , playerSelection){
      
   playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();
     
   computerSelection = ["rock", "paper", "scissors"];

   computerSelection = Math.floor(Math.random() * computerSelection.length);
   
     if (computerSelection == [0]){
   
      computerSelection = "rock";
      
   } else if (computerSelection == [1]){
   
         computerSelection = "paper";
         
   }  else {computerSelection == [2]

            computerSelection = "scissors";
   };
   
         if (computerSelection == playerSelection) {

          tied++

          alert ("Game drawn, play again?");
           
      } else if (computerSelection == "rock" && playerSelection == "paper"){

         playerWins++

         alert ("You win - Paper beats Rock");
         
      } else if (computerSelection == "scissors" && playerSelection == "paper"){

          computerWins++
          
          alert ("You lose, Scissors beats paper");

      }  else if (computerSelection == "paper" && playerSelection == "scissors") {

       playerWins++

       alert ("You win, Scissors beats Paper");
   
      } else if (computerSelection == "scissors" && playerSelection == "rock") {

      playerWins++

      alert ("You win, Rock beats Scissors");

      } else if (computerSelection == "rock" && playerSelection == "scissors"){

          computerWins++;

          alert ("You lose, Rock beats Scissors");
      
      } else if (computerSelection == "paper" && playerSelection == "rock"){

         computerWins++

        alert ("You lose - Paper beats Rock");
      }
   };

  function score1(){ 
      
        for (i=0; i<4;i++){
         
           playRound(computerSelection, playerSelection)
        }
        if (i=4) {
           alert ("lets see who won");
           gameWinner(playerWins, computerWins); 
        }
      };
           
         function gameWinner(playerWins, computerWins) {

           if (playerWins > computerWins) {
   
            return  document.getElementById("results").innerHTML=
                  '<img src="/home/dom/Downloads/500_F_197806198_RCtsw5K3VxS0ezhFFB1BFVf28sRqPPXgwin1.jpg" width="500" height="333"> ' +
                   '<br> Player has  ' + playerWins + '  win(s) and is the winner!!' + '<br> <form action="/home/dom/RockPaperScissors/index.html">'
                   + '<input type="submit" value="play again" />' + '</form>';
            
         } else if (playerWins < computerWins) {
            
            return document.getElementById("results").innerHTML=
                  '<img src="/home/dom/Downloads/you-lose-eps-vectors_csp10531132.jpg" width="500" height="333">' + 
                  '<br> Computer has  ' + computerWins + '  win(s) - you lose !!!!' + '<br> <form action="/home/dom/RockPaperScissors/index.html">'
                  + '<input type="submit" value="play again" />' + '</form>';
               } else {

                  return document.getElementById("results").innerHTML=
                        '<img src="/home/dom/Downloads/keep-calm-its-a-50-50-draw11.png" width="500" height="333">' + 
                        '<br> The game is drawn. The computer won ' + computerWins + ' round(s) and Player won ' + playerWins + ' round(s) and '+ tied + 
                        ' round(s) you made the same selection as the computer ' + '<br>'
                        + '<form action="/home/dom/RockPaperScissors/index.html">' + '<input type="submit" value=" play again" />' + '</form>'; 
               }
            
               
      };

   function game (){

   playRound (computerSelection , playerSelection);
   score1();
   
   }; 


  


