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