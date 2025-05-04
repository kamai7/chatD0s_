class Formdpage extends Fragment {
    constructor(type, button_dict) {
        super(type);
        this.button_dict = button_dict;
    }

    async init() {
        for (var [key, value] of Object.entries(this.button_dict)) {
            this.dom_elem.getElementsByClassName(key)[0].addEventListener("click", value.bind(this));
        }
        this.dom_elem.addEventListener("click", this.action.bind(this));
    }

    async get_html() {
        var fragment = await this.get_fragment();
        return fragment;
    }
}