var constantDebug = false;

var topicInput,
    msgInput,
    category,
    postBtn

/*
 * Initialization
 */
function initInput () {
    topicInput = document.getElementById('topic-in');
    msgInput = document.getElementById('msg-txt');
    postBtn = document.getElementById('post-btn');
}

function shiftCategory() {
    categoryIndex += categoryIndex + 1 >= catInds.length ? -categoryIndex : 1;
    chosen = catInds[categoryIndex];
    console.log(chosen);
}

/*
 * DEBUG STUFF
 */

function debugInputs () {
    console.log("topicInput: " + topicInput.value);
    console.log("msgInput: " + msgInput.value);
    console.log("category: " + category);
}

window.setInterval (function () {
    if (constantDebug) {
        console.log("topicInput: " + topicInput.value);
        console.log("msgInput: " + msgInput.value);
        console.log("category: " + category);
    }
}, 1000)
