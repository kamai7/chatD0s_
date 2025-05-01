class Fragment {
    constructor(frag_name) {
        this.id = Math.random().toString(36).substring(2); //todo id random
        this.dom_elem;
        this.path = "fragments/" + frag_name + ".html";
    }

    async insert(parent_id,placement = "beforeend"){
        var elem = await this.get_html();
        document.getElementById(parent_id).insertAdjacentHTML(placement, elem);
    }

    async get_fragment(){
        try {
            var response = await fetch(this.path);
            var fragment = await response.text();
            fragment = fragment.replaceAll("{{id}}", this.id);
            return fragment;
        } catch (error) {
            console.error('Erreur lors du chargement de ' + this.path + ' : ', error);
        }
    }

    async update() {
        var fragment = this.get_html().getElementById(this.id).content();
        this.dom_elem.innerHTML = fragment;
    }
}