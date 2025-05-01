
// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {
    nav_page = await load_nav();
    button_terminal = new Fragment("button-terminal", "button", "header-button", {"action" : "open_terminal()", "link" : TERMINAL_ICON});
    button_user = new Fragment("button-user", "button", "header-button", {"action" : "f()", "link" : USER_ICON});
    button_settings = new Fragment("button-settings", "button", "header-button", {"action" : "open_settings()", "link" : SETTINGS_ICON});
    button_settings.insert();
    button_user.insert();
    button_terminal.insert();
});

function f(){
    console.log("coucou :)");
}

