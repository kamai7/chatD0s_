class Chat extends Fragment{

    /**
     * crée un nouvel élément chat qui se ploace dans une windowet qui peut contenir des messages. contiens aussi la barre de saisie et le bouton d'envoie
     * @param {Array} messages Liste des objets messages contenus dans le chat
     */
    constructor(messages) {
        super("chat", messages);
    }
}

class Terminal extends Fragment {

    init(){
        this.dom_elem.addEventListener('keydown', async (e) => {
            if (e.key === 'Enter') {
                let command = this.dom_elem.getElementsByClassName("terminal-input")[0].innerText;
                let prompt = new Message(USER_ICON, "hihihi :3", command);
                await prompt.insert(this.id + "-content");
                this.dom_elem.getElementsByClassName("terminal-input")[0].innerText = "";
            }
        });
    }

    constructor(terminal_prompts) {
        super("terminal", terminal_prompts);
    }
}