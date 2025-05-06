class Button extends Fragment {

    /**
     * SuperClasse permettant de crée des fragments Boutons.
     * @param {String} frag_type image_button ou text_button
     * @param {String} link_appearance l'élément visible du bouton (le texte qui sera affiché ou bien l'image ...)
     * @param {Function} action la fonction qui sera appelé lorsque le bouton est cliqué
     * @param {String} style attribut qui contiens lu style css appliquable au bouton
     */
    constructor(frag_type,link_appearance, action, style) {
        super(frag_type);
        this.link_appearance = link_appearance;
        this.action = action;
        this.style = style;
    }

    /**
     * Fonction qui permet d'initialiser les eventListener du bouton
     */
    async init() {
        this.dom_elem.addEventListener("click", this.action.bind(this));
    }

    /**
     * Fonction qui permet de récupérer le code HTML du bouton
     * @returns {String} le code HTML du bouton
     */
    async get_html() {
        var fragment = await this.get_fragment();
        fragment = fragment.replaceAll("{{link_appearance}}", this.link_appearance);
        fragment = fragment.replaceAll("{{style}}", this.style);
        return fragment;
    }
}