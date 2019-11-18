$(function(){
    $('.map').css("opacity","0");
    $(window).scroll(function (){
      $(".map").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
          $(this).css("opacity","1" );
          $(this).css({ 
            "font-size": "100px",
            "padding": "0 20px 40px"
          });
        } else {
          $(this).css("opacity","0" );
          $(this).css({ 
            "font-size": "20px",
            "padding": "20px"
          });
        }
      });
    });

    $('.point').css("opacity","0");
    $(window).scroll(function (){
      $(".point").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
          $(this).css("opacity","1" );
          $(this).css({ 
            "font-size": "100px",
            "padding": "0 20px 40px"
          });
        } else {
          $(this).css("opacity","0" );
          $(this).css({ 
            "font-size": "20px",
            "padding": "20px"
          });
        }
      });
    });
  });