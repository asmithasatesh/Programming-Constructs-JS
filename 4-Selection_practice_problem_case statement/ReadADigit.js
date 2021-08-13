//Usecase 1: Read a Number and print it in Words
var prompt = require("prompt-sync")();
    let number = parseInt(prompt("Enter the number between 1 and 10: "));
    switch(number)
    {
        case 0:
        {
            console.log("The number is :Zero");
            break;
        }
        case 1:
        {
            console.log("The number is :One");
            break;
        }
        case 2:
        {
            console.log("The number is :Two");
            break;
        }
        case 3:
        {
            console.log("The number is :Three");
            break;
        }
        case 4:
        {
            console.log("The number is :Four");
            break;
        }
        case 5:
        {
            console.log("The number is :Five");
            break;
        }
        case 6:
        {
            console.log("The number is :Six");
            break;
        }
        case 7:
        {
            console.log("The number is :Seven");
            break;
        }
        case 8:
        {
            console.log("The number is :Eight");
            break;
        }
        case 9:
        {
            console.log("The number is :Nine");
            break;
        }
        default:
        {
            console.log("Invalid number");
            break;
        }
    }
