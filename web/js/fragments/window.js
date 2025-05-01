class Window extends Fragment {
    constructor(title, content) {
        super("window");
        this.title = title;
        this.content = content;

        this.pos_left = 0;
        this.pos_top = 0;
        this.width = 500;
        this.height = 300;

        this.maximized = false;
        this.minimized = false;
    }

    async init() {
        this.dom_elem = document.getElementById(this.id);

        const title = this.dom_elem.getElementsByClassName("window-title")[0];
        title.addEventListener("mousedown", this.drag);

        const minimize_button = this.dom_elem.getElementsByClassName("window-minimize")[0];
        minimize_button.addEventListener("click", this.minimize.bind(this));

        const close_button = this.dom_elem.getElementsByClassName("window-close")[0];
        close_button.addEventListener("click", this.close.bind(this));
    }

    async get_html() {
        var html = await this.get_fragment();
        html = html.replaceAll("{{titles}}", this.title);
        html = html.replaceAll("{{content}}", await this.content.get_html());
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

        const offsetX = event.clientX - this.dom_elem.offsetLeft;
        const offsetY = event.clientY - this.dom_elem.offsetTop;

        const workspace = document.getElementById("workspace-content");
        const nav = document.getElementById("nav");

        const limitTop = document.getElementById("header")?.offsetHeight || 0;
        const limitLeft = nav ? nav.offsetWidth : 0;
        const workspaceWidth = workspace ? workspace.offsetWidth : window.innerWidth;
        const workspaceHeight = workspace ? workspace.offsetHeight : window.innerHeight;

        function moveAt(e) {
            const newLeft = Math.max(limitLeft, Math.min(e.clientX - offsetX, (limitLeft + workspaceWidth - this.dom_elem.offsetWidth)));
            const newTop = Math.max(limitTop, Math.min(e.clientY - offsetY, (limitTop + workspaceHeight - this.dom_elem.offsetHeight)));
            
            if (e.clientY <= limitTop + 1){
                this.set_maximized(true);
            } else {
                this.set_maximized(false);
                this.set_pos(newLeft, newTop);
            }
        }

        function stopMove() {
            document.removeEventListener("mousemove", moveAt);
            document.removeEventListener("mouseup", stopMove);
        }

        document.addEventListener("mousemove", moveAt);
        document.addEventListener("mouseup", stopMove);
    }

    /**
     * Défini si la fenêtre est maximisée ou non.
     * @param {boolean} bool - Si la fenêtre est maximisée ou non. 
     */
    set_maximized(bool) {
        // Si la valeur actuelle est déjà celle demandée, ne rien faire.
        if (this.maximized === bool) return;
        
        this.maximized = bool;

        if (bool) {
            this.dom_elem.style.width = "100%";
            this.dom_elem.style.height = "100%";
            this.dom_elem.style.left = "0px";
            this.dom_elem.style.top = "0px";
        } else {
            this.dom_elem.style.width = `${this.width}px`;
            this.dom_elem.style.height = `${this.height}px`;
            this.dom_elem.style.left = `${this.pos_left}px`;
            this.dom_elem.style.top = `${this.pos_top}px`;
        }
    }

    /**
     * Listener qui minimise la fenêtre.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    minimize(event) {
        this.minimized = true;
        this.dom_elem.classList.add("window-minimized");

        // On clone l'élément pour le réinsérer dans le DOM
        var tempElement = this.dom_elem.cloneNode(true);
        document.getElementById("workspace-windows").insertAdjacentElement("afterbegin", tempElement);
        
        // On enlève l'élément d'origine du DOM
        this.dom_elem.remove();

        // On récupère l'élément minimisé
        this.dom_elem = document.getElementById(this.id);

        /*var windowElement = elem.closest(".window");
        var chat_name = windowElement.getElementsByClassName("window-title")[0].innerText;
        windowElement.remove();
    
        var tempElement = document.createElement('div');
        tempElement.innerHTML = await load_fragment("fragments/window_minimised.php");
        tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
        document.getElementById("workspace-windows").insertAdjacentHTML("afterbegin", tempElement.innerHTML);*/
    }

    /**
     * Listener qui réouvre une fenêtre minimisée.
     * @param {MouseEvent} event - L'événement de la souris.
     */
    retrieve(event) {
        // TODO : Réouvrir la fenêtre minimisée
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
        this.dom_elem.appendChild(this.dom_elem);
    }
}