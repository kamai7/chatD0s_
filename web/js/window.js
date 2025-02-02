document.querySelectorAll(".window").forEach(windowElement => {
    windowElement.addEventListener("mousedown", function() {
        displayBefore(this);
    });
});

document.querySelectorAll(".window-title").forEach(header => {
    header.addEventListener("mousedown", function (event) {
        let windowElement = this.closest(".window"); // Trouve la fenêtre parente
        if (!windowElement) return;

        let offsetX = event.clientX - windowElement.offsetLeft;
        let offsetY = event.clientY - windowElement.offsetTop;

        let limitTop = document.getElementById("header")?.offsetHeight || 0;
        let workspace = document.getElementById("workspace-content");
        let nav = document.getElementById("nav");

        let limitLeft = nav ? nav.offsetWidth : 0;
        let workspaceWidth = workspace ? workspace.offsetWidth : window.innerWidth;
        let workspaceHeight = workspace ? workspace.offsetHeight : window.innerHeight;

        function moveAt(e) {
            let newLeft = Math.max(limitLeft, Math.min(e.clientX - offsetX, limitLeft + workspaceWidth - windowElement.offsetWidth));
            let newTop = Math.max(limitTop, Math.min(e.clientY - offsetY, (limitTop + workspaceHeight - windowElement.offsetHeight)));

            windowElement.style.left = `${newLeft}px`;
            windowElement.style.top = `${newTop}px`;
        }

        function stopMove() {
            document.removeEventListener("mousemove", moveAt);
            document.removeEventListener("mouseup", stopMove);
        }

        document.addEventListener("mousemove", moveAt);
        document.addEventListener("mouseup", stopMove);
    });
});

function displayBefore(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
}

document.querySelectorAll(".window-close").forEach(windowElement => {
    windowElement.addEventListener("mousedown", function() {
        var windowElement = this.closest(".wind");
        windowElement.remove();
    });
})

document.querySelectorAll(".window-maximize").forEach(windowElement => {
    windowElement.addEventListener("mousedown", function() {
        let windowElement = this.closest(".wind");
        let limitTop = document.getElementById("header")?.offsetHeight || 0;
        let workspace = document.getElementById("workspace-content");
        let nav = document.getElementById("nav");
        if(windowElement.offsetWidth > workspace.offsetWidth -2 && windowElement.offsetHeight > workspace.offsetHeight -2){
            windowElement.style.top = "300px";
            windowElement.style.left = "500px";

            windowElement.style.width = "500px";
            windowElement.style.height = "300px";
        }else{
            windowElement.style.top = limitTop + "px";
            windowElement.style.left = nav ? nav.offsetWidth + "px" : "0px";

            windowElement.style.width = workspace.offsetWidth + "px";
            windowElement.style.height = workspace.offsetHeight + "px";
        }
    });
})

document.querySelectorAll(".window-minimize").forEach(windowElement => {
    windowElement.addEventListener("mousedown", function() {
        var windowElement = this.closest(".window");
        var chat_name = windowElement.getElementsByClassName("window-title")[0].innerText;
        windowElement.remove();
        fetch('fragments/window_minimised.php')
        .then(response => response.text())
        .then(data => {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = data;
            tempElement.getElementsByClassName('window-title')[0].textContent = chat_name;
            document.getElementById("workspace-windows").insertAdjacentHTML("afterbegin", tempElement.innerHTML);
        })
        .catch(error => console.error('Erreur lors du chargement de windows.php:', error));
    });
})