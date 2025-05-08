var nav_page;
var button_terminal;
var button_user;
var button_settings;
const TERMINAL_ICON = "img/ui/terminal.png";
const USER_ICON = "img/illustrations/not-log-user.png";
const SETTINGS_ICON = "img/ui/settings.png";
const SERVER_ICON = "img/illustrations/default-server.gif";
const SERVER_PP = "img/illustrations/pp-server.png";

const FRIENDS = [
    {
        pp_link : USER_ICON,
        name : "jean Michel",
        status : true,
        status_text : "coucou :)"
    },
    {
        pp_link : USER_ICON,
        name : "silly :3",
        status : true,
        status_text : "coucou :)"
    },
    {
        pp_link : USER_ICON,
        name : "shadow wisard",
        status : false,
        status_text : "coucou :)"
    },
    {
        pp_link : USER_ICON,
        name : "money gang",
        status : true,
        status_text : "coucou :)"
    }
];

const SERVERS = [
    {
        server_name : "Ultimate wise",
        server_name_color : ["rgb(122, 202, 255)","rgb(244, 120, 255)"],
        server_bg_image : SERVER_ICON,
        server_pp : SERVER_PP,
        server_statut : "-> join us",
        server_statut_color : "rgb(255, 174, 0)"
    },
    {
        server_name : "Dangeroous spikes",
        server_name_color : ["rgb(122, 202, 255)","rgb(244, 120, 255)"],
        server_bg_image : SERVER_ICON,
        server_pp : SERVER_PP,
        server_statut : "-> join us",
        server_statut_color : "rgb(255, 0, 234)"
    },
    {
        server_name : "brightest sparkle",
        server_name_color : ["rgb(122, 202, 255)","rgb(244, 120, 255)","rgb(255, 217, 0)"],
        server_bg_image : SERVER_ICON,
        server_pp : SERVER_PP,
        server_statut : "-> join us",
        server_statut_color : "rgb(255, 243, 75)"
    },
    {
        server_name : "darkness",
        server_name_color : ["rgb(0, 23, 100)","rgb(72, 0, 105)"],
        server_bg_image : SERVER_ICON,
        server_pp : SERVER_PP,
        server_statut : "-> :)",
        server_statut_color : "rgb(211, 211, 211)"
    }
];