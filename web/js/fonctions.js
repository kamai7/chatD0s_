
//insert html into the main doccument

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
    var friends_list = [];
    for (var friend in FRIENDS) {
        friends_list.push(new Fragment("social_container_" + friend, "social_container", "nav", FRIENDS[friend]));
    }
    friends_html = "";
    for (var friend in friends_list) {
        friends_html += await friends_list[friend].get_fragment();
    }

    nav_page = new Fragment("nav", "nav", "main", {"content" : friends_html});
    nav_page.insert("afterbegin");
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