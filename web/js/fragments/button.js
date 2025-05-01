class Button extends Fragment {
    constructor(image_link, action) {
        super("button");
        this.image_link = image_link;
        this.action = action;
    }

    async get_html() {
        var fragment = await this.get_fragment();
        fragment = fragment.replaceAll("{{link}}", this.image_link);
        fragment = fragment.replaceAll("{{action}}", this.action);
        return fragment;
    }
}