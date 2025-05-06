//load elems:
async function load_nav() {
    var friends = [];
    for (var friend of FRIENDS) {
        friends.push(new SocialContainer(friend["pp_link"], friend["name"], friend["status"], friend["status_text"]));
    }
    var nav = new Nav(friends);
    await nav.insert("main","afterbegin");
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