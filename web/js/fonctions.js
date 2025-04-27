//instaces

//get a page
async function load_fragment(frag_name, values={}) {
    try {
        var response = await fetch("fragments/" + frag_name + ".html");
        var fragment = await response.text();
        for (var key in values) {
            fragment = fragment.replace("{{" + key + "}}", values[key]);
        }
        return fragment;
    } catch (error) {
        console.error('Erreur lors du chargement de ' + path + ':', error);
    }
}

//insert html into the main doccument
function insert_html(elem, location_id, placement) {
    const locationElem = document.getElementById(location_id);
    if (locationElem) {
        locationElem.insertAdjacentHTML(placement, elem);
    } else {
        console.error(`Element with id "${location_id}" not found.`);
    }
}


function display_before(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
}

//fonctions

async function open_chat(elem) {
    var chat_name = elem.getElementsByClassName("username")[0].innerText;

    var data = await load_fragment("fragments/window.php");
    var tempElement = document.createElement('div');
    tempElement.innerHTML = data;
    tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
    document.getElementById("workspace-content").insertAdjacentHTML("beforeend", tempElement.innerHTML);
}

document.addEventListener("DOMContentLoaded", () => {
    for(friend in FRIENDS) {
        var elem = load_fragment("fragments/social_container.php");
        document.getElementById("nav").insertAdjacentHTML("beforeend", elem.innerHTML);
    }
});

//load elems:
async function load_nav() {
    var nav_page = await load_fragment("nav");
    insert_html(nav_page, "main", "afterbegin");
    return nav_page;
}