function modalDown (id) {
    var modal = document.getElementById(id);
    modal.classList.remove("up");
    modal.classList.add("down");
}

function modalUp (id) {
    var modal = document.getElementById(id);
    modal.classList.remove("down");
    modal.classList.add("up");
}

function modalToggle (id) {
    var modal = document.getElementById(id);
    if (!modal.classList.contains("up") &&
        !modal.classList.contains("down")) {

        modal.classList.add("up");
    }
    modal.classList.toggle("down");
    modal.classList.toggle("up");
}

function isModalDown (id) {
    var modal = document.getElementById(id);
    console.log(modal.classList.contains("down"));
    return modal.classList.contains("down"); // TODO: Better checking
}
