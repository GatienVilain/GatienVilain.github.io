// show and hide navigation bar in mobile version
function changes_menu_state() {
    let button = document.getElementById("navbar-button");
    let menu = document.getElementById("navbar");

    if (button.className === "close") {
        // If the navbar is hidden, show it and set the navbar button to open
        button.className = "open";
        button.title = "Close navigation bar";
        menu.style.display = "flex";
    } else {
        // otherwise, we hide the navbar and set the navbar button to close
        button.className = "close";
        button.title = "Open the navigation bar";
        menu.style.display = "none";

    }
}