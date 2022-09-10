$(document).ready(function(){
    $("#mag").click(function(){
    $(".search-bar-sec").show();
   
    });
});
$(document).ready(function(){
    $("#mag-fixed").click(function(){
    $(".search-bar-sec-fixed").show();
   
    });
}); 
$(document).ready(function(){
    $(".blognav-fixed").click(function(){
    $(".bloglistnav-fixed").show();
   
    });
});
$(document).ready(function(){
    $("#closeblog-fixed").dblclick(function(){
    $(".bloglistnav-fixed").hide();
    });
});

$(document).ready(function(){
    $("#closesearch").click(function(){
    $(".search-bar-sec").hide();
   
    });
});
$(document).ready(function(){
    $("#closesearch-fixed").click(function(){
    $(".search-bar-sec-fixed").hide();
   
    });
});
$(document).ready(function(){
    $(".divab").animate({
        margin: '0px'
    },5000);
    
});

$(function(){

        var scroll= $("#scroll-up");
        $(window).scroll(function(){
          if($(this).scrollTop()>=400){
               scroll.show();
                } else{
                scroll.hide();
                }
        });
        scroll.click(function(){
            $("html,body").animate({scrollTop : 0},900);
   });
});
$(function(){

        var fixednav= $(".nav-bar-fixed");
        $(window).scroll(function(){
          if($(this).scrollTop()>=400){
               fixednav.show();
                } else{
                fixednav.hide();
                }
     });
});   
