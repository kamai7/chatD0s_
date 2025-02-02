//fonctions



function window_drag(event,elem) {
    var windowElement = elem.parentNode.parentNode;
    displayBefore(windowElement);
    if (!windowElement) return;

    var offsetX = event.clientX - windowElement.offsetLeft;
    var offsetY = event.clientY - windowElement.offsetTop;

    var limitTop = document.getElementById("header")?.offsetHeight || 0;
    var workspace = document.getElementById("workspace-content");
    var nav = document.getElementById("nav");

    var limitLeft = nav ? nav.offsetWidth : 0;
    var workspaceWidth = workspace ? workspace.offsetWidth : window.innerWidth;
    var workspaceHeight = workspace ? workspace.offsetHeight : window.innerHeight;

    function moveAt(e) {
        var newLeft = Math.max(limitLeft, Math.min(e.clientX - offsetX, limitLeft + workspaceWidth - windowElement.offsetWidth));
        var newTop = Math.max(limitTop, Math.min(e.clientY - offsetY, (limitTop + workspaceHeight - windowElement.offsetHeight)));

        windowElement.style.left = `${newLeft}px`;
        windowElement.style.top = `${newTop}px`;
    }

    function stopMove() {
        document.removeEventListener("mousemove", moveAt);
        document.removeEventListener("mouseup", stopMove);
    }

    document.addEventListener("mousemove", moveAt);
    document.addEventListener("mouseup", stopMove);
}

function window_close(elem) {
    console.log(elem);
    var windowElement = elem.closest(".wind");
    windowElement.remove();
}

function window_maximize(e) {
    var elem = e.closest(".wind");
    let limitTop = document.getElementById("header")?.offsetHeight || 0;
    let workspace = document.getElementById("workspace-content");
    let nav = document.getElementById("nav");
    if(elem.offsetWidth > workspace.offsetWidth -2 && elem.offsetHeight > workspace.offsetHeight -2){
        elem.style.top = "300px";
        elem.style.left = "500px";

        elem.style.width = "500px";
        elem.style.height = "300px";
    }else{
        elem.style.top = limitTop + "px";
        elem.style.left = nav ? nav.offsetWidth + "px" : "0px";

        elem.style.width = workspace.offsetWidth + "px";
        elem.style.height = workspace.offsetHeight + "px";
    }

}

async function window_minimize(elem) {
    var windowElement = elem.closest(".wind");
    var chat_name = windowElement.getElementsByClassName("window-title")[0].innerText;
    windowElement.remove();

    var data = await get_page("fragments/window_minimised.php");
    var tempElement = document.createElement('div');
    tempElement.innerHTML = data;
    tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
    document.getElementById("workspace-windows").insertAdjacentHTML("afterbegin", tempElement.innerHTML);
}