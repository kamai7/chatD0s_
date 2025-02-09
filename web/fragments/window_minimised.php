<div class="window window-minimized">
    <div class="window-title" onclick="window_retrieve(this)"></div>
    <div class="window-button window-close" onclick="window_close(this)">X</div>
</div>

<style>
.window.window-minimized {
    display: flex;
    flex-direction: row;
    background-color: var(--dark);
    border-radius: 6px 6px 0 0;
    padding: 5px;
}

.window-title {
    width: 100%;
    padding: 0 5px;
    cursor: move;
}

.window-button {
    color: white;
    padding: 0 5px;
    cursor: pointer;
}

.window-close:hover{
    transition: 0.2s;
    background-color: rgba(255, 0, 0, 0.5);
}
</style>