//-- Usecase 2: Guess the number --
var prompt = require("prompt-sync")();
   let found = 0;
   let startPoint=0,enPoint=100;
        function FindMidNumber()
        {
            return ((enPoint+startPoint) / 2);
        }
        function CheckMidNumber(midNumber)
        {
            let option = parseInt(prompt("Enter:\n1-Is your number?"+midNumber+"\n2-Is your number less than?"+midNumber+"\n3-Is your number Greater than?"+midNumber));
            switch(option)
            {
                case 1:
                    console.log("Guessed you Number!!!");
                    found = 1;
                    break;
                case 2:
                    enPoint = midNumber - 1;
                    break;
                case 3:
                    startPoint = midNumber + 1;
                    break;
                default:
                    console.log("Invalid Choice!");
                    break;
            }
        }
        function ThinkANumber()
        {
            console.log("Think of a number in Range (1-00)\n");
            while (startPoint != enPoint && found != 1)
            {
                let midNumber = Math.round(FindMidNumber());
                CheckMidNumber(midNumber);
            }if(startPoint==enPoint)
            {
                console.log("Guessed your Number!!! Number is: "+startPoint);
            }
        }
        ThinkANumber();
