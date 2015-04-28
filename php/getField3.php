<?php 
	require_once '../includes/db.php';
	$status = '%';
	if(isset($_GET['status'])){
		$status = $_GET['status'];
	}
	$query = "SELECT subject.sub_name, branch.branch_name, teacher.teach_title, teacher.teach_name, teacher.teach_lname,subject_open.open_division,subject_open.open_credit, subject_open.open_year, subject_open.open_section, subject_open.open_division,subject_open.open_status,subject_open.open_id ,subject_open.sub_id, subject_open.open_nstd, subject_open.teach_id
         	FROM subject_open
            LEFT JOIN subject ON subject_open.sub_id = subject.sub_id
            LEFT JOIN teacher ON subject_open.teach_id = teacher.teach_id
            LEFT JOIN branch ON subject_open.branch_id=  branch.branch_id
            where subject_open.open_status='8'";

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
