/*
Here are the main things we'll likely need to store for each coffee:
--------------------------------------------------------------------
Name: the name of the coffee
Pic: the picture of the coffee
Color: the color associated with the coffee
Alt: the alt tag identifying the coffee
Day: the day of the week
Desc: description of the coffee
*/


let myDate = new Date();

let today = myDate.getDay();


switch (today) {
    case 0:
        today = "Sunday";
        break;

    case 1:
        today = "Monday";
        break;

    case 2:
        today = "Tuesday";
        break;

    case 3:
        today = "Wednesday";
        break;

    case 4:
        today = "Thursday";
        break;

    case 5:
        today = "Friday";
        break;

    case 6:
        today = "Saturday";
        break;

    default:
        today = "Unknown Day? 🤔";
        break;
}




let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-tea.jpg",
    color: "pink",
    alt: "A picture of a cup bubble tea",
    day: "Wednesday",
    desc: `Bubble Tea Lovers UNITE!`
}





alert("Happy " + today + "!")
