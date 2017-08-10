<?php
	require_once("db.php");
		//插入新闻
	if($link){
		$newsId=addslashes(htmlspecialchars($_POST['newsId']));
		$newsType=addslashes(htmlspecialchars($_POST['newsType']));
		$newsTitle=addslashes(htmlspecialchars($_POST['newsTitle']));
		$newsImg=addslashes(htmlspecialchars($_POST['newsImg']));
		$newsTime=addslashes(htmlspecialchars($_POST['newsTime']));
		$newsSrc=addslashes(htmlspecialchars($_POST['newsSrc']));


		$sql="UPDATE `news` SET `newsType`='{$newsType}',`newsTitle`='{$newsTitle}',`newsImg`='{$newsImg}',`newsTime`='{$newsTime}',`newsSrc`='{$newsSrc}' WHERE `id`={$newsId}";
		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);

		echo json_encode(array("success"=>$sql));
	}else{
			echo json_encode(array("link"=>"none"));
	}
	mysqli_close($link);
?>