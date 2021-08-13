//Usecase 4: Print maximum and minimum of these four expressions
var prompt = require("prompt-sync")();
    //Gets input from user
    let number1 = parseInt(prompt("Enter number 1:"));
    let number2 = parseInt(prompt("Enter number 2:"));
    let number3 = parseInt(prompt("Enter number 3:"));

    //Given expression
    let result1 = (number1+number2)*number3;
    let result2 = (number1%number2)+number3;
    let result3 = (number3+number1)/number2;
    let result4 = (number1*number2)+number3;
    largest = smallest = result1;
    if ( largest < result2 )
    {
        largest = result2;
    }
    else if ( result2 < smallest )
    {
        smallest = result2;
    }
    if ( largest < result3 )
    {
        largest = result3;
    }
    else if ( result3 < smallest )
    {
        smallest = result3;
    }
    if ( largest < result4 )
    {
        largest = result4;
    }
    else if ( result4 < smallest )
    {
        smallest = result4;
    }
    console.log("Value of Expression 1: "+result1+"\nValue of Expression 2: "+result2+"\nValue of Expression 3: "+result3+"\nValue of Expression 4:"+result4+"\n\nMaximum value is: "+largest+"\nSmallest value is: "+smallest);