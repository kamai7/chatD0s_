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