class Window extends Fragment {
    /**
     * Crée une nouvelle instance de la classe Window.
     * @param {String} title - Le titre de la fenêtre.
     * @param {Fragment} content - Le contenu de la fenêtre.
     * @param {boolean} maximized - Si la fenêtre est maximisée ou non (false par défaut).
     * @param {number} width - La largeur de la fenêtre (0 par défaut).
     * @param {number} height - La hauteur de la fenêtre (0 par défaut).
     */
    constructor(title, content, maximized=false, width=400, height=300, title_color=["white"]) {
        super("window",[content]);
        this.title = title;

        this.maximized = maximized;
        this.minimized = false;

        this.left = 0;
        this.top = 0;
        this.width = width;
        this.height = height;
        this.title_color = title_color;
    }

    async init() {
        this.set_size(this.width, this.height);

        if (this.minimized) {
            const retrieve_button = this.dom_elem.getElementsByClassName("window-minimized-title")[0];
            retrieve_button.addEventListener("click", this.retrieve.bind(this));
        } else {
            const title = this.dom_elem.getElementsByClassName("window-header-movable")[0];
            title.addEventListener("mousedown", this.drag.bind(this));

            const minimize_button = this.dom_elem.getElementsByClassName("window-minimize")[0];
            minimize_button.addEventListener("click", this.minimize.bind(this));

            const maximize_button = this.dom_elem.getElementsByClassName("window-maximize")[0];
            maximize_button.addEventListener("click", this.toggle_maximized.bind(this));
            
            this.dom_elem.addEventListener("click", this.focus.bind(this));

            const resizers = this.dom_elem.getElementsByClassName("window-resizer");
            for (let i = 0; i < resizers.length; i++) {
                resizers[i].addEventListener("mousedown", this.resize.bind(this));
            }
        }

        const close_button = this.dom_elem.getElementsByClassName("window-close")[0];
        close_button.addEventListener("click", this.close.bind(this));
    }

    async get_html() {
        let html = await this.get_fragment();
        let colors_text = "";
        for (let color of this.title_color) {
            colors_text +=  ", " + color;
        }
        html = html.replaceAll("{{title}}", this.title);
        html = html.replaceAll("{{window_name_color}}", colors_text);
        return html;
    }

    async insert(parent_id, placement = "beforeend") {
        const html = await this.get_html();

        document.getElementById(parent_id).insertAdjacentHTML(placement, html);
        this.dom_elem = document.getElementById(this.id);
        this.init();
        if (!this.minimized) {
            for(let elem of this.elems_list){
                await elem.insert(this.id + "-content");
            }
        }
    }

    /**
     * Change la taille de la fenêtre.
     * @param {number} w - La largeur de la fenêtre.
     * @param {number} h - La hauteur de la fenêtre.
     */
    set_size(w, h) {
        this.width = w;
        this.height = h;
        this.dom_elem.style.width = `${w}px`;
        this.dom_elem.style.height = `${h}px`;
    }

    /**
     * Change la position de la fenêtre.
     * @param {number} x - La position horizontale de la fenêtre.
     * @param {number} y - La position verticale de la fenêtre.
     */
    set_pos(x, y) {
        this.left = x;
        this.top = y;
        this.dom_elem.style.left = `${x}px`;
        this.dom_elem.style.top = `${y}px`;
    }

    /**
     * Listener qui déplace la fenêtre en fonction de la position de la souris.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    drag(event) {
        this.focus();

        // Listener pour le mouvement de la souris
        const moveListener = ((e) => {
            const newLeft = this.left + e.movementX;
            const newTop = this.top + e.movementY;
            this.set_maximized(newTop <= 0);
            this.set_pos(newLeft, newTop);
        }).bind(this);

        // Listener pour le relâchement du bouton de la souris
        const stopListener = ((e) => {
            document.removeEventListener("mousemove", moveListener);
            document.removeEventListener("mouseup", stopListener);
            this.set_pos(this.left, Math.max(0, this.top));
        }).bind(this);

        document.addEventListener("mousemove", moveListener);
        document.addEventListener("mouseup", stopListener);
    }

    /**
     * Défini si la fenêtre est maximisée ou non.
     * @param {boolean} bool - Si la fenêtre est maximisée ou non. 
     */
    set_maximized(bool) {
        // Si la valeur est différente de l'état actuel, on inverse l'état
        if (this.maximized !== bool) {
            this.maximized = bool;
            this.dom_elem.classList.toggle("window-maximized");
        }
    }

