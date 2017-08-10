var app=angular.module('angularJdApp',[]);
app.controller('myCtrl',function($scope){
	$scope.SCL=[];
	($scope.SCL).num=3;
	/*购买商品数量编辑*/
	$scope.number01=1;
	$scope.number02=1;
	$scope.number03=1;
	$scope.number04=1;
	$scope.number05=1;
	$scope.number06=1;
	$scope.number07=1;
	$scope.number08=1;
	$scope.number09=1;
	$scope.number10=1;
	$scope.quantityDecrease=function(a){
		switch(a){
			case 1:if($scope.number01>1)$scope.number01--;else $scope.number01=1;break;
			case 2:if($scope.number02>1)$scope.number02--;else $scope.number02=1;break;
			case 3:if($scope.number03>1)$scope.number03--;else $scope.number03=1;break;
			case 4:if($scope.number04>1)$scope.number04--;else $scope.number04=1;break;
			case 5:if($scope.number05>1)$scope.number05--;else $scope.number05=1;break;
			case 6:if($scope.number06>1)$scope.number06--;else $scope.number06=1;break;
			case 7:if($scope.number07>1)$scope.number07--;else $scope.number07=1;break;
			case 8:if($scope.number08>1)$scope.number08--;else $scope.number08=1;break;
			case 9:if($scope.number09>1)$scope.number09--;else $scope.number09=1;break;
			case 10:if($scope.number10>1)$scope.number10--;else $scope.number10=1;break;
		}
	}
	
	$scope.isChecked=true;
	$scope.checkIcon=function(){
		$scope.isChecked=!$scope.isChecked;
	}
	$scope.Price01=19.80;
	/*购买商品数量编辑---end*/
	$scope.isEditHidden01=true;
	$scope.isOptionHidden01=false;
	$scope.isEditHidden02=true;
	$scope.isOptionHidden02=false;
	$scope.isEditHidden03=true;
	$scope.isOptionHidden03=false;
	$scope.isEditHidden04=true;
	$scope.isOptionHidden04=false;
	$scope.isEditHidden05=true;
	$scope.isOptionHidden05=false;
	$scope.isEditHidden06=true;
	$scope.isOptionHidden06=false;
	$scope.isEditHidden07=true;
	$scope.isOptionHidden07=false;
	$scope.isEditHidden08=true;
	$scope.isOptionHidden08=false;
	$scope.isEditHidden09=true;
	$scope.isOptionHidden09=false;
	$scope.isEditHidden10=true;
	$scope.isOptionHidden10=false;
	$scope.editCart=function(n){
		switch(n){
			case 1:$scope.isOptionHidden01=!$scope.isOptionHidden01;
		$scope.isEditHidden01=!$scope.isEditHidden01;break;
			case 2:$scope.isOptionHidden02=!$scope.isOptionHidden02;
		$scope.isEditHidden02=!$scope.isEditHidden02;break;
			case 3:$scope.isOptionHidden03=!$scope.isOptionHidden03;
		$scope.isEditHidden03=!$scope.isEditHidden03;break;
			case 4:$scope.isOptionHidden04=!$scope.isOptionHidden04;
		$scope.isEditHidden04=!$scope.isEditHidden04;break;
			case 5:$scope.isOptionHidden05=!$scope.isOptionHidden05;
		$scope.isEditHidden05=!$scope.isEditHidden05;break;
			case 6:$scope.isOptionHidden06=!$scope.isOptionHidden06;
		$scope.isEditHidden06=!$scope.isEditHidden06;break;
			case 7:$scope.isOptionHidden07=!$scope.isOptionHidden07;
		$scope.isEditHidden07=!$scope.isEditHidden07;break;
			case 8:$scope.isOptionHidden08=!$scope.isOptionHidden08;
		$scope.isEditHidden08=!$scope.isEditHidden08;break;
			case 9:$scope.isOptionHidden09=!$scope.isOptionHidden09;
		$scope.isEditHidden09=!$scope.isEditHidden09;break;
			case 10:$scope.isOptionHidden10=!$scope.isOptionHidden10;
		$scope.isEditHidden10=!$scope.isEditHidden10;break;
		}
	}
	$scope.isItemHidden01=true;
	$scope.isItemHidden02=true;
	$scope.isItemHidden03=true;
	$scope.isItemHidden04=true;
	$scope.isItemHidden05=true;
	$scope.isItemHidden06=true;
	$scope.isItemHidden07=true;
	$scope.isItemHidden08=true;
	$scope.isItemHidden09=true;
	$scope.isItemHidden10=true;
	
	$scope.deleteItem=function(n){
		switch(n){
			case 1:$scope.isItemHidden01=true;$scope.SCL.pop($scope.task1);break;
			case 2:$scope.isItemHidden02=true;$scope.SCL.pop($scope.task2);break;
			case 3:$scope.isItemHidden03=true;$scope.SCL.pop($scope.task3);break;
			case 4:$scope.isItemHidden04=true;$scope.SCL.pop($scope.task4);break;
			case 5:$scope.isItemHidden05=true;$scope.SCL.pop($scope.task5);break;
			case 6:$scope.isItemHidden06=true;$scope.SCL.pop($scope.task6);break;
			case 7:$scope.isItemHidden07=true;$scope.SCL.pop($scope.task7);break;
			case 8:$scope.isItemHidden08=true;$scope.SCL.pop($scope.task8);break;
			case 9:$scope.isItemHidden09=true;$scope.SCL.pop($scope.task9);break;
			case 10:$scope.isItemHidden10=true;$scope.SCL.pop($scope.task10);break;
		}
		
	}
	$scope.addInCart=function(n){
		switch(n){
			case 1:$scope.isItemHidden01=false;$scope.isOptionHidden01=!$scope.isOptionHidden01;
		$scope.isEditHidden01=!$scope.isEditHidden01;$scope.SCL.push($scope.task1);break;
			case 2:$scope.isItemHidden02=false;$scope.isOptionHidden02=!$scope.isOptionHidden02;
		$scope.isEditHidden02=!$scope.isEditHidden02;$scope.SCL.push($scope.task2);break;
			case 3:$scope.isItemHidden03=false;$scope.isOptionHidden03=!$scope.isOptionHidden03;
		$scope.isEditHidden03=!$scope.isEditHidden03;$scope.SCL.push($scope.task3);break;
			case 4:$scope.isItemHidden04=false;$scope.isOptionHidden04=!$scope.isOptionHidden04;
		$scope.isEditHidden04=!$scope.isEditHidden04;$scope.SCL.push($scope.task4);break;
			case 5:$scope.isItemHidden05=false;$scope.isOptionHidden05=!$scope.isOptionHidden05;
		$scope.isEditHidden05=!$scope.isEditHidden05;$scope.SCL.push($scope.task5);break;
			case 6:$scope.isItemHidden06=false;$scope.isOptionHidden06=!$scope.isOptionHidden06;
		$scope.isEditHidden06=!$scope.isEditHidden06;$scope.SCL.push($scope.task6);break;
			case 7:$scope.isItemHidden07=false;$scope.isOptionHidden07=!$scope.isOptionHidden07;
		$scope.isEditHidden07=!$scope.isEditHidden07;$scope.SCL.push($scope.task7);break;
			case 8:$scope.isItemHidden08=false;$scope.isOptionHidden08=!$scope.isOptionHidden08;
		$scope.isEditHidden08=!$scope.isEditHidden08;$scope.SCL.push($scope.task8);break;
			case 9:$scope.isItemHidden09=false;$scope.isOptionHidden09=!$scope.isOptionHidden09;
		$scope.isEditHidden09=!$scope.isEditHidden09;$scope.SCL.push($scope.task9);break;
			case 10:$scope.isItemHidden10=false;$scope.isOptionHidden10=!$scope.isOptionHidden10;
		$scope.isEditHidden10=!$scope.isEditHidden10;$scope.SCL.push($scope.task10);break;
		}
        
	}	
});
function pCart(n){
	switch(n){
		case 1:$("#p01").toggleClass("checked");break;
		case 2:$("#p02").toggleClass("checked");break;
		case 3:$("#p03").toggleClass("checked");break;
		case 4:$("#p04").toggleClass("checked");break;
		case 5:$("#p05").toggleClass("checked");break;
		case 6:$("#p06").toggleClass("checked");break;
		case 7:$("#p07").toggleClass("checked");break;
		case 8:$("#p08").toggleClass("checked");break;
		case 9:$("#p09").toggleClass("checked");break;
		case 10:$("#p10").toggleClass("checked");break;
	}
}
	