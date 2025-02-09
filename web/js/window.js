//fonctions

var max = false;

function window_drag(event,elem) {
    var windowElement = elem.parentNode.parentNode;
    display_before(windowElement);
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
        var newLeft = Math.max(limitLeft, Math.min(e.clientX - offsetX, (limitLeft + workspaceWidth - windowElement.offsetWidth)));
        var newTop = Math.max(limitTop, Math.min(e.clientY - offsetY, (limitTop + workspaceHeight - windowElement.offsetHeight)));
        if (e.clientY <= limitTop + 1){
            if (!max) {
                window_maximize(elem);
                max = true;
            }
        }else{
            if (max) {
                window_maximize(elem);
            }
            max = false;
            windowElement.style.left = `${newLeft}px`;
            windowElement.style.top = `${newTop}px`;
        }
    }

    function stopMove() {
        document.removeEventListener("mousemove", moveAt);
        document.removeEventListener("mouseup", stopMove);
    }

    document.addEventListener("mousemove", moveAt);
    document.addEventListener("mouseup", stopMove);
}

function window_maximize(e) {
    var elem = e.closest(".window");
    let limitTop = document.getElementById("header")?.offsetHeight || 0;
    let workspace = document.getElementById("workspace-content");
    let nav = document.getElementById("nav");
    if (elem.offsetWidth > workspace.offsetWidth-2 && elem.offsetHeight > workspace.offsetHeight-2) {
        elem.style.top = "300px";
        elem.style.left = "500px";

        elem.style.width = "500px";
        elem.style.height = "300px";
        return false;
    } else {
        elem.style.top = limitTop + "px";
        elem.style.left = nav ? nav.offsetWidth + "px" : "0px";

        elem.style.width = workspace.offsetWidth + "px";
        elem.style.height = workspace.offsetHeight + "px";
        return true;
    }

}

function window_close(elem) {
    var windowElement = elem.closest(".window");
    windowElement.remove();
}

async function window_minimize(elem) {
    var windowElement = elem.closest(".window");
    var chat_name = windowElement.getElementsByClassName("window-title")[0].innerText;
    windowElement.remove();

    var tempElement = document.createElement('div');
    tempElement.innerHTML = await get_page("fragments/window_minimised.php");
    tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
    document.getElementById("workspace-windows").insertAdjacentHTML("afterbegin", tempElement.innerHTML);
}

async function window_retrieve(elem) {
    var windowElement = elem.closest(".window");
    var chat_name = windowElement.getElementsByClassName("window-title")[0].innerText;
    windowElement.remove();

    var tempElement = document.createElement('div');
    tempElement.innerHTML = await get_page("fragments/window.php");
    tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
    document.getElementById("workspace-content").insertAdjacentHTML("afterbegin", tempElement.innerHTML);
}