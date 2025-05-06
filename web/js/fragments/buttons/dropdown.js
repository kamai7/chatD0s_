class Dropdown extends Fragment {
    constructor(list_button, source) {
        super("drop_down_menu", list_button);
        this.source = source.dom_elem;
    }

    async init() {
        this.source.addEventListener("mouseleave", (event) => {
            this.dom_elem.addEventListener("mouseleave", this.close.bind(this));
        });

        this.dom_elem.style.top = `calc(${((this.source.offsetTop + this.source.offsetHeight) / document.body.offsetHeight)*100}% + 5px)`;
        this.dom_elem.style.left = `${((this.source.offsetLeft - (this.source.offsetWidth/2)) / document.body.offsetWidth) * 100}%`;
    }

    close(){
        this.dom_elem.remove();
    }
}