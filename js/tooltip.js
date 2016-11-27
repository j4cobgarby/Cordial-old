var container, // The div container of the tooltip
    topicinput, // The input field for the topic
    msginput // The input field for the message

/*
 * The time in milliseconds between each check of the length of the title
 * and the message of the user's post.
 */
var checkTime = 20;

function initTooltip() {
    /*
     * Initializing the different HTML elements.
     */
    container = document.getElementById('tooLong');
    topicinput = document.getElementById('topic');
    msginput = document.getElementById('msg');
}

/*
 * This function hides the tooltip.
 * It does this by adding 'gone' to the classList of the container.
 * This class makes whatever it's on rendered invisible.
 */
function hideTooltip() {
    container.classList.add("gone");
}

/*
 * This function shows the tooltip.
 * The theory behind this can be inferred from the workings of hideTooltip()
 */
function showTooltip() {
    container.classList.remove("gone");
}

/*
 * This is similar to showTooltip(), and also hideTooltip(). But, instead of
 * doing one specific thing, it toggle its visibility.
 */
function toggleTooltip() {
    container.classList.toggle("gone");
}

/*
 * This sets the text of the tooltip. It does so by simply accessing and
 * modifying the innerHTML. It sets this to the parameter 'to'
 */
function setToolText(to) {
    document.getElementById('tooltipContent').innerHTML = to;
}

/*
 * This isn't a function.
 * It calls a function every checkTime milliseconds.
 * The function which it calls essentially checks the length of the user's
 * input for both topic and input, and if necessary, will tell them that
 * it's too long. It will also say which field is too long, or both.
 */
setInterval(function() {
    // Set the values of both input fields to variables.
    var topicval = topicinput.value;
    var msgval = msginput.value;

    /*
     * A generic function call. If either fields are too long, show the tooltip.
     * This is regardless of which field is too long.
     * This saves me writing out the code twice later on.
     */
    if (topicval.length > maxTitle || msgval.length > maxLength) showTooltip();
    /*
     * If both fields are too long, make the tooltip's content reflect this.
     */
    if (topicval.length > maxTitle && msgval.length > maxLength) {
        setToolText("The title <i>and</i>&nbsp; the message are too long! The max length" +
            " for the title is <b>20</b>, and <b>400</b> characters for the message.");
    }
    /*
     * If *only* the topic field is too long, tell the user this, and also inform
     * them of the maximum length allowed.
     */
    else if (topicval.length > maxTitle) {
        setToolText("The title is too long! The maximum length for this is <b>20</b>" +
            " characters.");
    }
    /*
     * If *only* the message input field is too long, inform the user of the
     * length to which they should try to shorten their message.
     */
    else if (msgval.length > maxLength) {
        setToolText("The message is too long! The maximum length for this is <b>400</b>" +
            " characters.");
    }
    /*
     * If neither of the fields are too long, simply hide the tooltip, since
     * it's not needed.
     */
    else {
        hideTooltip();
    }
}, checkTime);
