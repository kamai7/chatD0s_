<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel=stylesheet type="text/css" href="style.css">
    <link rel="shortcut icon" href="img/ui/logo_main.ico" type="image/x-icon">
    <title>chatD0s_</title>
</head>
<body>

    <header id="header">

        <div>
            <span id="app-name">ChatD0s_</span>
        </div>
        <div>
            <div id="main-search-bar-container">
                <input type="search" id="main-search-bar" class="search-bar" size="25"  placeholder="le caca est cuit"/>
            </div>
        </div>
        <div id="header-button">
            <div class="button-icon" id="button-open-terminal">
                <img src="img/ui/terminal.png" class="button-icon-img small-button">
            </div>

            <div class="button-icon" class="header-user-icon">
                <img src="img/illustrations/not-log-user.png" class="button-icon-img header-user-icon">
            </div>

            <div class="button-icon" id="button-open-settings">
                <img src="img/ui/settings.png" class="button-icon-img small-button">
            </div>
        </div>

    </header>
    <main>
    <?php include 'fragments/nav.php'; ?>
        <div id="workspace">
            <div id="workspace-content">
            </div>
            <div id="workspace-windows">
            </div>
        </div>
    </main>


</body>
</html>
<script language="javascript" src="js/base_functions.js"></script>
<script language="javascript" src="js/window.js"></script>