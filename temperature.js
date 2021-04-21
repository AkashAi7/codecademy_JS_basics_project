const kelvin=293
//Constant kelvin


let celsius=kelvin-273
//celsius variable

let fahrenheit=celsius*(9/5)+32
//fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);


// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
