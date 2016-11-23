var arrow,
    container

function initTooltip() {
    arrow = document.getElementById('arrow');
    container = document.getElementById('tooLong');
}

function hideTooltip() {
    arrow.classList.add("gone");
    container.classList.add("gone");
}

function showTooltip() {
    arrow.classList.remove("gone");
    container.classList.remove("gone");
}

function toggleTooltip() {
    arrow.classList.toggle("gone");
    container.classList.toggle("gone");
}
