let userName='';

userName ? console.log('Hello,${userName}') : console.log('Hello');
const userQuestion = 'Will I become a werewolf tonight?'
console.log(userQuestion)
let randomNumber=Math.floor(Math.random() * 8);
let eightBall='';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
    case 2:
    eightBall = 'Reply hazy try again';
    break;  
    case 3:
    eightBall = 'It is decidedly so';
    break;  
    case 4:
    eightBall = 'Cannot predict now';
    break;  
    case 5:
    eightBall = 'Do not count on it';
    break;  
    case 6:
    eightBall = 'My sources say no';
    break;  
    case 7:
    eightBall = 'Outlook not so good';
    break;  
    default:
    eightBall = 'Signs point to yes';
  // additional cases...
}
console.log(eightBall)
