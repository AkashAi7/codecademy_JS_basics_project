const getUserChoice= userInput => {
    userInput = userInput.toLowerCase();
    if(userInput=='rock'||userInput=='paper'||userInput=='scissors')
    {
      return userInput;
    }
     else {
      console.log('Error!');
    }
    };
    
    function getComputerChoice() {
      let num=Math.floor(Math.random() * 3);
    
    if(num===0)
    {
      return 'rock';
    }
    if(num===1)
    {
      return 'paper';
    }
    if(num===2)
    {
      return 'scissors';
    }
    };
    
    
    function determineWinner(userChoice,computerChoice) {
      if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    else{
      if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }//first end
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }//second end
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    
    
    }
    }
    function playGame(){
      let userChoice=getUserChoice('scissors')
      console.log('your choice  '+userChoice)
      let computerChoice=getComputerChoice()
     console.log('computer choose '+computerChoice)
    
    
     console.log(determineWinner(userChoice, computerChoice));
    };
    
    playGame()
    