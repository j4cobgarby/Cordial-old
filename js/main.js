// Some functions to create cards

var maxLength = 400;
var maxTitle = 20;

/*
 * This variable will be used as a way of telling the javascript which category
 * the user wants to post in.
 */
var chosenCategory = 'other';

/*
 * These are the colours for each category. Just to clarify:
 *  * A category is a field which the user must specify out of a dropdown
 *    list when they make a post. Each category has a unique colour.
 *  * If no category is chosen, the post will not go forth.
 */
var memes = "#ffbf30";
var animals = "#ad97ec";
var funny = "#e8944f";
var interesting = "#96e08a";
var conv = "#87cbd0";
var programming = "#50656b";
var tech = "#c66481";
var other = "#ffffff";
var festive = "#cb150b";

var ccols = { /* vv Categories and their colours will be in here. */ };
/*
 * Populating the ccols dictionary. This allows me to access the colour of a
 * category by using ccols[category-name]
 */
ccols.memes = memes;
ccols.animals = animals;
ccols.funny = funny;
ccols.interesting = interesting;
ccols.conv = conv;
ccols.programming = programming;
ccols.tech = tech;
ccols.other = other;
ccols.festive = festive;

/*
 * This function is called from the HTML mainly.
 * It handles the happenings which will be performed as soon as the user
 * clicks a category.
 */
function setCat(to) {
    chosenCategory = to;
    var btn = document.getElementById('dropbtn');
    /*
     * This is changing the background and foreground colours of the
     * category selection button.
     */
    btn.style.backgroundColor = ccols[to];
    btn.style.color = tooDark(ccols[to]) ? "white" : "black";
}

/*
 * This function returns a random integer which is greater than or equal to
 * min, and less than or equal to max. I used this function in the early stages
 * of testing, by making random cards.
 * I can't bring myself to delete it.
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * This is the main part of this code. It takes a whole load of
 * parameters, and with these, adds a card to the website.
 * I will attempt to explain these parameters.
 * -  title (string)
 *   This is the text which will be displayed large in the header of the card.
 * -  body (string)
 *   This is the text which makes up the body of the card. Usually, this would
 *   be the user's message.
 * -  colour (hex string)
 *   Simply, this is the hexedecimal colour which the header will use as a
 *   background colour.
 * -  whiteHead (boolean)
 *   Whether or not the heading will be displayed as white. Default is black.
 * -  isFestive (boolean)
 *   This boolean value will determine whether or not the header should have a
 *   background image. The background image will always be a festive pattern.
 */
function addCard(title, body, colour, whiteHead, isFestive) {
    /*
     * Return to the function without adding the card, if either the title or
     * the body isn't present.
     */
    if (!title || !body) {
        return;
    }

    /*
     * Creating the parent div of the entire card. The class 'card' is assigned
     * to this div, so that it can use the css applied to such a div.
     */
    var div = document.createElement('div');
    div.className = "card";

    /*
     * Creates the section for the header.
     * The background colour is always set, but the following if statement
     * determines the applying of a background image.
     */
    var header = document.createElement('h1');
    header.style.backgroundColor = colour;
    if (isFestive) {
        header.style.backgroundImage = "url('images/red-festive.png')";
    }
    /*
     * Applying the correct class to the header, and also adding the text as the
     * innerHTML. If the header is specified to have a 'whiteHead', change the
     * colour of the text to white.
     */
    header.className = "card";
    header.innerHTML = title;
    if (whiteHead) {
        header.style.color = "white";
    }
    /*
     * Start building the card by adding it to the parent div.
     */
    div.appendChild(header);

    /*
     * Creating a paragraph.card, whose innerHTML is 'body', so that it displays
     * the user's message.
     */
    var p = document.createElement('p');
    p.className = "card";
    p.innerHTML = body;
    /*
     * Append this div to the parent div.
     */
    div.appendChild(p)

    /*
     * Using some jQuery to insert the card before the others.
     * Helpfully, JavaScript has a very handy method called 'insertBefore',
     * which, as it would suggest, inserts something at the beginning of a
     * container.
     */
    $('.cards')[0].insertBefore(div, $('.cards')[0].childNodes[0]);
}

/*
 * This uses a brightness detecting algorithm to first, get the brightness
 * or, 'luma'. The way this is done is documented below.
 */
function tooDark(c) {
    var c = c.substring(1); // get rid of preceeding #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luma < 254) {
        return true;
    }
    return false;
}

/*
 * This function takes all of the input fields, and uses their contents to
 * create a call to addCard. This is the function which is called from the
 * post button.
 */
function cardFromInput() {
    var title = document.getElementById('topic').value;
    var message = document.getElementById('msg').value;
    var colour = ccols[chosenCategory];

    if (message.length <= maxLength && title.length <= maxTitle) {
        if (chosenCategory != "festive") {
            addCard(title, message, colour, tooDark(colour), false);
        } else {
            addCard(title, message, colour, true, true);
        }
        document.getElementById('topic').value = "";
        document.getElementById('msg').value = "";
    } else {
        /*
        	No need to do anything here, since the user is told if their message
        	is too long as they type.
        */
    }
}
