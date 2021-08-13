//Palindrome Checker and primenumber
var prompt = require("prompt-sync")();

//function to find primenumber
function CheckPrime(number)
{
    var flag=0
    for(var i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0 && number!=1)
    {
        console.log(number+" : It is a prime Number!")
        CheckPalindrome(number);
    }
    else{
        console.log(number+" : It is not a Prime Number");
    }
}

//function to check palindrome
function CheckPalindrome(number)
{
    var result = (number.toString()).split("").reverse().join("");
    if (result === number)
    {
      console.log("Palindrome " + number);
    } 
    else
    {
      console.log("Not a Palindrome " + number);
    }
}

//Emter a Number
let number = prompt("Enter a number: ");
CheckPrime(number);