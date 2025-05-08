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

/**
 * Classe permettant de crée un menu dropdown
 */
class Dropdown extends Fragment {

    /**
     * Classe permettant de crée un menu dropdown
     * @param {Array} list_button la liste des boutons du drop down
     */
    constructor(list_button) {
        super("drop_down_menu", list_button);
    }

    /**
     * Fonction qui permet d'initialiser les eventListener du fragment
     */
    async init(pos_x, pos_y) {
        this.dom_elem.addEventListener("mouseleave", this.close.bind(this));
        this.dom_elem.style.top = pos_y + "px";
        this.dom_elem.style.left = pos_x + "px";
    }

    /**
     * Fonction qui permet de fermer le drop down
     */
    close(){
        this.dom_elem.remove();
    }

    async insert(parent_id, pos_x, pos_y) {
        var elem = await this.get_html();

        document.getElementById(parent_id).insertAdjacentHTML("beforeend", elem);
        this.dom_elem = document.getElementById(this.id);
        this.init(pos_x, pos_y);
        for(var elem of this.elems_list){
            await elem.insert(this.id + "-content");
        }
    }
}

/**
 * Classe permettant de crée un bouton image
 */
class ImageButton extends Button {

    /**
     * Classe permettant de crée un bouton image
     * @param {String} image_link url de l'image
     * @param {Function} action la fonction qui sera appelé lorsque le bouton est cliqué
     * @param {String} size hauteur du bouton a spécifier sous forme d'un argument css
     */
    constructor(image_link, action, size = "70px") {
        super("image_button",image_link, action, "height: " + size + ";");
    }
}

/**
 * Classe permettant de crée un bouton texte
 */
class TextButton extends Button {

    /**
     * Classe permettant de crée un bouton texte
     * @param {String} text le texte affiché sur le bouton
     * @param {Function} action la fonction qui sera appelé lorsque le bouton est cliqué
     * @param {Int} size taille du texte a spécifier sous forme d'un entier qui sera transformé en argument css
     * @param {String} color couleur du texte a spécifier sous forme d'un argument css
     * @param {Boolean} underline indique si le texte doit avoir un soulignement
     */
    constructor(text, action, size = 1, color = "white", underline = false) {
        super("text_button",text, action, "font-size: " + size + "em; color: " + color + ";" + (underline ? "text-decoration: underline;" : ""));
        self.color = color;
    }
}