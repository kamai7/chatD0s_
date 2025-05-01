class Message extends Fragment {
    constructor(pp_link, username, content) {
        super("message");
        this.pp_link = pp_link;
        this.username = username;
        this.content = content;
    }

    async get_html(){
        var html = await super.get_fragment();
        html = html.replaceAll("{{pp_link}}", this.pp_link);
        html = html.replaceAll("{{username}}", this.username);
        html = html.replaceAll("{{content}}", this.content);
        return html;
    }
}