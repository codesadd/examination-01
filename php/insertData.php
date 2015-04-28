<?php 
require_once '../includes/db.php'; // The mysql database connection script

	$sub_div = $_GET['sub_div']; $sub_credit = $_GET['sub_credit']; $sub_year = $_GET['sub_year']; $sub_nsec = $_GET['sub_nsec'];
	$sub_type = $_GET['sub_type']; $sub_branch = $_GET['sub_branch']; $teach_code = $_GET['teach_code']; $sub_id = $_GET['sub_id'];
	
	$query="INSERT INTO subject_open 
			VALUES ('','$sub_div','$sub_credit','$sub_year','$sub_nsec','$sub_type','','$sub_branch','$teach_code','$sub_id')";

	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	$result = $mysqli->affected_rows;
	echo $result;
	//$json_response = json_encode($result);

?>
