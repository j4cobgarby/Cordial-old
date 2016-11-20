/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown() {
    //document.getElementById("dropbtn").classList.toggle("show");
    var b = document.getElementsByClassName('dropbtn')[0];
    console.log(b)
    console.log(b.classList);
    b.classList.toggle("show");
    console.log("pressed");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
