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

// object for coffee of the day
let coffee = "";

// spans that have the featured-coffee class
let featuredCoffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);


//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate (coffee) {
    return `
<p>
<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" /><strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}!</strong><br>${coffee.desc}
</p>
    `;
};



if(urlParams.has("day")){
    today = parseInt(urlParams.get("day"));
}


switch (today) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            color: "rgb(61 63 113)",
            alt: "A picture of a cup of cold brew",
            day: "Sunday",
            desc: `We're brewing something a little CHILLY!`
        };
        break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            color: "black",
            alt: "A picture of a cup bubble tea",
            day: "Monday",
            desc: `Grr, I hate Mondays... NO CREAMER FOR YOU!`
        };
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            color: "brown",
            alt: "A picture of a cup of mocha",
            day: "Tuesday",
            desc: `Don't Feed the Mocha Monster! (Oops... TOO LATE!)`
        };
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            color: "coral",
            alt: "A picture of a cup of caramel latte",
            day: "Wednesday",
            desc: `Caramel yummy - enough said!`
        };
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            color: "rgb(102, 255, 194)",
            alt: "A picture of a cup bubble tea",
            day: "Thursday",
            desc: `Bubble Tea lovers UNITE!`
        };
        break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            color: "chocolate",
            alt: "A picture of a cup of pumpkin spice latte",
            day: "Friday",
            desc: `The spookiest item on our menu... Hope it's not the 14th! 😈`
        };
        break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            color: "pink",
            alt: "A picture of a cup of frappaccino",
            day: "Saturday",
            desc: `Basically desert!`
        };
        break;

    default:
        today = "Unknown Day?";
        coffee = {
            name: "???",
            pic: "images/mystery.jpg",
            color: "black",
            alt: "A picture of ???",
            day: "???",
            desc: `YOU SHOULDNT BE HERE!! >:(`
        };
        break;
};



document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

featuredCoffee = document.getElementsByClassName("featured-coffee")

for (let text of featuredCoffee){
    text.innerHTML = coffee.name
}


console.log("Happy " + today + "!");
