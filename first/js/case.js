/*case.js*/
$(function(){
	$(".caselist ul li").mouseenter(function(){
        $(this).children('div').stop().slideDown(250)
    }).mouseleave(function(){
        $(this).children('div').stop().slideUp(250)
    })
})