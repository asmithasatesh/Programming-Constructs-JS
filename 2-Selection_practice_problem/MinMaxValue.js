//Usecase 1: Get 5 Random 3-digit number and print minimum and maximum value
let randomNumber=0;
let max=100;
let min=1000;
for(var i=0;i<5;i++)
{
randomNumber=Math.floor(Math.random()* 899)+100;
console.log(i+1+"-"+"Random Three digit value: "+randomNumber);
if(randomNumber>max)
{
    max=randomNumber;
}
else if(randomNumber<min)
{
    min=randomNumber;
}
else{
continue;
}
}
console.log("\nMaximum value is: "+max+"\nMinimum value is: "+min);
