
//insert html into the main doccument

function reload(element_id){
    var container = document.getElementById(element_id);
    var content = container.innerHTML;
    container.innerHTML= content;
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
    var friends = [];
    for (var friend of FRIENDS) {
        friends.push(new Social_container(friend["pp_link"], friend["name"], friend["status"], friend["status_text"]));
    }
    var nav = new Nav(friends);
    await nav.insert("main","afterbegin");
    for (var friend of friends) {
        await friend.init();
    }
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

async function BlinklAppName() {
    const element = document.getElementById('app-name');
  
    var toggle = true;
    while (true) {
      element.textContent = toggle ? 'ChatD0s_' : 'ChatD0s';
      toggle = !toggle;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

async function open_user() {
    console.log("open_user");
}

async function open_settings() {
    console.log("open_settings");
}