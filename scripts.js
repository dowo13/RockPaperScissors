





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

   
   
  // let button = document.getElementsByClassName("button").onclick = playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();

  //let button = undefined;

 /* function button1() {
  

    let playerSelection = prompt("Do you choose rock, paper or scissors?")
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = ["rock", "paper", "scissors"];

   playRound(computerSelection, playerSelection);
   //game();
   //score1();
   //winner();
   //round();
  };*/
   let playerSelection;// prompt("Do you choose rock, paper or scissors?").toLowerCase();
   let computerSelection = ["rock", "paper", "scissors"];
   let computerWins = 0;
   let playerWins = 0;
   let tied = 0;
   let button = '';

   /*const refresh = document.createElement('button')
   refresh.appendChild('refresh');
   refresh.textContent = "play again";
   /*function toggle_visibility(button) {
      button = document.getElementsByClassName(button);
     if(button.style.display == 'block'){
        button.style.display = 'none';}
     else {
        button.style.display = 'block';
    }
  };
  */

   function playRound (computerSelection , playerSelection){
      
     playerSelection = prompt("Do you choose rock, paper or scissors?").toLowerCase();
     //playerSelection = playerSelection.toLowerCase();
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

          alert (/*document.getElementById("round").innerHTML=*/"Game drawn, play again?");
           
      } else if (computerSelection == "rock" && playerSelection == "paper"){

         playerWins++

         alert (/*document.getElementById("round").innerHTML=*/ "You win - Paper beats Rock");
         
      } else if (computerSelection == "scissors" && playerSelection == "paper"){

          computerWins++
          
          alert (/*document.getElementById("round").innerHTML=*/"You lose, Scissors beats paper");

      }  else if (computerSelection == "paper" && playerSelection == "scissors") {

       playerWins++

       alert (/*document.getElementById("round").innerHTML=*/"You win, Scissors beats Paper");
   
      } else if (computerSelection == "scissors" && playerSelection == "rock") {

      playerWins++

      alert (/*document.getElementById("round").innerHTML=*/"You win, Rock beats Scissors");

      } else if (computerSelection == "rock" && playerSelection == "scissors"){

          computerWins++;

          alert (/*document.getElementById("round").innerHTML=*/"You lose, Rock beats Scissors");
      
      } else if (computerSelection == "paper" && playerSelection == "rock"){

         computerWins++

        alert (/*document.getElementById("round").innerHTML=*/ "You lose - Paper beats Rock");
      }
   };

  function score1(){ 
      
        for (i=0; i<4;i++){
         
           playRound(computerSelection, playerSelection)
        }
        if (i=4) {
           alert ("lets see who won");
           gameWinner(playerWins, computerWins);
          // toggle_visibility(button);
           //location.reload(); 
          // winner(playerWins, computerWins);
           
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

   
   /*function winner(playerWins, computerWins) {

      if (playerWins < computerWins) {

       return document.getElementById("winner").innerHTML='computer has ' +  computerWins;

      } else if (playerWins > computerWins) {

       return document.getElementById("winner").innerHTML='player has ' + playerWins;
      } else {

       return  document.getElementById("winner").innerHTML='games tied ' + tied;
      }
   };*/
   

  


