//load elems:
var nav;
async function load_nav() {
    var friends = [];
    for (var friend of FRIENDS) {
        friends.push(new SocialContainer(friend["pp_link"], friend["name"], friend["status"], friend["status_text"]));
    }

    var buttons = [new TextButton("Friends", set_friend_on_nav, 1, "rgb(212, 69, 255)", true), new TextButton("Servers", set_server_on_nav, 1, "rgba(160, 45, 255, 0.8)", true)];

    nav = new Nav(friends, buttons);
    await nav.insert("main","afterbegin");
    return nav;
}

async function blink_app_name() {
    const element = document.getElementById('app-name');
  
    var toggle = true;
    while (true) {
      element.textContent = toggle ? 'ChatD0s_' : 'ChatD0s';
      toggle = !toggle;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

function f() {
    console.log("f");
}

async function open_log_in() {
    var login_page = new Fragment("login");
    var login_window = new Window("Log In page",login_page);

    await login_window.insert("workspace-content");
}

async function set_friend_on_nav() {
    nav_page.elems_list = friends;
    await nav.reload();
}

async function set_server_on_nav() {
    nav_page.elems_list = servers;
    await nav.reload();
}