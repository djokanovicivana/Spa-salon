<?php
//vraca sve zakazane termine zaposlenog


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once 'db.php';
$metoda = $_SERVER['REQUEST_METHOD'];
if($metoda == 'GET')
{
    if(!isset($_GET['idZaposlenog']))
    {
        echo json_encode(['poruka' => 'greska']);
        exit;
    }
    
    //iz sesije sa fronta poslati u url-u idZaposlenog i iz linka kad se klikne na neku uslugu proslediti njen id
    
    $idZaposlenog = $_GET['idZaposlenog'];
    $idUsluge = $_GET['idUsluge'];
    //za slucaj da se prikazuju podaci korisnika ime, prezime, br, email
    $sql = "SELECT * FROM appointment a INNER JOIN user c ON a.CustomerID=c.UserID WHERE EmployeeID = '$idZaposlenog' AND ServiceID = '$idUsluge' AND AppointmentDateTime > NOW() ORDER BY AppointmentDateTime DESC";
    
    $result = $conn->query($sql);
    if($result->num_rows == 0)
    {

        http_response_code(200);
        echo json_encode(['poruka' => 'Nema zakazanih termina u narednom periodu']);

    }
    else
    {
        
        $termini = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode(['termini'=> $termini]);
    }
}

?>