    /**
     * Listener qui inverse l'état de maximisation de la fenêtre.
     */
    toggle_maximized() {
        this.set_maximized(!this.maximized);
    }

    /**
     * Listener qui minimise la fenêtre.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    async minimize(event) {
        this.minimized = true;
        this.frag_name = "window_minimized";

        // On remplace l'ancien élément par le nouvel élément mis au bon endroit
        this.dom_elem.remove();
        await this.insert("workspace-windows", "afterbegin")
    }

    /**
     * Listener qui réouvre une fenêtre minimisée.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    async retrieve(event) {
        this.minimized = false;
        this.frag_name = "window";

        // On remplace l'ancien élément par le nouvel élément mis au bon endroit
        this.dom_elem.remove();
        await this.insert("workspace-content", "afterbegin");

        this.set_pos(this.left, this.top);
    }

    /**
     * Listener qui ferme la fenêtre.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    close(event) {
        this.dom_elem.remove();
    }

    /**
     * Focus la fenêtre actuelle en la déplaçant au premier plan.
     */
    focus() {
        // On déplace la fenêtre au premier plan si elle n'est pas minimisée
        // et qu'elle n'est pas déjà au premier plan
        if (!this.minimized && this.dom_elem.parentNode.querySelector(".window:last-child") !== this.dom_elem) {
            this.dom_elem.parentNode.appendChild(this.dom_elem);
        }
    }

    /**
     * Listener qui redimensionne la fenêtre en fonction de la position de la souris.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    resize(event) {
        const currentResizer = event.target;

        const prevX = event.clientX;
        const prevY = event.clientY;
        const prevWidth = this.width;
        const prevHeight = this.height;
        const prevLeft = this.left;
        const prevTop = this.top;

        const workspace = document.getElementById("workspace-content");
        const xMin = workspace.offsetLeft;
        const yMin = workspace.offsetTop;
        const xMax = xMin + workspace.offsetWidth;
        const yMax = yMin + workspace.offsetHeight;

        const moveListener = ((e) => {
            let newWidth = prevWidth;
            let newHeight = prevHeight;
            let newLeft = prevLeft;
            let newTop = prevTop;

            const movX = Math.min(xMax, Math.max(xMin, e.clientX)) - prevX;
            const movY = Math.min(yMax, Math.max(yMin, e.clientY)) - prevY;
            
            if (currentResizer.classList.contains("br")) {
                newWidth += movX;
                newHeight += movY;
            }
            else if (currentResizer.classList.contains("bl")) {
                newWidth -= movX;
                newHeight += movY;
                newLeft += movX;
            }
            else if (currentResizer.classList.contains("tr")) {
                newWidth += movX;
                newHeight -= movY;
                newTop += movY;
            }
            else if (currentResizer.classList.contains("tl")) {
                newWidth -= movX;
                newHeight -= movY;
                newLeft += movX;
                newTop += movY;
            }
            else if (currentResizer.classList.contains("t")) {
                newHeight -= movY;
                newTop += movY;
            }
            else if (currentResizer.classList.contains("b")) {
                newHeight += movY;
            }
            else if (currentResizer.classList.contains("l")) {
                newWidth -= movX;
                newLeft += movX;
            }
            else if (currentResizer.classList.contains("r")) {
                newWidth += movX;
            }

            this.set_size(newWidth, newHeight);
            this.set_pos(newLeft, newTop);
        }).bind(this);

        const stopListener = ((e) => {
            document.removeEventListener("mousemove", moveListener);
            document.removeEventListener("mouseup", stopListener);
            const style = window.getComputedStyle(this.dom_elem, null);
            // Définir la taille de la fenêtre en fonction de la taille du contenu
            // Au cas où la fenêtre est trop petite
            this.set_size(this.dom_elem.offsetWidth, this.dom_elem.offsetHeight);
        }).bind(this);
        
        document.addEventListener("mousemove", moveListener);
        document.addEventListener("mouseup", stopListener);
    }
}