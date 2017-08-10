<?php
	require_once("db.php");

	if($link){
		$newsId=$_GET['newsId'];

		mysqli_query($link,"SET NAMES utf8");
		$sql="SELECT * FROM `news` WHERE `id`={$newsId}";

		
		$result=mysqli_query($link,$sql);

		$sendData=array();
		while($row=mysqli_fetch_assoc($result)){
			array_push($sendData,array(
										"id"=>$row["id"],
										"newsType"=>$row["newsType"],
										"newsTitle"=>$row["newsTitle"],
										"newsImg"=>$row["newsImg"],
										"newsTime"=>$row["newsTime"],
										"newsSrc"=>$row["newsSrc"]
				));
		}
		echo json_encode($sendData);

	}else{
		echo json_encode(array("link"=>"none"));
	}
	mysqli_close($link);
?>