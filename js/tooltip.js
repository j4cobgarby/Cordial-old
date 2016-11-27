var container,
    topicinput,
    msginput

function initTooltip() {
    container = document.getElementById('tooLong');

    topicinput = document.getElementById('topic');
    msginput = document.getElementById('msg');
}

function hideTooltip() {
    container.classList.add("gone");
}

function showTooltip() {
    container.classList.remove("gone");
}

function toggleTooltip() {
    container.classList.toggle("gone");
}

function setToolText(to) {
    document.getElementById('tooltipContent').innerHTML = to;
}

setInterval(function() {
    var topicval = topicinput.value;
    var msgval = msginput.value;

    if (topicval.length > maxTitle || msgval.length > maxLength) showTooltip();
    if (topicval.length > maxTitle && msgval.length > maxLength) {
        setToolText("The title <i>and</i>&nbsp; the message are too long! The max length" +
            " for the title is <b>20</b>, and <b>400</b> characters for the message.");
    } else if (topicval.length > maxTitle) {
        setToolText("The title is too long! The maximum length for this is <b>20</b>" +
            " characters.");
    } else if (msgval.length > maxLength) {
        setToolText("The message is too long! The maximum length for this is <b>400</b>" +
            " characters.");
    } else {
        hideTooltip();
    }
}, 10);
