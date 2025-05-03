class DropDown extends Fragment {
    constructor(list_button, source) {
        super("drop_down_menu")
        this.list_button = list_button;
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
        var buttons_html = "";
        for(var button of this.list_button){
            buttons_html += await button.get_html();
        }
        fragment = fragment.replaceAll("{{content}}", buttons_html);
        return fragment;
    }

    close(){
        this.dom_elem.remove();
    }
}