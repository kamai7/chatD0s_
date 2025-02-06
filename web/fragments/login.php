<div class="login">
    <div class="login-title">Login</div>
    <form class="login-form" action="login.php" method="post">
        <label for="username">Email or Username</label>
        <input type="text" class="login-field" name="username" placeholder="Username" required>
        <label for="password">Password</label>
        <input type="password" class="login-field" name="password" placeholder="Password" required>
        <input type="submit" class="login-submit" value="Login">
    </form>
</div>

<style>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.login-title {
    font-size: 28px;
    color: var(--text-primary);
    margin-bottom: 20px;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-form label {
    font-weight: 300;
    font-size: 13px;
    color: var(--text-secondary);
    align-self: flex-start;
}

.login-field {
    all: unset;
    width: 100%;
    margin: 3px 0 15px;
    padding: 5px 7px;
    border: 2px solid var(--dark-secondary);
    border-radius: 5px;
    background-color: var(--dark);
    color: white;
}

.login-submit {
    all: unset;
    width: 40%;
    text-align: center;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--glow);
    color: var(--text-primary);
    cursor: pointer;
    transition: 0.35s;
}

@keyframes login-submit-glow {
    0% { box-shadow: 0 0 17px 0px var(--glow); }
    50% { box-shadow: 0 0 19px 5px var(--glow); }
    100% { box-shadow: 0 0 17px 0px var(--glow); }
}
.login-submit:hover {
    background-color: var(--dark-secondary);
    border-color: gray;
    animation: login-submit-glow 1.5s infinite;
}
</style>