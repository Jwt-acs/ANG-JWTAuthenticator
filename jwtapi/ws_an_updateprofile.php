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
	$email=$data->email;
	$lastname=$data->lastname;
	$uid=$data->uid;
	]
	$sql="UPDATE `userstab` SET  `name`='$name',`lastname`='$lastname',`email`='$email' WHERE `unique_id`='$uid' ";
	$stmt = $db->runQuery($sql);
	$stmt->execute();
	echo json_encode('Updated Successfully');
	 
    }
?>


