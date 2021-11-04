<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST'); 
	require_once 'class_user.php';
	$user_home = new USER();
	$request=file_get_contents('php://input');
	$data = json_decode($request);
	$q=$data->q;
	if($q==1){
		
		$uid=$data->uid;
		$sql="UPDATE `userstab` SET `auth`='no' ,`deviceuniqID`=''  where `unique_id`='$uid'";
		$stmt=$user_home->runQuery($sql);
		$result = $stmt->execute();
		echo json_encode("Data saved successfully.");
	}
	else if($q==2){
		
		$uid=$data->uid;
		$authnumber=$data->authnumber;
		$sql="UPDATE `userstab` SET `auth`='yes' ,`deviceuniqID`='$authnumber'  where `unique_id`='$uid'";
		$stmt=$user_home->runQuery($sql);
		$result = $stmt->execute();
		echo json_encode("Data saved successfully.");
	}
	
		
?>

