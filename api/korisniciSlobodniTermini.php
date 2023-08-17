<?php
//slobodni termini za korisnike kada kliknu na neku uslugu?

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'db.php';
$metoda = $_SERVER['REQUEST_METHOD'];

if($metoda == 'GET')
{
    if(!isset($_GET['idUsluge']))
    {
        http_response_code(400);
        echo json_encode(['poruka' => 'greska']);
        exit;
    }
    
    $idUsluge = $_GET['idUsluge'];
    
    //za slucaj da su potrebne informacije o zaposlenom koji je dodao taj termin
    $sql = "SELECT * FROM appointment INNER JOIN user ON appointment.EmployeeID=user.UserID  WHERE appointment.ServiceID = '$idUsluge' AND AppointmentDateTime > NOW() AND available = 1 ORDER BY AppointmentDateTime DESC";
    
    $result = $conn->query($sql);
    if($result->num_rows == 0)
    {

        http_response_code(200);
        echo json_encode(['poruka' => 'Nema slobodnih termina za datu uslugu']);

    }
    else
    {
        
        $termini = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(['termini'=> $termini]);
    }
}

?>
