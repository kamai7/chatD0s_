<div class="chat">
    <div class="chat-body">
        <?php include 'message.php'; ?>
        <?php include 'message.php'; ?>
        <?php include 'message.php'; ?>
        <?php include 'message.php'; ?>
        <?php include 'message.php'; ?> 
    </div>
    <div class="chat-footer">
        <input type="text" class="chat-input" placeholder="Ecrivez un message...">
        <div class="chat-send">Envoyer</div>
    </div>
</div>

<style>
.chat{
    margin: 5px;
    padding: 10px;
    background-color: var(--primary);
    border-radius: 6px;
    height: calc(100% - 51px);
}
.chat-body {
    height: calc(100% - 59px);
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