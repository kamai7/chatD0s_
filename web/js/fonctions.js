//instaces

//get a page
async function load_fragment(frag_name, values={}) {
    try {
        var response = await fetch("fragments/" + frag_name + ".html");
        var fragment = await response.text();
        for (var key in values) {
            fragment = fragment.replaceAll("{{" + key + "}}", values[key]);
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

async function open_chat(self, name) {
    var chats = "";
    chats += await load_fragment("message", {pp_link: USER_ICON, username: name, content: "coucou"});
    chats += await load_fragment("message", {pp_link: USER_ICON, username: name, content: "coucou"});

    var chat_window = await load_fragment("chat", {messages: chats});
    var window = await load_fragment("window", {title: name, content: chat_window});
    insert_html(window, "workspace-content", "afterbegin");
}

document.addEventListener("DOMContentLoaded", () => {
    for(friend in FRIENDS) {
        var elem = load_fragment("fragments/social_container.php");
        document.getElementById("nav").insertAdjacentHTML("beforeend", elem.innerHTML);
    }
});

//load elems:
async function load_nav() {
    var friends_html = "";
    for (var friend in FRIENDS) {
        friends_html += await load_fragment("social_container", FRIENDS[friend]);
    }
    var nav_page = await load_fragment("nav", {content : friends_html});
    insert_html(nav_page, "main", "afterbegin");
    return nav_page;
}

async function open_settings() {
    var settings_page = await load_fragment("window",{title:"settings", content:":)"});
    insert_html(settings_page, "workspace-content", "afterbegin");
}