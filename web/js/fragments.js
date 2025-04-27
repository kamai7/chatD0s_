/* Fonctions permettant de charger et d'afficher des fragments HTML dans la page principale. */


async function load_fragment(frag_name, values) {
    var fragment = await get_page("fragments/" + frag_name + ".html");
    for (var key in values) {
        fragment = fragment.replace("{{" + key + "}}", values[key]);
    }
    return fragment;
}