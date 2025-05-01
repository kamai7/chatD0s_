class Fragment {
    constructor(frag_name, location) {
        this.id = 0; //todo id random
        this.path = "fragments/" + frag_name + ".html";
        this.location = document.getElementById(location);
    }

    async insert(placement = "beforeend"){
        var fragment = await this.get_fragment();
        this.insert_html(fragment, this.location.id, placement);
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

    insert_html(elem, location_id, placement) {
        const locationElem = document.getElementById(location_id);
        if (locationElem) {
            locationElem.insertAdjacentHTML(placement, elem);
        } else {
            console.error(`Element with id "${location_id}" not found.`);
        }
    }
}