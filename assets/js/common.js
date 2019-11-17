$(function(){

    // console.log(123);
    //モーダル
    $(".js-modal").on("click", function() {
        // console.log(123);
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


    $('a[href^="#"]').click(function () {
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    // サイドバー固定
    var content = $("section");
    var sidebar = $(".aside-menu");
    var sticked = $(".sticked");

    // サイドバーの位置
    var sidebar_top = sidebar.offset().top;
    // 固定するコンテンツの元々の位置
    var sticked_original_top = sticked.offset().top;
    // 固定するコンテンツの高さ
    var sticked_height = sticked.height();

    $(window).on('scroll resize', function(){ // スクロールかリサイズ時
        // 現在の位置
        var scrollTop = $(document).scrollTop();
        // メインコンテンツ最後尾
        var content_bottom = content.offset().top + content.height();

        if ((scrollTop > sticked_original_top) && (scrollTop < content_bottom - sticked_height)){
            // 現在位置が、初期位置より下で、メインコンテンツ最後尾より上なら、画面上部にサイドバーを固定
            sticked.css({'position': 'fixed',
                'top': 0, 
                'width': sidebar.width()
            });
        }
         else if(scrollTop >= content_bottom - sticked_height){
            // 現在位置がメインコンテンツ最後尾より下なら、メインコンテンツ最後尾にサイドバーを位置させる
            sticked.css({'position': 'absolute',
                'top': content_bottom - sticked_height - sidebar_top,
                'width': sidebar.width()
            });
        } 
        else {
            // 現在位置が初期位置より上なら、何もしない
            sticked.css({'position': 'static'});
        }
    });
    // サイドバー固定終了

});

