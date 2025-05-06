class Chat extends Fragment{

    /**
     * crée un nouvel élément chat qui se ploace dans une windowet qui peut contenir des messages. contiens aussi la barre de saisie et le bouton d'envoie
     * @param {Array} messages Liste des objets messages contenus dans le chat
     */
    constructor(messages) {
        super("chat", messages);
    }
}