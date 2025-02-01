<div class="chat-message">
    <div class="chat-message-profile"><img src="img/illustrations/not-log-user.png"></div>
    <div class="chat-message-body">
        <div class="chat-message-username">User</div>
        <div class="chat-message-content">helow wold! >w<</div>
    </div>
</div>
<style>
.chat-message {
    display: flex;
    margin: 5px 0;
}
.chat-message-profile {
    width: 37px;
    height: 37px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    aspect-ratio: 1/1;
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
</style>