$(document).ready(function(){
	imgLocation();
	var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]}
	window.onscroll=function(){
		if(scrollside()){
			$.each(dataImg.data,function(index,value){
				var box=$("<div>").addClass("box").appendTo($("#container"));
				var content=$("<div>").addClass("content").appendTo(box);
				$("<img>").attr("src","imgs/"+$(value).attr("src")).appendTo(content);
			});
			imgLocation();
		}
	};
	window.onresize=function(){
    	imgLocation();
	};
});


function imgLocation(){
	var box=$(".box");
	var boxWidth=box.eq(0).width();
	var num=Math.floor($(window).width()/boxWidth);
	var boxArr=[];
	box.each(function(index,value){
		value.style.cssText="";
		var boxHeight=box.eq(index).height();
		if(index<num){
			boxArr[index]=boxHeight;
			$(value).css({
				"position":"absolute",
				"top":0,
				"left":index*boxWidth
			});
		}else{
			var minboxHeight=Math.min.apply(null,boxArr);
			var minboxIndex=$.inArray(minboxHeight,boxArr);
			$(value).css({
				"position":"absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex]+=box.eq(index).height();
		}
	});
}


function scrollside(){
	var box=$(".box");
	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight=$(window).width();
	var scrollHeight=$(window).scrollTop();
	return (lastboxHeight<(scrollHeight+documentHeight)?true:false);
}

