
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