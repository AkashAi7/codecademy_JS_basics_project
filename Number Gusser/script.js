let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
  
}

function compareGusses(user,comp,tar){
if(tar-user>tar-comp){
  return true;
}
else{
  return false;
}

}


function updateScore(str2){
  if(str2==='human')
humanScore +=1;
else{
 computerScore+=1;
}
}

function advanceRound(){
currentRoundNumber+=1;
}
function getAbsoluteDistance (targetGuess, humanGuess, computerGuess) {
    return  humanDifference = Math.abs(targetGuess - humanGuess);
    return  computerDifference = Math.abs(targetGuess - computerGuess);
   }