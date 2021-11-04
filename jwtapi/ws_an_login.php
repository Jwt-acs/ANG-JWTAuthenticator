<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Headers: Content-Type");
	include 'class_user.php';
	$db = new USER();
	$request=file_get_contents('php://input');
	$data = json_decode($request);
	if($data!=''){
	$email=$data->username;
	$password=$data->password;
	$user = $db->getUserByEmailAndPassword($email,$password);
	if ($user) {
		$id=$user["user_id"];
		$unique_id=$user["unique_id"];
		$datas["uid"] = $user["unique_id"];
		$datas["email"] = $user["email"];
		$datas["name"] = $user["name"];
		$datas["lastname"] = $user["lastname"];
		$datas["uid"] = $user["unique_id"];
		$datas["deviceuniqid"] = $user["deviceuniqID"];
		$datas["userid"] = $id;
		$datas["auth"] = $user["auth"];
		$dataarray[] = $datas;
		echo json_encode($dataarray);
		}
	 
    }
?>

