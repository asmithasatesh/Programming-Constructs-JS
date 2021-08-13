//Usecase 4: Units converion--
    var prompt = require("prompt-sync")();
    //Get option and input from user
    let options = prompt("Enter 1:Feet-Inch\nEnter 2:Feet-meter \nEnter 3:Inch-feet \nEnter 4:Meter-Feet\n");
    var input = parseInt(prompt("Enter the Value: "));
    switch (options) {
      case "1":
        console.log(input+" Feet= " + input * 12+"inch");
        break;
      case "2":
        console.log(input+" Feet = " + input * 0.3048+"meter");
        break;
    case "3":
        console.log(input+" inch = " + input*0.0833333+"ft");
        break;   
    case "4":
      console.log(input+" meter = " + input*3.28084+"ft");
        break;  
    default:
      console.log("Enter valid Numbers");
        break;
    }
