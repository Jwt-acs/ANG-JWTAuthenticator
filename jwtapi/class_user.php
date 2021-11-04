<?php
require_once 'dbconfig.php';

class USER
{	

	private $conn;
	public function __construct(){	
		$database = new Database();
		$db = $database->dbConnection();
		$this->conn = $db;
    }
	public function runQuery($sql){
		$stmt = $this->conn->prepare($sql);
		return $stmt;
	}
	
	public function getUserByEmailAndPassword($email, $password) {
		$pass=md5($password);
		$sql="SELECT * FROM userstab WHERE email = '$email'";
		$stmt = $this->conn->prepare($sql);
		$stmt->execute();
		if ($stmt->execute()) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
			$encrypted_password = $user['encrypted_password'];
           // $userstatus = $user['userstatus'];
			if ($encrypted_password == $pass) {
				return $user;
			 }
		
        } else {
            return NULL;
        }
    }
    
	
}
?>
