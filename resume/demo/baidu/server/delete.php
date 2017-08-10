<?php
	require_once("db.php");

	if($link){
		$newsId=addslashes(htmlspecialchars($_POST['newsId']));

		if(isset($_POST['newsId'])){
			$hash=md5($_COOKIE['cookie']);
			if($_POST['newsId']==$hash){
				$sql="DELETE FROM `news` WHERE `news`.`id`={$newsId}";

				mysqli_query($link,"SET NAMES uft8");
				$result=mysqli_query($link,$sql);

				echo json_encode(array("删除状态"=>"success"));
			}
		}
		
	}else{
		echo json_encode(array("link"=>"none"));
	}
	mysqli_close($link);
?>