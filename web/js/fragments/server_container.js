class ServerContainer extends Fragment {
    constructor(name, name_color, bg_image, server_pp, server_statut, server_statut_color) {
        super("server_container");
        this.name_color = name_color;
        this.bg_image = bg_image;
        this.server_pp = server_pp;
        this.server_statut = server_statut;
        this.name = name;
        this.server_statut_color = server_statut_color;
    }

    async init() {
        this.dom_elem.addEventListener("click", this.open_server.bind(this));
    }

    async get_html(){
        var fragment = await this.get_fragment();
        let colors_text = "";
        for (let color of this.name_color) {
            colors_text += color + ", ";
        }
        colors_text = colors_text.substring(0, colors_text.length - 2);
        fragment = fragment.replaceAll("{{bg_image}}", this.bg_image);
        fragment = fragment.replaceAll("{{pp_link}}", this.server_pp);
        fragment = fragment.replaceAll("{{server_name_color}}", colors_text);
        fragment = fragment.replaceAll("{{name}}", this.name);
        fragment = fragment.replaceAll("{{status}}", this.server_statut);
        fragment = fragment.replaceAll("{{server_statut_color}}", this.server_statut_color);
        return fragment;
    }

    async open_server() {
        var messages = [new Message(USER_ICON, this.name, "judfdbsbfibsdfbsfbkhef sbkjsfbjs fbobqdsfdskjnbqsdndnjlkdefsdfdsfesseffessfdfdsfbd ffbdbfbdsbf")];
        for (var i = 0; i < 30; i++) {
            messages.push(new Message(USER_ICON, this.name, "judfdbsbfdbdffbdbfbdsbf"));
        }
        var chat_page = new Chat(messages);
        var window = new Window(this.name, chat_page);
        window.title_color = this.name_color

        await window.insert("workspace-content");
    }
}