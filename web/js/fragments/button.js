class Button extends Fragment {
    constructor(image_link, action, size = "70px") {
        super("button");
        this.image_link = image_link;
        this.action = action;
        this.size = size;
    }

    async init() {
        this.dom_elem = document.getElementById(this.id);
        this.dom_elem.addEventListener("click", this.action.bind(this));
    }

    async get_html() {
        var fragment = await this.get_fragment();
        fragment = fragment.replaceAll("{{link}}", this.image_link);
        fragment = fragment.replaceAll("{{size}}", this.size);
        return fragment;
    }
}