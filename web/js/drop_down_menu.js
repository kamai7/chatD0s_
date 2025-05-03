class DropDown extends Fragment {
    constructor() {
        super("drop-down-menu")
    }
    async get_html() {
        var html = await super.get_fragment();
        return html;
    }
}