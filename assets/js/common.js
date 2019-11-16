$(function(){


//モーダル
  $(".js-modal").on("click", function() {
    $("body").addClass("modal-open");
    $(".modal-content").fadeIn("slow");
    $("#modal-bg").fadeIn("slow");
  });

  $(".js-modal-close").on("click", function() {
    $("body").removeClass("modal-open");
    $(".modal-content").fadeOut(1000);
    $("#modal-bg").fadeOut(1000);
  });
    //モーダルここまで


  });