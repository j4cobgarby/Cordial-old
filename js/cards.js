/*
 * The following two values determine the maximum allowed length for both text
 * inputs which the user has control over.
 */
const maxTitle = 30;
const maxMessage = 600;

/*
 * The following three values determine how text acts when there's an amount
 * little enough for it to be enlarged.
 */
/*
 * maxFontSize determines the maximum possible font size for the text.
 */
const maxFontSize = 100; // (px)
/*
 * When choosing the font size for the text, the actual length of the text is
 * multiplied by this. This is so that, if needs be, the amount the text is
 * actually scaled by, based on the length, is altered.
 */
const lengthScalar = 1;
/*
 * If the calculated font size is any less than this, it will be clamped to
 * this.
 */
const minFontSize = 16;

/*
 * The following 8 values are the colours to use for the heading of a card
 * for each category.
 */
const memes = "#ffbf30";
const animals = "#ad97ec";
const funny = "#e8944f";
const interesting = "#96e08a";
const conv = "#87cbd0";
const programming = "#50656b";
const tech = "#c66481";
const other = "#9f9f9f";

var categoryIndex = 0;

var catInds = [
    "memes", /* This is index 0, and so on .. */
    "animals",
    "funny",
    "interesting",
    "conv",
    "programming",
    "tech",
    "other" /* .. to index 7 */
]

var chosen = catInds[categoryIndex];

var ccols = {/* Categories and their colours will be in here. */};
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

var cnames = {};
cnames.memes = "Memes";
cnames.animals = "Animals";
cnames.funny = "Funny";
cnames.interesting = "Interesting";
cnames.conv = "Conversation";
cnames.programming = "Programming";
cnames.tech = "Tech";
cnames.other = "Other";

var topicInput,
    msgInput;

function initCards() {
    topicInput = document.getElementById('topic-in');
    msgInput = document.getElementById('msg-txt');
}

/*
 * This function adds a card to the div with the class 'contents'.
 * It does so by essentially building a div up from two different elements,
 * appending them to a div, and then appending this div before the last card
 * in the container.
 */
function addCard(title, message, colour) {
    /*
     * If there isn't a title and / or a message, don't do anything: return
     * from the function.
     * This is only relevant in the case of the title and the message, not
     * the colour, since there's a default colour which can't be nulled.
     */
    if (!title || !message) {
        return;
    }

    var div = document.createElement("div");
    div.className = "card";

    var header = document.createElement("h1");
    header.style.backgroundColor = colour;
    header.innerHTML = title;

    div.appendChild(header);

    var p = document.createElement("p");

    var fontS = maxFontSize - (message.length * lengthScalar);
    fontS = fontS <= minFontSize ? minFontSize : fontS;
    p.style.fontSize = fontS.toString() + "px";
    p.innerHTML = message;

    div.appendChild(p);

    $(".content")[0].insertBefore(div, $(".content")[0].childNodes[0]);
}

function addCardFromInput() {
    addCard(topicInput.value, msgInput.value, ccols[chosen]);
}
