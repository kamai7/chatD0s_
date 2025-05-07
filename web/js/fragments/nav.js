class Nav extends Fragment{
    constructor(social_elements, buttons) {
        super("nav", social_elements);
        this.buttons = buttons;
        this.dom_elem;
    }

    /**
     * Récupère le code HTML du fragment et l'insère dans le DOM, éxécute également la fonction init du fragment.
     * @param {String} parent_id - L'id de l'élément parent dans lequel insérer le fragment.
     * @param {String} placement - La position d'insertion du fragment ('beforeend' par défaut).
     */
    async insert(parent_id, placement = "beforeend") {
        var elem = await this.get_html();
        this.insered_position = placement;

        document.getElementById(parent_id).insertAdjacentHTML(placement, elem);
        this.dom_elem = document.getElementById(this.id);
        this.init();
        for(var social of this.elems_list){
            await social.insert(this.id + "-content");
        }
        for(var button of this.buttons){
            await button.insert("nav-selection-select");
        }
    }

}