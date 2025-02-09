<?php
header('Content-Type: application/json');

$servers = array('minecraft', 'codeium', 'fight for glory', 'BUT info', "serv de l'homme génial");
$friends = array('jean','kyami','jf kamp','mimich','kamaï','rag');

echo json_encode([
    'servers' => $servers,
    'friends' => $friends
]);
?>
