//-- Usecase 1: Print Power of 2 Table-->

    var prompt = require("prompt-sync")();
    //Gets the data from user
    let number = prompt("Enter a number: ");
    var result=1;
    for(var i=0;i<number;i++)
    {
        result=result*2;
        // display the result
        console.log(`${2} ^ ${i+1} = ${result}`);
    }
