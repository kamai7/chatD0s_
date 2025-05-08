class Message extends Fragment {

    /**
     * Crée une nouvelle instance de la classe Message
     * permet de créer des messages a afficher
     * @param {String} pp_link Lien de la photo de profil
     * @param {String} username Nom d'utilisateur de la personne envoyant le message
     * @param {String} content Contenu du message
     */
    constructor(pp_link, username, content) {
        super("message");
        this.pp_link = pp_link;
        this.username = username;
        this.content = content;
    }

    /**
     * Fonction qui permet de récupérer le code HTML du message
     * @returns {String} le code HTML du message
     */
    async get_html(){
        var html = await super.get_fragment();
        html = html.replaceAll("{{pp_link}}", this.pp_link);
        html = html.replaceAll("{{username}}", this.username);
        html = html.replaceAll("{{content}}", this.content);
        return html;
    }
}