class Nav extends Fragment{
    constructor(friends) {
        super("nav");
        this.content = friends;
    }

    async get_html() {
        var html = await this.get_fragment();
        var friends_html = '';
        for(var friend of this.content) {
            friends_html += await friend.get_html();
        }
        html = html.replaceAll("{{content}}", friends_html);
        return html;
    }
}