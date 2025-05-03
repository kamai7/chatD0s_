
// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {

    BlinklAppName();

    nav_page = await load_nav();
    

    button_terminal = new Image_Button(TERMINAL_ICON, open_terminal, size = "45px");
    button_user = new Image_Button(USER_ICON, open_user, size = "60px");
    button_settings = new Image_Button(SETTINGS_ICON, open_settings, size = "55px");
    
    await button_settings.insert("header-button");
    await button_user.insert("header-button");
    await button_terminal.insert("header-button");
});