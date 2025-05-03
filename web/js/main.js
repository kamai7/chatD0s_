
// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {

    BlinklAppName();

    nav_page = await load_nav();
    button_terminal = new Button(TERMINAL_ICON, open_terminal);
    button_user = new Button(USER_ICON, open_user);
    button_settings = new Button(SETTINGS_ICON, open_settings);
    button_settings.insert("header-button");
    button_user.insert("header-button");
    button_terminal.insert("header-button");
    button_settings.init();
    button_user.init();
    button_terminal.init();

});