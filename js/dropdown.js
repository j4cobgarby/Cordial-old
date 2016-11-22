/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDrop() {
  document.getElementById("category-drop").classList.toggle("show");
}

/* Handles showing/hiding the dropdown when the button is pressed */
$(document).click(function(event) {
  var shown = document.getElementById("category-drop")
    .classList.contains("show");

  if ((shown && event.target.id != "dropbtn") ||
      (!shown && event.target.id == "dropbtn")) {
    showDrop();
  }
});
