//Usecase 1: Then find the 2nd largest and the 2nd smallest element without sorting the array.
let randomNumber=0;
var NumberArray=new Array();
for(var i=0;i<10;i++)
{
randomNumber=Math.floor(Math.random()* 899)+100;
console.log(i+1+"-"+"Random Three digit value: "+randomNumber);
NumberArray.push(randomNumber);
}
NumberArray.forEach(element => {
    console.log(element);
});
//Usecase 1
MinSecondLargestNSmallest(NumberArray)
function MinSecondLargestNSmallest(NumberArray)
{
    var secondlargest=99;
    var secondsmallest=1000;
    var max=NumberArray[0];
    var min=NumberArray[0];
for(var i=1;i<NumberArray.length;i++)
{
if(NumberArray[i]>max || NumberArray[i]> secondlargest)
{
    if(max<NumberArray[i] && max>secondlargest)
    {
        secondlargest=max;
        max=NumberArray[i];

    }
    else
    {
        secondlargest=NumberArray[i];
    }
}
else if(NumberArray[i]<min || NumberArray[i]<secondsmallest)
{
    if(min>NumberArray[i] && min<secondsmallest)
    {
        secondsmallest=min;
        min=NumberArray[i];
    }
    else{
        secondsmallest=NumberArray[i];
    }

}
}
console.log("Second Smallest: "+secondsmallest+"\tSecond Largest: "+secondlargest);
}
//Usecase 2: Sort and find
NumberArray.sort();
console.log("After Sorting\nSecond Smallest: "+NumberArray[1]+"\tSecond Largest: "+NumberArray[NumberArray.length-2]);

