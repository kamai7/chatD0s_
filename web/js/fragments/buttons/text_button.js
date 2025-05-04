class TextButton extends Button {
    constructor(text, action, size = "1em", color = "white") {
        super("text_button",text, action, "font-size: " + size + "; color: " + color + ";");
        self.color = color;
    }
}