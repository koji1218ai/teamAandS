$(function(){

//スムーススクロール
  $(".scroll-box").on("click", function() {
    console.log(123);
    $("body, html").animate({ scrollTop: 0 }, 1000);
  });



});