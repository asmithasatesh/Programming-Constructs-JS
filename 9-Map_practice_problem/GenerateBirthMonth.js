// Initialise variables
let maxcount=50;
var dicMap=new Map();
let value=0
while(--maxcount !=0)
{
    //Generate month
    let month=Math.floor(Math.random()* 12) +1;
    console.log("Individual :"+maxcount+"\tMonth is: "+month);
    value=new Array();
    //Check whether dict has month
    if(dicMap.has(month))
    {
        value=dicMap.get(month);
    }
    value.push(maxcount);
    //Set vale to dictionary
    dicMap.set(month,value);
}
//print individual in same birdthday month
for(let [key,value] of dicMap)
{
    console.log("Month: "+key+"\tIndividual= "+value);
}