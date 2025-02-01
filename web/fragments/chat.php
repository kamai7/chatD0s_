<div class="window">
    <div class="window-header">
        <div class="window-title">chat n°0</div>
        <div class="window-buttons">
            <div class="window-button window-minimize">_</div>
            <div class="window-button window-maximize">[]</div>
            <div class="window-button window-close">X</div>
        </div>
    </div>

    <div class="chat">
        <div class="chat-body">
            <?php include 'message.php'; ?>
            <?php include 'message.php'; ?>
            <?php include 'message.php'; ?>
        </div>
        <div class="chat-footer">
            <input type="text" class="chat-input" placeholder="Ecrivez un message...">
            <div class="chat-send">Envoyer</div>
        </div>
    </div>
</div>

<style>
.window {

    left: 140px;
    top: 200px;
    position: relative;
    height: 300px;
    width: 600px;
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
    cursor: move;
}
.window-title {
    padding: 0 5px;
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
.chat{
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 5px;
    padding: 10px;
    background-color: var(--primary);
    border-radius: 6px;
}
.chat-body {
    flex: 1;
    margin-bottom: 10px;
    padding: 5px;
    color: var(--text-primary);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.chat-footer {
    display: flex;
    padding: 5px;
    background-color: var(--secondary);
    border: 2px solid var(--border);
    filter: drop-shadow(0 0 5px var(--glow));
    border-radius: 12px;
}
.chat-input {
    all: unset;
    flex: 1;
    margin: 0 5px;
    color: var(--text-primary)
}
.chat-send {
    margin: 0 5px;
    background-color: var(--border-glow);
    background-color: var(--border-glow);
    border-radius: 12px;
    padding: 3px 7px;
    cursor: pointer;
}
</style>

<script language="javascript" src="engine.js"></script>