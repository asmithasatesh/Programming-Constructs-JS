//Usecase 4: Check whether gambler won or lost in Match
const win=200,lose=0;
let currentMoney=100;
let count=0,wincount=0,losecount=0;

while(currentMoney<win  && lose<currentMoney )
{
    let bet=Math.floor(Math.random()* 2);
    if(bet==1)
    {
        currentMoney++;
        wincount++;
    }
    else{

        currentMoney--;
        losecount++;
    }
    count++;
}
console.log("Number of Wins "+wincount+"\nNumber of losses "+losecount+"\ntotal Bets made "+count);
if(currentMoney==200)
{
    console.log("Gambler Won the Match!");
}
else{
    console.log("Gambler lost the Match!");
}