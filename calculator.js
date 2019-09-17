const readline = require('readline')
const operations = require('./operations')

const r1 = readline.createInterface({
input: process.stdin,
output: process.stdout
})


console.log(`
Calc.js

Welcome to the Node.js Calculator app! 
Version: 1.0.0.

Usage: The user will be prompted for two numbers, 
then asked to select their operation of choice.
`)

r1.question('enter the first number: ',x=>{
  r1.question('enter the second number: ',y => {
    r1.question(`please select from the following options:
	[1]  Addition
	[2]  Subtraction
	[3]  Divide
	[4]  Multiply
	enter your choice:
`,choice=>{
	if(!operations.validateNumbers(x,y)){
	console.log(`invalid input`)
	}else{
	 switch(choice){
	case '1': 
	  console.log(`the sum of ${x} and ${y} is ${operations.add(x,y)}`)
	  break;
	case '2': 
          console.log(`the difference of ${x} and ${y} is ${operation.subtrct(x,y)}`)
	  break;	
	case '3': 
          console.log(`the quotient of ${x} and ${y} is ${operations.divide(x,y)}`)
	  break;	
	case '4': 
          console.log(`the product of ${x} and ${y} is ${operations.multiply(x,y)}`)
	  break;
	default:
	  console.log(`invalid operator`)
	  break;
 			}
	}
	r1.close()
   })
})
})

