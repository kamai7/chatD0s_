class Chat extends Fragment{
    constructor(messages) {
        super("chat");
        this.messages = messages;
    }

    async get_html(placement = "beforeend"){
        var fragment = await this.get_fragment();
        var messages_html = '';
        for(var message of this.messages){
            messages_html += await message.get_html();
        }
        fragment = fragment.replaceAll("{{messages}}", messages_html);
        return fragment;
    }
}