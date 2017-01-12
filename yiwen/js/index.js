/* 
* @Author: Marte
* @Date:   2015-11-15 23:22:28
* @Last Modified by:   Marte
* @Last Modified time: 2015-11-18 21:17:08
*/



// banner
$(function(){
    (function(){
        var num=0;
        var num02=0;
        var timer=null;
        $('.banner ol li').click(function(){
            $(this).addClass('current').siblings().removeClass('current')
            $('.banner ul').css('left',-1000*$(this).index())
            num=$(this).index()
        })
        function autoplay(){
            num++
            num02++
            if(num>3){
                num=1
                $('.banner ul').css('left',0)
            }
            if(num02>2){

                num02=0
            }
            $('.banner ul').animate({'left':-1000*num}, 500)
            $('.banner ol li').eq(num02).addClass('current').siblings().removeClass('current')
        }
        timer=setInterval(autoplay,2000)
        $('.banner').mouseenter(function(){
            clearInterval(timer)
        }).mouseleave(function(){
            timer=setInterval(autoplay,3000)
        })
    })();
    















})
    