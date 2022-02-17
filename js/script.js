// hide works according to the filter given as input
function works_filter(categorie) {
    let works = document.querySelectorAll("#work section a"); // get all works

    if (categorie === "all") {
        // if we press "show all", we display all the works
        works.forEach(work => {
            work.style.display = "flex";
        })
    } else {
        // otherwise, we display the elements corresponding
        // to the category of the filter and we hide the others
        works.forEach(work => {
            if (work.className === categorie) {
                work.style.display = 'flex';
            } else {
                work.style.display = 'none';
            }
        })
    }
    // then, we change the button corresponding to the active filter
    document.querySelector("#work header nav .active").className = "";
    document.getElementById("button-" + categorie).className = "active";
}