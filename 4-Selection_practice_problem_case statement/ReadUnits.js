//--Usecase 3: Read a digit numbers and print in words--

    var prompt = require("prompt-sync")();
    let unitsDigit = parseInt(prompt("Enter the units digits [1,10,100,1000....]:  "));
    switch(unitsDigit)
    {
        case 1:
        {
            console.log("The units digits is :One");
            break;
        }
        case 10:
        {
            console.log("The units digits is :Ten");
            break;
        }
        case 100:
        {
            console.log("The units digits is :Hundred");
            break;
        }
        case 1000:
        {
            console.log("The units digits is :Thousand");
            break;
        }
        case 10000:
        {
            console.log("The units digits is :Ten Thousand");
            break;
        }
        case 100000:
        {
            console.log("The units digits is :Lakh");
            break;
        }
        case 1000000:
        {
            console.log("The units digits is :Ten Lakhs");
            break;
        }
        default:
        {
            console.log("Invalid Digit");
            break;
        }
    }
