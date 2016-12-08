/*
 * Initialization
 */

function shiftCategory() {
    categoryIndex += categoryIndex + 1 >= catInds.length ? -categoryIndex : 1;
    chosen = catInds[categoryIndex];

    var catBtn = document.getElementById('cat-btn');
    catBtn.style.backgroundColor = ccols[chosen];
    console.log(ccols[chosen]);
    catBtn.innerHTML = cnames[chosen];
}
