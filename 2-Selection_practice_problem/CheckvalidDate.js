var prompt = require("prompt-sync")();
//Get date and month from User
let day=parseInt( prompt("Enter Day: "));
let month=parseInt( prompt("Enter Month (1-12): "));
let flag=0;
let combination=(month*100)+day;
//Check whether month is in range March-June
if(month>=3 && month<=6 && combination>= 320 && combination <=620)
{
    let delimit=30+(month%2);
    //Check whether date is in proper range
    if(day>=1 && day<=delimit )
    {
        console.log("True");
        flag=1;
    }  
}
if(flag==0)
{
    console.log("False");
}

