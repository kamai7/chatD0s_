//instaces

//get a page
async function load_fragment(frag_name, values={}) {
    const path = "fragments/" + frag_name + ".html";
    try {
        var response = await fetch(path);
        var fragment = await response.text();
        for (var key in values) {
            fragment = fragment.replaceAll("{{" + key + "}}", values[key]);
        }
        return fragment;
    } catch (error) {
        console.error('Erreur lors du chargement de ' + path + ' : ', error);
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

function reload(element_id){
    var container = document.getElementById(element_id);
    var content = container.innerHTML;
    container.innerHTML= content;
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
    insert_html(window, "workspace-content", "beforeend");
}

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
    insert_html(settings_page, "workspace-content", "beforeend");
}

async function open_terminal() {
    var commands = "";
    commands += await load_fragment("command", {content: "coucou"});
    commands += await load_fragment("command", {content: "coucou"});

    var terminal_window = await load_fragment("terminal", {content: commands});
    var window = await load_fragment("window", {title: "CD0s_ command prompt", content: terminal_window});
    insert_html(window, "workspace-content", "beforeend");
}