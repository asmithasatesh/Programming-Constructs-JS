var prompt = require("prompt-sync")();
function checkYear(year) {
    
    if (year % 400 == 0 || (year%100!=0 && year%4==0))
        return true;
    return false;
}
let year = prompt("Enter Leap Year: ");
console.log((checkYear(parseInt(year))==true && year.length==4) ? "Leap Year!" : "Not a Leap Year!");


