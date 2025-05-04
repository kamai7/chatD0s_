class Nav extends Fragment{
    constructor(friends) {
        super("nav", friends);
    }

    async get_html() {
        var html = await this.get_fragment();
        return html;
    }
}