//Uecae 3: Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
    var prompt = require("prompt-sync")();
    //Gets the data from user
    let number = parseInt (prompt("Enter the number: "));
    let factNumber=number;
    let result=new Array();
    //To check if there are prime factors of 2
    while (number % 2 == 0)
    {
        number /= 2;
        result.push(2);
    }
   // Using Sqrt instead of i*i
   for (var i = 3; Math.sqrt(i) <= number; i++)
    {
         //Check whether number is not divisible by 2
         while (i % 2 != 0 && number % i == 0)
        {   
         //If i is divisible by number , then we print value of i and then divide number by it
        number /= i;
        result.push(i);
        }
    }
    console.log("Factors of number "+factNumber+" = "+result.join(" "));