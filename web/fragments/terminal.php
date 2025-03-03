<div class="terminal">
    <div class="terminal-body">
        <!-- Besoin du container sinon ça fait bugger la taille du terminal -->
        <div class="terminal-body-container">
            <?php include 'message.php' ?>
            <div class="terminal-line">azkelfjalkjzhflkjqhzeklfj;hqeui"hrliqjkbdfjkwbhelzijfhbqlzieujhnflkqjzbeklqg'rtliuqzelitglzeiuUGLI</div>
            <?php include 'message.php' ?>
            <div class="terminal-line">azkelfjalkjzhflkjqhzeklfj;hqeui"hrliqjkbdfjkwbhelzijfhbqlzieujhnflkqjzbeklqg'rtliuqzelitglzeiuUGLI</div>
            <?php include 'message.php' ?>
            <div class="terminal-line">azkelfjalkjzhflkjqhzeklfj;hqeui"hrliqjkbdfjkwbhelzijfhbqlzieujhnflkqjzbeklqg'rtliuqzelitglzeiuUGLI</div>
            <?php include 'message.php' ?>
            <div class="terminal-line">azkelfjalkjzhflkjqhzeklfj;hqeui"hrliqjkbdfjkwbhelzijfhbqlzieujhnflkqjzbeklqg'rtliuqzelitglzeiuUGLI</div>
        </div>
    </div>
    <div class="terminal-footer">
        <input type="text" class="terminal-input" placeholder="Ecrivez une commande..." autocomplete="off">
        <div class="terminal-send">Envoyer</div>
    </div>
</div>

<style>
.terminal {
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 10px;
    height: 100%;
    background-color: var(--dark-secondary);
    border-radius: 6px;
}

.terminal-body {
    flex-grow: 1;
    overflow: auto;
    min-height: 0;
    margin-bottom: 10px;
}

.terminal-body-container {
    /* magie noire */
    max-height: 0;
}

.terminal-body-container > .chat-message {
    margin: 10px 0;
}

.terminal-line {
    font-weight: 400;
    word-break: break-all;
}

.terminal-footer {
    display: flex;
    padding: 5px;
    background-color: var(--dark-secondary);
    border: 2px solid var(--border);
    filter: drop-shadow(0 0 5px var(--glow));
    border-radius: 12px;
}

.terminal-input {
    all: unset;
    flex-grow: 1;
    margin: 0 5px;
    color: var(--text-primary);
}

.terminal-send {
    margin: 0 5px;
    background-color: var(--border-glow);
    background-color: var(--border-glow);
    border-radius: 12px;
    padding: 3px 7px;
    cursor: pointer;
}
</style>