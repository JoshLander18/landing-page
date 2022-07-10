const dropbtnEl = document.getElementById("dropbtn-el");
let closeX = document.getElementById("open-svg");
//When user clicks hamburger button show dropdown navigation

dropbtnEl.addEventListener("click", function() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "grid";
    } else {
        dropdown.style.display = "none";
    }
  })