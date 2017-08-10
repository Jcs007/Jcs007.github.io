$(document).ready(function(){
	refreshNews('精选');
	$("nav a").click(function(e){
		e.preventDefault();
		var type=$(this).text();
		refreshNews(type);
	});
	
});

function refreshNews(type){

	var $lists=$("article ul");
	$lists.empty();
	$.ajax({
		url:"../server/getNews.php",
		type:"get",
		datatype:"json",
		data:{newsType:type},
		success:function(data){
			data.forEach(function(item,index,array){
				var $list=$("<li></li>").addClass("news-list").prependTo($lists);
				var $newsImg=$("<div></div>").addClass("newsimg").appendTo($list);
				var $img=$("<img>").attr("src",item.newsImg).appendTo($newsImg);
				var $newsContent=$("<div></div>").addClass("newsContent").appendTo($list);
				var $h2=$("<h2></h2>").html(item.newsTitle).appendTo($newsContent);
				var $p=$("<p></p>").appendTo($newsContent);
				var $newsTime=$("<span></span>").addClass("newsTime").html(item.newsTime).appendTo($p);
				var $newsSrc=$("<span></span>").addClass("newsSrc").html(item.newsSrc).appendTo($p);
			})	
		}
	});
	
}