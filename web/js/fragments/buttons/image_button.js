class ImageButton extends Button {
    constructor(image_link, action, size = "70px") {
        super("image_button",image_link, action, "height: " + size + ";");
    }
}