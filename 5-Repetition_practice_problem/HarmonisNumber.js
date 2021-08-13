//-- Usecase 2: Print Power of 2 Table--
    var prompt = require("prompt-sync")();
    //Gets the data from user
    let number = parseInt (prompt("Enter the number: "));
    let result=0;
    for(var i=1;i<=number;i++)
    {
        result+=(1/i);
    }
    console.log(number+"th harmonic number is: "+result.toFixed(2))
