function displayBefore(elemToDisplay) {
    var parentElement = elemToDisplay.parentNode;
    parentElement.appendChild(elemToDisplay);
}

document.querySelectorAll(".window-header").forEach(header => {
    header.addEventListener("mousedown", function (event) {
        let windowElement = this.closest(".window"); // Récupère la fenêtre parente
        displayBefore(windowElement);
        let offsetX = event.clientX - windowElement.offsetLeft;
        let offsetY = event.clientY - windowElement.offsetTop;

        function moveAt(e) {
            style = window.getComputedStyle(windowElement)
            limit_top = document.getElementById("header").offsetHeight;
            try {
                limit_left = document.getElementById("nav").offsetHeight;
            }catch(e) {
                limit_left = 0;
            }
            new_left = e.clientX - offsetX;
            new_top = e.clientY - offsetY;
            if(style.getPropertyValue('top') > limit_top + 'px' && style.getPropertyValue('left') > limit_left + 'px'){
                windowElement.style.left = e.clientX - offsetX + "px";
                windowElement.style.top = e.clientY - offsetY + "px";
            }else if(new_top > offsetX){
                windowElement.style.top = e.clientY - 101 + "px";
            }else{
                windowElement.style.left = e.clientX - 101 + "px";
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