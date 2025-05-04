class Window extends Fragment {
    /**
     * Crée une nouvelle instance de la classe Window.
     * @param {String} title - Le titre de la fenêtre.
     * @param {Fragment} content - Le contenu de la fenêtre.
     * @param {boolean} maximized - Si la fenêtre est maximisée ou non (false par défaut).
     * @param {number} width - La largeur de la fenêtre (0 par défaut).
     * @param {number} height - La hauteur de la fenêtre (0 par défaut).
     */
    constructor(title, content, maximized=false, width=0, height=0) {
        super("window");
        this.title = title;
        this.content = content;

        this.maximized = maximized;
        this.minimized = false;

        this.pos_left = 0;
        this.pos_top = 0;
        this.width = width;
        this.height = height;
    }

    async init() {
        this.set_size(this.width, this.height);

        if (this.minimized) {
            const retrieve_button = this.dom_elem.getElementsByClassName("window-title")[0];
            retrieve_button.addEventListener("click", this.retrieve.bind(this));
        } else {
            const title = this.dom_elem.getElementsByClassName("window-title")[0];
            title.addEventListener("mousedown", this.drag.bind(this));

            const minimize_button = this.dom_elem.getElementsByClassName("window-minimize")[0];
            minimize_button.addEventListener("click", this.minimize.bind(this));

            const maximize_button = this.dom_elem.getElementsByClassName("window-maximize")[0];
            maximize_button.addEventListener("click", this.toggle_maximized.bind(this));
            
            this.dom_elem.addEventListener("click", this.focus.bind(this));
        }

        const close_button = this.dom_elem.getElementsByClassName("window-close")[0];
        close_button.addEventListener("click", this.close.bind(this));
    }

    async get_html() {
        var html = await this.get_fragment();
        html = html.replaceAll("{{title}}", this.title);
        if (!this.minimized) {
            html = html.replaceAll("{{content}}", await this.content.get_html());
        }
        return html;
    }

    /**
     * Change la taille de la fenêtre.
     * @param {number} w - La largeur de la fenêtre.
     * @param {number} h - La hauteur de la fenêtre.
     */
    set_size(w, h) {
        this.width = w;
        this.height = h;
        this.dom_elem.style.w = `${w}px`;
        this.dom_elem.style.h = `${h}px`;
    }

    /**
     * Change la position de la fenêtre.
     * @param {number} x - La position horizontale de la fenêtre.
     * @param {number} y - La position verticale de la fenêtre.
     */
    set_pos(x, y) {
        this.pos_left = x;
        this.pos_top = y;
        this.dom_elem.style.left = `${x}px`;
        this.dom_elem.style.top = `${y}px`;
    }

    /**
     * Listener qui déplace la fenêtre en fonction de la position de la souris.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    drag(event) {
        this.focus();

        const workspace = document.getElementById("workspace-content");

        const mouseOffX = event.clientX - this.pos_left;
        const mouseOffY = event.clientY - this.pos_top;
        
        // Récupère les positions min et max, en fonction de la taille du workspace
        const limitRight = workspace.offsetWidth - this.dom_elem.offsetWidth;
        const limitBottom = workspace.offsetHeight - this.dom_elem.offsetHeight;

        // Listener pour le mouvement de la souris
        const moveListener = ((e) => {
            const newLeft = this.pos_left + e.movementX;
            const newTop = this.pos_top + e.movementY;

            this.set_maximized(newTop <= 0);
            this.set_pos(newLeft, newTop);
        }).bind(this);

        // Listener pour le relâchement du bouton de la souris
        const stopListener = ((e) => {
            document.removeEventListener("mousemove", moveListener);
            document.removeEventListener("mouseup", stopListener);

            this.set_pos(this.pos_left, Math.max(0, this.pos_top));
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

        this.set_pos(this.pos_left, this.pos_top);
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
        if (!this.minimized) {
            this.dom_elem.parentNode.appendChild(this.dom_elem);
        }
    }
}