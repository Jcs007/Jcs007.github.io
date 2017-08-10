<?php
	require_once("db.php");
		//插入新闻
	if($link){
		$newsType=addslashes(htmlspecialchars($_POST['newsType']));
		$newsTitle=addslashes(htmlspecialchars($_POST['newsTitle']));
		$newsImg=addslashes(htmlspecialchars($_POST['newsImg']));
		$newsTime=addslashes(htmlspecialchars($_POST['newsTime']));
		$newsSrc=addslashes(htmlspecialchars($_POST['newsSrc']));

		$sql="INSERT INTO `news`(`newsType`, `newsTitle`, `newsImg`, `newsTime`, `newsSrc`) VALUES ('{$newsType}','{$newsTitle}','{$newsImg}','{$newsTime}','{$newsSrc}')";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);

		echo json_encode(array("success"=>"ok"));
	}else{
			echo json_encode(array("link"=>"none"));
	}
	mysqli_close($link);
?>