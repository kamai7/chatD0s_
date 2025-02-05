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
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-thumb {
    background-color: var(--glow);
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    background-color: var(--dark);
    border-radius: 10px;
}

.window {
    left: 140px;
    top: 200px;
    position: relative;
    width: 700px;
    left: 140px;
    top: 200px;
    position: relative;
    width: 700px;
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
}
.window-title {
    padding: 0 5px;
}
.window-buttons {
    display: flex;
}
.window-button {
    color: white;
    padding: 0 5px;
    cursor: pointer;
}

.chat {
    display: flex;
    flex-direction: column;
    height: 200px;
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
.chat-message {
    display: flex;
    margin: 5px 0;
}
.chat-message-profile {
    width: 37px;
    height: 37px;
    margin-right: 10px;
    background-color: var(--secondary);
    border-radius: 50%;
}
.chat-message-username {
    color: #ff007b;
    font-weight: 500;
}
.chat-message-username::after {
    content: ' $';
}
.chat-message-content {
    font-weight: 100;
}
.chat-footer {
    display: flex;
    padding: 5px;
    background-color: var(--secondary);
    border: 1px solid;
    border-color: var(--border-glow);
    border-color: var(--border-glow);
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