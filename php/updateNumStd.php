<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['sub_id'])){
	$num = $_GET['numStd'];
	$subID = $_GET['sub_id'];
	$division = $_GET['division'];
	$open_id = $_GET['open_id'];
	$query="UPDATE subject_open SET open_nstd='$num' WHERE sub_id='$subID' AND open_division='$division' AND open_id='$open_id'";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$result = $mysqli->affected_rows;

	$json_response = json_encode($result);
}
?>