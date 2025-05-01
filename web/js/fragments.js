

class Fragment {
    constructor(id, frag_name, location, params) {
        this.id = id;
        this.path = "fragments/" + frag_name + ".html";
        this.params = params;
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
            for (var key in this.params) {
                fragment = fragment.replaceAll("{{" + key + "}}", this.params[key]);
            }
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