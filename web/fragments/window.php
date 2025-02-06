<div class="window">
    <div class="window-header">
        <div class="window-title">chat n°0</div>
        <div class="window-buttons">
            <div class="window-button window-minimize">_</div>
            <div class="window-button window-maximize">[]</div>
            <div class="window-button window-close">X</div>
        </div>
    </div>
    <?php include 'terminal.php'; ?>
</div>

<style>
.window {
    left: 500px;
    top: 200px;
    position: absolute;
    width: 400px;
    height: 300px;
    min-width: 400px;
    min-height: 300px;
    
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--dark);
    border-radius: 6px;
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
    padding: 0 5px;
    cursor: move;
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