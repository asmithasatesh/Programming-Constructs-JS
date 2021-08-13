//-- Usecase 1: Temperature Conversion --
var prompt = require("prompt-sync")();
function ReadInput()
{
    let choice= parseInt(prompt('1-Fahrenheit to Celsius \n2-Celsius to Fahrenheit\n'));
    switch(choice)
    {    
    case 1:
        console.log("Enter degree in Fahrenheit:");
        let fahrenheit = parseInt(prompt());
        if (!(fahrenheit >= 32 && fahrenheit <= 212) )
        {
        console.log("Not Between the freezing and boiling pointof Fahrenheit!");
        return;
        }
        FahrenheitToCelsius(fahrenheit);
        break;
    case 2:
        //Read input from user
        console.log("Enter degree in Celsius");
        let celsius = parseInt(prompt());
        if (!(celsius >= 0 && celsius <= 100))
        {
        console.log("Not Between the freezing and boiling point Celsius! ");
        return;
        }
        CelsiusToFahrenheit(celsius);
        break;
        }
}
function CelsiusToFahrenheit(celsius)
{
//Convert from Celsius to Fahrenheit
let celToFar = (celsius * 9 / 5) + 32;   
console.log("Celusis To Fahrenheit Temperature : " + Math.round(celToFar));
           
}
function FahrenheitToCelsius(fahrenheit)
{
            //Convert from Fahrenheit to Celsius
            let FarToCel = (fahrenheit - 32) * 5 / 9;
            console.log("Fahrenheit To Celusis Temperature : " + Math.round(FarToCel));
}
ReadInput();
