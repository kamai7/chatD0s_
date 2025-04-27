var nav_page;
var button_terminal;
var button_user;
var button_settings;
const TERMINAL_ICON = "img/ui/terminal.png";
const USER_ICON = "img/illustrations/not-log-user.png";
const SETTINGS_ICON = "img/ui/settings.png";

const FRIENDS = [
    {
        name : "jean Michel",
        online : true,
        statut : "coucou :)"
    },
    {
        name : "silly :3",
        online : false,
        statut : "coucou :)"
    },
    {
        name : "shadow wisard",
        online : true,
        statut : "coucou :)"
    },
    {
        name : "money gang",
        online : true,
        statut : "coucou :)"
    }
];

// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {
    nav_page = await load_nav();

    button_terminal = await load_fragment("button", {"link" : TERMINAL_ICON});
    button_user = await load_fragment("button", {"link" : USER_ICON});
    button_settings = await load_fragment("button", {"link" : SETTINGS_ICON});
    insert_html(button_terminal, "header-button", "beforeend");
    insert_html(button_user, "header-button", "beforeend");
    insert_html(button_settings, "header-button", "beforeend");
});

