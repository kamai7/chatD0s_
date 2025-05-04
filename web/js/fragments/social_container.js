class SocialContainer extends Fragment {
    constructor(pp_link, name, online, status_text) {
        super("social_container");
        this.pp_link = pp_link;
        this.name = name;

        this.status = "status-offline";

        if (online) {
            this.status = "status-online";
        }

        this.status_text = status_text;
    }

    async init() {
        this.dom_elem.addEventListener("click", this.open_chat.bind(this));
    }

    async get_html(){
        var fragment = await this.get_fragment();
        fragment = fragment.replaceAll("{{pp_link}}", this.pp_link);
        fragment = fragment.replaceAll("{{name}}", this.name);
        fragment = fragment.replaceAll("{{status}}", this.status);
        fragment = fragment.replaceAll("{{status_text}}", this.status_text);
        fragment = fragment.replaceAll("{{action}}", this.action);
        return fragment;
    }

    async open_chat() {
        var messages = [new Message(USER_ICON, this.name, "Coucou"), new Message(USER_ICON, this.name, "Coucou")];
        var chat_page = new Chat(messages);

        var window = new Window(this.name, chat_page);

        await window.insert("workspace-content");
    }
}