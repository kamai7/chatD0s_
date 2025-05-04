class Chat extends Fragment{
    constructor(messages) {
        super("chat", messages);
    }

    async get_html(placement = "beforeend"){
        var fragment = await this.get_fragment();
        return fragment;
    }
}