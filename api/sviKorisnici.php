<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
require_once("db.php");

$metoda = $_SERVER['REQUEST_METHOD'];
if ($metoda == 'GET')
{
    $sql = "SELECT * FROM user WHERE roleID = 3";
    $result = $conn->query($sql);
    if($result->num_rows == 0)
    {
        http_response_code(200);
        echo json_encode(['poruka' => 'Nema prijavljenih korisnika']);

    }
    else
    {
        
        $korisnici = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(["korisnici"=> $korisnici]);   
    }
}
?>