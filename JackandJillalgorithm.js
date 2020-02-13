//showPopup(input)//with text asking for the type of car
//saves to string variable (typeofcar)
//function showPopup(input)//asks for how many gallons are used per month
//(gallons) * (gasprice) saves to number variable (gallpermonth)
//showPopup(input)//asks price of car
//code to be monthly "= (valueofcar)
//code does calculations
//(valueofcar) + (gallons per month) = (monthlycost)
//showPopup(OUTPUT)//("typeofcar") "will cost $" +  monthlycost + " per month"

    var typeOfCar;
    var gasPrice;
    var gallons;
    var valueOfCar;

    typeOfCar = prompt("What is the name of the car?");
    valueOfCar = Number(prompt("How much is your monthly payment?"));
    gallons = Number(prompt("How many gallons do you use per month?"));
    gasPrice = Number(prompt("How much does gas cost per gal?"));

    var spentOnGas = gallons * gasPrice;
    var total = spentOnGas + valueOfCar;

    document.writeln("Your " + typeOfCar + " will cost you $" + total.toFixed(2) + " per month!");




