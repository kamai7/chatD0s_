class TextButton extends Button {

    /**
     * Classe permettant de crée un bouton texte
     * @param {String} text le texte affiché sur le bouton
     * @param {Function} action la fonction qui sera appelé lorsque le bouton est cliqué
     * @param {String} size taille du texte a spécifier sous forme d'un argument css
     * @param {String} color couleur du texte a spécifier sous forme d'un argument css
     */
    constructor(text, action, size = "1em", color = "white") {
        super("text_button",text, action, "font-size: " + size + "; color: " + color + ";");
        self.color = color;
    }
}