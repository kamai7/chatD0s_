class Dropdown extends Fragment {
    constructor(list_button, source) {
        super("drop_down_menu", list_button);
        this.source = source.dom_elem;
    }

    async init() {
        this.source.addEventListener("mouseleave", (event) => {
            this.dom_elem.addEventListener("mouseleave", this.close.bind(this));
        });

        this.dom_elem.style.top = `${this.source.offsetTop + this.source.offsetHeight + 5}px`;
        this.dom_elem.style.left = `${this.source.offsetLeft - (this.source.offsetWidth/2)}px`;
    }

    async get_html(){
        var fragment = await this.get_fragment();
        return fragment;
    }

    close(){
        this.dom_elem.remove();
    }
}