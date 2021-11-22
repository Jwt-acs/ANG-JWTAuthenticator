<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Headers: Content-Type");
	include 'class_user.php';
	$db = new USER();
	$request=file_get_contents('php://input');
	$data = json_decode($request);
	if($data!=''){
	$name=$data->username;
	$email=$data->useremail;
	$lastname=$data->userlastname;
	$password=$data->password;
	$pass=md5($password);
	$uid=uniqid('', true);
	$sql="INSERT INTO `userstab`(`unique_id`, `name`,`lastname`,`email`, `encrypted_password`,`auth`) VALUES ('$uid','$name','$lastname','$email','$pass','no')";
	$stmt = $db->runQuery($sql);
	$stmt->execute();
	if($stmt === TRUE){
	echo json_encode('register Successfully');
	 
    }else{
		echo json_encode(' User already exists');
	}
?>

