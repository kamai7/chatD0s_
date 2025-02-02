//instaces

async function get_page(path) {
    try {
        var response = await fetch(path);
        var data = await response.text();
        return data;
    } catch (error) {
        console.error('Erreur lors du chargement de ' + path + ':', error);
    }
}

function display_before(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
<<<<<<< Updated upstream
}

//fonctions
function displayBefore(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
<<<<<<< Updated upstream
}

async function open_chat(elem) {
    var chat_name = elem.getElementsByClassName("username")[0].innerText;

    var data = await get_page("fragments/window.php");
    var tempElement = document.createElement('div');
    tempElement.innerHTML = data;
    tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
    document.getElementById("workspace-content").insertAdjacentHTML("afterbegin", tempElement.innerHTML);
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}