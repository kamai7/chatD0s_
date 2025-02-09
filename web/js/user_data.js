fetch("../server/users.php")
    .then(response => response.json())
    .then(data => {
        var SERVERS = data.servers;
        var USERS = data.friends;
    })
    .catch(error => console.error("Erreur lors de la récupération des données:", error));