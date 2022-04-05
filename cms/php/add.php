<?php 
require_once('conn.php');
if (isset($_POST['submit']))
 {
	$file_name = rand(1000,100000)."-".$_FILES['file_name']['name'];
	$file_loc = $_FILES['file_name']['tmp_name'];
	$folder="../public/images/uploads/";
	$new_file_name = strtolower($file_name);
	$final_file = str_replace(' ','-',$new_file_name);

	if (move_uploaded_file($file_loc,$folder.$final_file))
	 {
		$sql = "INSERT INTO uploads (file_name) VALUES('$final_file')";
		mysqli_query($conn,$sql);
		echo "<script>alert('上傳成功');window.location.href='http://localhost:5000/news';</script>";
	}
	else{
		echo "錯誤";
	}

}
 ?>