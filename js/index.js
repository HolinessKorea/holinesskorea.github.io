// JavaScript Document

$(function(){

    // 大布局
    (function(){
    var num =0;
    var timer = null;
    // var color=['#fff','#242424','#BABCB8','#353535','#242424']
    // $('.all>ul>li').each(function(index,elements){
    //     $(elements).css('background',color[index])
    // })
    $('.all>ol>li').click(function(){
        var windowH = $(window).height();

        $(this).addClass('current').siblings().removeClass('current');
        $('.all>.buju').stop().animate({'top':-$(this).index()*100+'%'}, 500)
        $('.buju>div').eq($(this).index()).addClass('current').siblings().removeClass('current')
        num=$(this).index()
        $('.buju>div').eq(num).removeClass('out').siblings().addClass('out')
    })
    $(document).mousewheel(function(e,d){
        clearTimeout(timer)
        timer=setTimeout(function(){
            num=num - d
            
            if(num<0){num=0}
            if(num>4){num=4}
            
            $('.buju>div').eq(num).removeClass('out').siblings().addClass('out')
            $('.all .buju').animate({'top':-num*100+'%'},500)
            $('.all>ol>li').eq(num).addClass('current').siblings().removeClass('current');
            $('nav ul li').eq(num).addClass('current').siblings().removeClass('current') 
        },200)
    })

    })();
    

    // nav
    (function(){
        $('nav ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
        $('.all>ol>li').eq($(this).index()).addClass('current').siblings().removeClass('current');
        $('.all .buju').stop().animate({'top':-$(this).index()*100+'%'}, 500)
        $('.buju>div').eq($(this).index()).removeClass('out').siblings().addClass('out')
        num=$(this).index()

    })
    })();
    
    















    // banner
    (function(){
        var colors = ['#070512','#000000','#43a3f9','#020204','#1bcbb7']

            $('.banner ul li').each(function(index, element) {
                $(element).css('background',colors[index])
            });
         
            var num=0;
            var timer = null;
            function autoplay(){
                num++;
                if(num>5){
                    num=1
                $('.banner ul').css('left','0')    
                }
                $('.banner ul').animate({'left': -num*100+'%'},300) 
            }
            timer = setInterval(autoplay,2000)

            $('.leftBtn').click(function(e) {
                num--;
                if(num<0){
                    num=4
                }
                $('.banner ul').animate({'left': -num*100+'%'},300) 
            }); 
            $('.rightBtn').click(function(e) {
                autoplay();
            });
         
            $('.banner').hover(function(){
                clearInterval(timer)
                $('.banner span').show()
            },function(){
                timer = setInterval(autoplay,2000)
                $('.banner span').hide()
            })
    
    })();
        
    
   //uishow
    (function(){
         // var num =0;
         // var timer = null;
         // function autoplay(){
         //     num++
         //     if(num>7){
         //         num=1
         //     $('.uishow div ul').css('left',0)    
         //     }
         //     $('.uishow div ul').animate({'left':-210*num},300)
         // }
         // timer=setInterval(autoplay,2000)
         window.onload = function(){
             // 得到按钮
             var num =0;
             var timer = null;
             var rightBtn = document.getElementById("rightBtn");
             var leftBtn = document.getElementById("leftBtn");
             // 得到所有的li
             var myLis = document.getElementById("liebiao").getElementsByTagName("li");
             // 定义一个数组
             var arr = ["stateA","stateB","stateC","stateD","stateE","waiting","waiting","waiting","waiting"];

             //锁
             var lock = true;

             //右按钮监听
             rightBtn.onclick = function(){
                 //执行右按钮的时候，要判定lock
                 //只有lock是真的时候，才能执行
                 if(lock){
                     // 删除数组的最后一项
                     var lastOne = arr.pop();
                     // 添加到最前面
                     arr.unshift(lastOne);
                     // 让第x个li的类名，变为数组中的第x项：
                     for(var i = 0 ; i < myLis.length ; i++){
                         myLis[i].className = arr[i];
                     }

                     //过河拆桥
                     lock = false;

                     //1.2秒后，重新修个桥
                     setTimeout(function(){
                         lock = true;
                     }, 1200);
                 }

             }
             function autoplay(){
                 if(lock){
                     // 删除数组的最后一项
                     var lastOne = arr.pop();
                     // 添加到最前面
                     arr.unshift(lastOne);
                     // 让第x个li的类名，变为数组中的第x项：
                     for(var i = 0 ; i < myLis.length ; i++){
                         myLis[i].className = arr[i];
                     }

                    //过河拆桥
                    lock = false;

                     //1.2秒后，重新修个桥
                     setTimeout(function(){
                         lock = true;
                     }, 1200);
                 }
             }
              timer=setInterval(autoplay,1000)
             $('#liebiao li').mouseenter(function(event) {
                 clearInterval(timer)
             }).mouseleave(function(event) {
               timer=setInterval(autoplay,1000)
            });
            //右按钮监听
            leftBtn.onclick = function(){
                if(lock){
                    // 删除数组的第一项
                    var firstOne = arr.shift();
                    // 添加到最后面
                    arr.push(firstOne);
                    // 让第x个li的类名，变为数组中的第x项：
                    for(var i = 0 ; i < myLis.length ; i++){
                        myLis[i].className = arr[i];
                    }

                     //过河拆桥
                     lock = false;

                     //1.2秒后，重新修个桥
                     setTimeout(function(){
                         lock = true;
                     }, 1200);
                 }
             }
         }
       
        // app
        var num =0 ;
        var timer = null;
        function appplay(){
            num++
            if(num>4){
                num=1
            $('.app ul').css('left','0')    
            }
            $('.app ul').animate({'left':-1045*num},800)
        }
        timer=setInterval(appplay,2000)
        $('.app').mouseenter(function(event) {
            clearInterval(timer)
        }).mouseleave(function(event) {
            timer=setInterval(appplay,2000)
        });


        $('.uinav li').click(function(){
            $('.uishow div').eq($(this).index()).show().siblings('div').hide()
        })
   })();
        
   
 // skill
 (function(){
    

    
 })();   
    

// about me
(function(){
    $('.me ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
        $('.me article').eq($(this).index()).show().siblings('article').hide()
    })
})();












})














   