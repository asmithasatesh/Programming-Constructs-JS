//Usecase 3: Flip coin till head or tail reaches 11
let headCount=0,tailCount=0;
while(headCount<=10 || tailCount<=10)
{
    let coin=Math.floor(Math.random()* 2);
    console.log(coin);
    if(coin==1)
    {
        console.log("Head")
        headCount++;
    }
    else{
        console.log("Tail")
        tailCount++;
    }
}
if(headCount==11)
{
    console.log("Head is the Winner"+headCount);
}
else{
    console.log("Tail is the Winner"+tailCount);
}


