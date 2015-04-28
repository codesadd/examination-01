<?php 
	require_once '../includes/db.php';
	$status = '%';
	if(isset($_GET['status'])){
		$status = $_GET['status'];
	}
	$query = "SELECT * FROM branch ORDER BY branch_name";

	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

	$arr = array();
	if($result->num_rows > 0) {
		while($rs = $result->fetch_assoc()) {
			$arr[] = $rs;
		}
	}
	header('Content-type: application/json');
	echo json_encode($arr);
	
 
	// $json = json_encode($arr);
	// $escapers = array("\\", "/", "\"", "\n", "\r", "\t", "\x08", "\x0c");
 //    $replacements = array("\\\\", "\\/", "\\\"", "\\n", "\\r", "\\t", "\\f", "\\b");
 //    echo $result = str_replace($escapers, $replacements, $json);

	//echo $json_response = json_encode($arr);
	//echo $my = json_encode($myDirtyString);
?>
