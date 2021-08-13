//-- Usecase 3: Check whether number is prime or not--
    var prompt = require("prompt-sync")();
    //Gets the data from user
    let number = parseInt(prompt("Enter a number: "));
    CheckPrime(number);
    let startrange=parseInt(prompt("Enter start range: "));
    let endRange=parseInt(prompt("Enter end range: "));
    let primelist="";
    //Usecase 4: Check prime Number in range
    for(var j=startrange;j<=endRange;j++)
    {
        let returnedValue=CheckPrime(j);
        if(returnedValue!= 1)
        {
            primelist+=j+" ";
        }
    }
    console.log("Prime list in range is :"+primelist);

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
            return 0;
        }
        else{
            console.log(number+" : It is not a Prime Number");
            return 1;
        }
    }
