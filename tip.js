//input bill amount
var total = Number(prompt("Enter total!!!"));
// calc tip: bill * .18
var tip = total * .18;
//output tip
document.writeln("The tip is $" + tip.toFixed(2) + "");