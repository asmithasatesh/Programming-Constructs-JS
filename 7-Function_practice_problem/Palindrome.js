//--Palindrome Checker--

//function to check palindrome
var prompt = require("prompt-sync")();
function CheckPalindrome()
 {
//Get input from user
  var numberOne = prompt("Enter Number 1: ");
  var numberTwo = prompt("Enter Number 2: ");

//Revere integer
  var resultOne = numberOne.split("");
  var resultTwo = numberTwo.split("").reverse();

  if (resultTwo.join("") == resultOne.join("")) 
  {
    console.log("It is a Palindrome");
  } 
  else
  {
    console.log("It is not a Palindrome ");
  }
}
CheckPalindrome();