<nav id="nav">
    <div id="nav-selection">
        <div id="nav-selection-cross">
            <div class="button-icon button-bordered">
                <img src="img/ui/cross.png" class="button-icon-img">
            </div>
        </div>
        <div id="nav-selection-select">
            <span>Servers</span>
            <span>Chats</span>
        </div>
    </div>

    <div id="nav-social">
        <?php include 'social_container.php'; ?>
        <?php include 'social_container.php'; ?>
        <?php include 'social_container.php'; ?>
        <?php include 'social_container.php'; ?>
        <?php include 'social_container.php'; ?>
    </div>
</nav>
<style>
#nav-selection{
    height: 100px;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#nav-selection-cross{
    height: 50%;
    padding: 10px 0 0 10px;
}

#nav-selection-select{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50%;
}

#nav-selection-select > span{
    text-decoration: underline;
    color: rgb(68, 68, 68);
    cursor: pointer;
}

#nav-selection-select > span:hover{
    color: rgb(77, 196, 41);
    transition: 0.2s;
    transform: scale(1.1);
}
#nav-social{
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow-y: auto;
    gap: 10px;
}
</style>