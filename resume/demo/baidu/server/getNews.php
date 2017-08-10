<?php
	require_once("db.php");
	if($link){
		//执行成功后的操作


		if(@$_GET['newsType']){
			$newsType=$_GET['newsType'];

			$sql="SELECT * FROM `news` WHERE `newsType` = '{$newsType}' order by id desc";

			mysqli_query($link,"SET NAMES utf8");
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

			$sql="SELECT * FROM `news` order by id desc";
			mysqli_query($link,"SET NAMES utf8");
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
			
		}
	}else{
		echo json_encode(array("success"=>"none"));
	}
	mysqli_close($link);
?>