class Button extends Fragment {
    constructor(frag_type,link_appearance, action, size) {
        super(frag_type);
        this.link_appearance = link_appearance;
        this.action = action;
        this.size = size;
    }

    async init() {
        this.dom_elem.addEventListener("click", this.action.bind(this));
    }

    async get_html() {
        var fragment = await this.get_fragment();
        fragment = fragment.replaceAll("{{link_appearance}}", this.link_appearance);
        fragment = fragment.replaceAll("{{size}}", this.size);
        return fragment;
    }
}