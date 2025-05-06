class Dropdown extends Fragment {

    /**
     * Classe permettant de crée un menu dropdown
     * @param {Array} list_button la liste des boutons du drop down
     * @param {Button} source l'objet bouton source de ce drop down, celui qui as généré son apparition
     */
    constructor(list_button, source) {
        super("drop_down_menu", list_button);
        this.source = source.dom_elem;
    }

    /**
     * Fonction qui permet d'initialiser les eventListener du fragment
     */
    async init() {
        this.source.addEventListener("mouseleave", (event) => {
            this.dom_elem.addEventListener("mouseleave", this.close.bind(this));
        });

        this.dom_elem.style.top = `calc(${((this.source.offsetTop + this.source.offsetHeight) / document.body.offsetHeight)*100}% + 5px)`;
        this.dom_elem.style.left = `${((this.source.offsetLeft - (this.source.offsetWidth/2)) / document.body.offsetWidth) * 100}%`;
    }

    /**
     * Fonction qui permet de fermer le drop down
     */
    close(){
        this.dom_elem.remove();
    }
}