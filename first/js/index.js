/*index.js*/
$(function(){
	var num = 0;
	var timer = null;
	$("ol li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".banner ul").animate({"left":-1920*$(this).index()},500)
	})	
	setInterval(function(){
		num++;
		if(num>2){
		num=0;
		}
		$(".banner ul").animate({"left":-1920*num},500)
		$(".banner ol li").eq(num).addClass("current").siblings().removeClass("current");
	},4000)
})