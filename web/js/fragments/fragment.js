class Fragment {
    /**
     * Classe représentant un fragment HTML.
     * @param {String} frag_name - Le nom du fragment.
     * @param {Array} elems_list - La liste des éléments enfants du fragment. si il n'a qu'un seul enfant il vous suffit de le placer dans une list dont il est le seul élément
     */
    constructor(frag_name, elems_list = []) {
        this.id = Math.random().toString(36).substring(2); //todo id random
        this.dom_elem;
        this.frag_name = frag_name;
        this.elems_list = elems_list;
    }

    /**
     * Récupère le code HTML du fragment et l'insère dans le DOM, éxécute également la fonction init du fragment.
     * @param {String} parent_id - L'id de l'élément parent dans lequel insérer le fragment.
     * @param {String} placement - La position d'insertion du fragment ('beforeend' par défaut).
     */
    async insert(parent_id, placement = "beforeend") {
        var elem = await this.get_html();

        document.getElementById(parent_id).insertAdjacentHTML(placement, elem);
        this.dom_elem = document.getElementById(this.id);
        this.init();
        for(var elem of this.elems_list){
            await elem.insert(this.id + "-content");
        }
    }

    /**
     * Récupère le code HTML du fragment.
     * @returns {String} Le code HTML du fragment.
     */
    async get_html() {
        var fragment = await this.get_fragment();
        return fragment;
    }

    /**
     * Récupère le code HTML du fragment (selon l'attribut 'frag_name').
     * @returns {String} Le code HTML du fragment, ou rien en cas d'erreur.
     */
    async get_fragment(){
        try {
            var response = await fetch("fragments/" + this.frag_name + ".html");
            var fragment = await response.text();
            fragment = fragment.replaceAll("{{id}}", this.id);
            return fragment;
        } catch (error) {
            console.error('Erreur lors du chargement de ' + this.frag_name + ' : ', error);
        }
    }

    /**
     * Récupère le code HTML du fragment et le remplace dans le DOM.
     * pour actualiser le fragment
     */
    async reload() {
        var fragment = this.get_html().getElementById(this.id).content();
        this.dom_elem.innerHTML = fragment;
    }

    /**
     * fonction a définir par les fragments qui l'implémentent.
     * elle permet d'initlialiser les composants néscésaires au fonctionnement du fragment
     * tels que les eventListener par exemple
     */
    init(){}
}