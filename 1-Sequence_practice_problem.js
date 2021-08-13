//Usecase 1- get a random number
let num=Math.floor(Math.random()*10);
console.log("Random single digit value: "+num)

//Usecase 2- Get random dice number 1-6
let diceOne=Math.floor(Math.random()*6)+1;
console.log("First dice value: "+diceOne)

//Usecase 3-Add two dice numbers
let diceTwo=Math.floor(Math.random()*6)+1;
console.log("Second dice value: "+diceTwo)
//Add two dice
console.log("After adding dice 1 and dice 2: "+(diceOne+diceTwo));

//Usecase 4- Find 5 random 2-digit numbers and  calculate average and sum
let sum=0;
let randomNumber=0;
for(var i=0;i<5;i++)
{
randomNumber=Math.floor(Math.random()*100);
console.log(i+1+"-"+"Random Two digit value: "+randomNumber)
sum+=randomNumber;
}
console.log("\nSum of 5 random number is: "+sum);
console.log("Average of 5 random numb er is: "+ Math.round(sum/5));

//Usecase 5- Unit conversion
//1: Convert ft to inch
let input = 42;
console.log("42 inch is: "+input/12+" ft");
//2: Calculate area of rectrangle
const meterConvert=0.3048
const length=60;
const breadth=40
console.log("Area of rectangle 60 x 40 ft plot is: "+ length*breadth*meterConvert+"m");
//3: Calculate 50 such plot areas in acre
const acre=0.00024711;
console.log("Area of 25 rectangle 60 x 40 ft plot is: "+(25*length*breadth*meterConvert*acre).toFixed(2)+" acre");