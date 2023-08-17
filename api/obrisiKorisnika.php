<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once("db.php");
// u linku idKorisnika
$idKorisnika = $_GET['idKorisnika'];

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  
  $sql = "DELETE FROM user WHERE UserID = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $idKorisnika);

  if ($stmt->execute()) {
    echo json_encode(['poruka' => 'Korisnik uspešno obrisan']);
  } else {
    echo json_encode(['poruka' => 'Greška pri brisanju korisnika']);
  }
  

  $stmt->close();
  $conn->close();
}
?>
