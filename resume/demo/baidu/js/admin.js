//打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function(){
	var $newsTable=$("#newsTable tbody");
	refreshNews();

	//添加新闻
	$("#btnSubmit").click(function(e){
		e.preventDefault();
		//输入判断
		if($("#newsTitle").val()===""||$("#newsImg").val()===""||$("#newsSrc").val()===""||$("#newsTime").val()===""){
			if($("#newsTitle").val()===""){
				$("#newsTitle").parent().addClass("has-error");
			}else{
				$("#newsTitle").parent().removeClass("has-error");
			}
			if($("#newsImg").val()===""){
				$("#newsImg").parent().addClass("has-error");
			}else{
				$("#newsImg").parent().removeClass("has-error");
			}
			if($("#newsTime").val()===""){
				$("#newsTime").parent().addClass("has-error");
			}else{
				$("#newsTime").parent().removeClass("has-error");
			}
			if($("#newsSrc").val()===""){
				$("#newsSrc").parent().addClass("has-error");
			}else{
				$("#newsSrc").parent().removeClass("has-error");
			}
		}else{
			var jsonNews={
				newsType:$('#newsType').val(),
				newsTitle:$('#newsTitle').val(),
				newsImg:$('#newsImg').val(),
				newsTime:$('#newsTime').val(),
				newsSrc:$('#newsSrc').val()
			}
			//提交添加
			$.ajax({
				url:"../server/insert.php",
				method:"POST",
				dataType:"json",
				data:jsonNews,
				success:function(data){
					refreshNews();
				}
			});

			
		}
	});	

	//删除新闻的功能
	var deleteId=null;
	$newsTable.on("click",".btn-danger",function(e){
		$("#deleteModal").modal("show");
		deleteId=$(this).parent().prevAll().eq(3).html();
	});
	$("#deleteModal #confirmDelete").click(function(e){
				if(deleteId){
					$.ajax({
						url:"../server/delete.php",
						method:"POST",
						dataType:"json",
						data:{newsId:deleteId},
						success:function(data){
							console.log("删除成功");
							$("#deleteModal").modal("hide");
							refreshNews();
						}
					});
				}			
			});


	//修改新闻的功能
	var updateId=null;
	$newsTable.on("click",".btn-info",function(e){
		$("#updateModal").modal("show");
		updateId=$(this).parent().prevAll().eq(3).html();
		$.ajax({
				url:"../server/curnews.php",
				method:"GET",
				dataType:"json",
				data:{newsId:updateId},
				success:function(data){
					$("#unewsType").val(data[0].newsType);
					$("#unewsTitle").val(data[0].newsTitle);
					$("#unewsImg").val(data[0].newsImg);
					$("#unewsSrc").val(data[0].newsSrc);
					var utime=data[0].newsTime.split(' ')[0];
					$("#unewsTime").val(utime);
				}
		});		
	});
	$("#updateModal #confirmUpdate").click(function(e){
		var jsonNews2={
						newsId:updateId,
						newsType:$("#unewsType").val(),
						newsTitle:$("#unewsTitle").val(),
						newsImg:$("#unewsImg").val(),
						newsTime:$("#unewsTime").val(),
						newsSrc:$("#unewsSrc").val()
		}
		$.ajax({
				url:"../server/update.php",
				method:"POST",
				dataType:"json",
				data:jsonNews2,
				success:function(data){
					$("#updateModal").modal("hide");
					refreshNews();
				}
		});
	});
});



function refreshNews(){
		
		var $newsTable=$("#newsTable tbody");
		$newsTable.empty();

		$.ajax({
			url:"../server/getNews.php",
			method:"GET",
			datatype:"json",
			success:function(data){
				data.forEach(function(item,index,array){
					var $tdid=$("<td>").html(item.id);
					var $tdtype=$("<td>").html(item.newsType);
					var $tdtitle=$("<td>").html(item.newsTitle);
					var $tdimg=$("<td>").html(item.newsImg);
					var $tdtime=$("<td>").html(item.newsTime);
					var $tdsrc=$("<td>").html(item.newsSrc);
					var $tdctrl=$("<td>");
					var $btnupdate=$("<button>").addClass("btn btn-xs btn-info").html("修改");
					var $btndelete=$("<button>").addClass("btn btn-xs btn-danger").html("删除");
					$tdctrl.append($btnupdate,$btndelete);
					var $tRow=$("<tr>");
					$tRow.append($tdid,$tdtype,$tdtitle,$tdtime,$tdctrl);
					$newsTable.append($tRow);

				});
			}
		});
	}