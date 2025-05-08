// init
var friends = [];
for (var friend of FRIENDS) {
    friends.push(new SocialContainer(friend["pp_link"], friend["name"], friend["status"], friend["status_text"]));
}

var servers = [];
for (var server of SERVERS) {
    servers.push(new ServerContainer(server["server_name"], server["server_name_color"], server["server_bg_image"], server["server_pp"], server["server_statut"], server["server_statut_color"]));
}


async function open_user() {
    var source = button_user;

    var list_button = [new TextButton("Log in", open_log_in), new TextButton("Log out", f, color = "red")];
    
    var user_menu = new Dropdown(list_button, source);
    await user_menu.insert("workspace");
}

async function open_settings() {
    console.log("open_settings");
}

async function open_terminal() {
    let terminal = new Terminal([]);
    let window_terminal = new Window("Terminal", terminal);

    window_terminal.insert("workspace-content");
}

// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {

    blink_app_name();

    nav_page = await load_nav();
    

    button_terminal = new ImageButton(TERMINAL_ICON, open_terminal, size = "45px");
    button_user = new ImageButton(USER_ICON, open_user, size = "60px");
    button_settings = new ImageButton(SETTINGS_ICON, open_settings, size = "55px");
    
    await button_settings.insert("header-button");
    await button_user.insert("header-button");
    await button_terminal.insert("header-button");

});