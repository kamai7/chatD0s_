var nav_page;
var button_terminal;
var button_user;
var button_settings;
const TERMINAL_ICON = "img/ui/terminal.png";
const USER_ICON = "img/illustrations/not-log-user.png";
const SETTINGS_ICON = "img/ui/settings.png";

// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {
    nav_page = await load_nav();

    button_terminal = await load_fragment("button.html", {"link" : TERMINAL_ICON});
    button_user = await load_fragment("button.html", {"link" : USER_ICON});
    button_settings = await load_fragment("button.html", {"link" : SETTINGS_ICON});
    insert_html(nav_page, "main", "afterbegin");
});

