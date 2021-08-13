//-- Usecase 1: Print Power of 2 Table--

var prompt = require("prompt-sync")();
    //Gets the data from user
    let number = prompt("Enter a number: ");
    var result=1;
    let i=1;
    do
    {
        result=result*2;
        // display the result
        console.log(`${2} ^ ${i+1} = ${result}`);
        i++;
    }while(result!=256 || i==number)
