let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let age = Math.floor(Math.random()*100 );;
if(age>=18&&registeredEarly===true){
  raceNumber+=1000;
}

if(age>=18&&registeredEarly===true){
console.log('${raceNumber}You will race at 9:30')
}

else if(age>=18&&registeredEarly===false)
{
  console.log(
'Late adults run at 11:00 am')
}


else if(age<18)
{
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}