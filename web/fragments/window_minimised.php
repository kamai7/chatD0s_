<div class="window-minimized wind">
    <div class="window-title"></div>
    <div class="window-buttons">
        <div class="window-button window-maximize" onclick="window_maximize(this)">[]</div>
        <div class="window-button window-close">X</div>
    </div>
</div>

<style>
.window-minimized {
    display: flex;
    flex-direction: row;
    background-color: var(--dark);
    border-radius: 6px 6px 0 0;
    padding: 5px;
}

.window-header {
    color: var(--text-secondary);
    display: flex;
    padding-top: 2px;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.window-title {
    width: 100%;
    padding-right: 10px;
}

.window-buttons {
    display: flex;
    margin-right: 5px;
}

.window-button {
    color: white;
    padding: 0 5px;
    cursor: pointer;
}
.window-button:hover {
    transition: 0.2s;
    background-color: rgba(255, 255, 255, 0.1);
}
.window-close:hover{
    transition: 0.2s;
    background-color: rgba(255, 0, 0, 0.5);
}
</style>