function displayBefore(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
}

document.querySelectorAll(".window-header").forEach(header => {
    header.addEventListener("mousedown", function (event) {
        let windowElement = this.parentNode; // Récupère la fenêtre parente
        displayBefore(windowElement);
        let offsetX = event.clientX - windowElement.offsetLeft;
        let offsetY = event.clientY - windowElement.offsetTop;

        function moveAt(e) {
            style = window.getComputedStyle(windowElement)
            limit_top = document.getElementById("header").offsetHeight;
            try {
                limit_left = document.getElementById("nav").offsetWidth;
            } catch(e) {
                limit_left = 0;
            }
            new_left = e.clientX - offsetX;
            new_top = e.clientY - offsetY;
            
            if (new_left > limit_left) {
                windowElement.style.left = new_left + "px";
            } else {
                windowElement.style.left = limit_left + "px";
            }

            if (new_top > limit_top) {
                windowElement.style.top = new_top + "px";
            } else {
                windowElement.style.top = limit_top + "px";
            }
        }

        function stopMove() {
            document.removeEventListener("mousemove", moveAt);
            document.removeEventListener("mouseup", stopMove);
        }

        document.addEventListener("mousemove", moveAt);
        document.addEventListener("mouseup", stopMove);
    });
});