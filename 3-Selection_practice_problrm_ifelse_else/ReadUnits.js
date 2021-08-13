//Usecase 3: Read a digit numbers and print in words
var prompt = require("prompt-sync")();
    let unitsDigit = prompt("Enter the units digits [1,10,100,1000....]");
        if(unitsDigit == 1)
        {
            console.log("The units digits is :One");
        }
        else if(unitsDigit == 10)
        {
            console.log("The units digits is :Ten");
        }
        else if(unitsDigit == 100)
        {
            console.log("The units digits is :Hundred");
        }
        else if(unitsDigit == 1000)
        {
            console.log("The units digits is :Thousand");
        }
        else if(unitsDigit == 10000)
        {
            console.log("The units digits is :Ten Thousand");
        }
        else if(unitsDigit == 100000)
        {
            console.log("The units digits is :Lakh");
        }
        else if(unitsDigit == 1000000)
        {
            console.log("The units digits is :Ten Lakhs");
        }
        else
        {
            console.log("Invalid Digit");
        }
