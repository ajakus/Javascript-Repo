
//build as many strings as you want
//String1
//String2
//String3
//etc...

//showPopup()//build a sentence with a popup text box using your own words with
            //a string variable as a blank for the madlib like "String1"

//showPopup()//another sentence
//showPopup()//another sentence
//showPopup()//another sentence
//showPopup()//another sentence
//plays all of the popups as one large popup to watch for where you can implant
//your madlibs
//asks for the first String variable
//the strings value will be set to the next input and goes down the list
//for example the question will appear "String1 value?" requiring user input
//after all values have been given, it relays the entire madlib with replacement
//values
function createMadLib(){
    let added;
    let adjective1;
    let adjective2;
    let animal;

    adjective1 = prompt("Enter adjective!");
    adjective2 = prompt("Enter another adjective!");
    animal = prompt("Enter animal")
        added =  "The " + adjective1 + " bear had a " + adjective2 + " " + animal + " in the corner.";
    let paragraphElement = $('#storyText');
    paragraphElement.css("font-size", "40px");
    paragraphElement.removeClass("handwritten");
    paragraphElement.html(added);
    alert(added)
}
