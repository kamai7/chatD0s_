function displayBefore(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
}
function close(button) {
    console.log("Bouton de fermeture cliqué !");
    let windowElement = button.closest(".window");
    console.log(windowElement);
    if (windowElement) {
        windowElement.remove();
        console.log("Fenêtre supprimée !");
    }
};
