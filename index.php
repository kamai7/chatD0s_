<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel=stylesheet type="text/css" href="style.css">
    <link rel="shortcut icon" href="img/ui/logo_main.ico" type="image/x-icon">
    <title>chatD0s_</title>
</head>
<body>

    <header>

        <div class="appNameContainer">
            <h1 class="appName" id="appName">
                > ChatD0s_
            </h1>
        </div>
        
        <div class="searchBarContainer">
            <div class="searchBar">
                <span>C:\></span>
                <input type="search" spellcheck="false" role="combobox" aria-expanded="false" aria-live="polite" autocomplete="off" maxlength="21" placeholder=". . ." id="searchBar">
                <img src="img/ui/loupe.png">
            </div>
            <div class="search" id="search"></div>
            
        </div>

        <div class="accountElements">
            <div class="signIn" onclick="singInPage()">
                Sign In
            </div>
            <div class="LogIn" onclick="logInPage()">
                Log In
            </div>
            <div class="Profile"  id="accountProfileLogo" onclick="ProfilePage()">
                <?php
                    if (isset($_SESSION['nickname']) && !empty($_SESSION['nickname'])) {
                        echo '<img src="' . $_SESSION['pp'] . '">';
                    }else{
                        echo '<img src="http://83.205.122.1/chatD0s_/img/ui/notConnected.png">';
                    }
                ?>

            </div>

        </div>
        
    </header>

    <div class="main_elements">
        
        <nav>
            <div class="chat_elements" id="friends_list">
                    
                <?php include 'elements/friendNav.php'; ?>
                <?php include 'elements/friendNav.php'; ?>
                <?php include 'elements/friendNav.php'; ?>

            <div class="border"></div>
        </nav>


        <main id="main">

        </main>

    </div>
</body>
</html>
<script src="engine.js" language="javascript"></script>
<script src="tools/movingWindows.js" language="javascript"></script>
<script src="tools/menu.js" language="javascript"></script>
