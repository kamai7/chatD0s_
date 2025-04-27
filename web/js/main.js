
// add nav bar after document load
addEventListener("DOMContentLoaded", async (event) => {
    nav_page = await load_nav();

    button_terminal = await load_fragment("button", {"action" : "f()", "link" : TERMINAL_ICON});
    button_user = await load_fragment("button", {"action" : "f()", "link" : USER_ICON});
    button_settings = await load_fragment("button", {"action" : "open_settings()", "link" : SETTINGS_ICON});
    insert_html(button_terminal, "header-button", "beforeend");
    insert_html(button_user, "header-button", "beforeend");
    insert_html(button_settings, "header-button", "beforeend");

    
});

function f(){
    console.log("coucou :)");
}

