$(function () {
    // スクロール時バウンドインする
    $(window).scroll(function () {
        $(".ani").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 4) {
                $(this).css("opacity", "1");
                $(this).addClass('bounceIn');
                $(this).removeClass('bounceOut');
            } else {
                $(this).css("opacity", "0");
                $(this).removeClass('bounceIn');
                $(this).addClass('bounceOut');
            }
        });
    });


    $(window).scroll(function () {
        $(".ani2").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 3) {
                $(this).css("opacity", "1");
                $(this).addClass('animated');
                $(this).addClass('flip');
                // $(this).removeClass('lightSpeedOut');
            } else {
                // $(this).css("opacity", "0");
                $(this).removeClass('animated');
                $(this).removeClass('flip');
                // $(this).addClass('lightSpeedOut');
            }
        });
    });



});

