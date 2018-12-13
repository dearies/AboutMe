$(document).ready(function() {
	$(window).scroll(function () { 
        var position = $(this).scrollTop();
        if (position > 300) {
            $('nav').addClass('navChange');
            $('.btn-gotop').css({"display": "block","opacity": "1"});
        }
        else {
            $('nav').removeClass('navChange');
            $('.btn-gotop').css("display","none");
        }
        if (position > 1100) {
            $('section .skills .content .skill-box .bar').addClass('bar-change');
        }
    });
    // scroll memu
    $('header nav .right ul li:nth-child(1), .btn-gotop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0},1000);
        $('header .right').removeClass('right-change');
        $('header nav ul li').removeClass('lichange');
    });
    $('header nav .right ul li:nth-child(2)').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.about').offset().top},1000);
        $('header .right').removeClass('right-change');
        $('header nav ul li').removeClass('lichange');
    });
    $('header nav .right ul li:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.education').offset().top},1000);
        $('header .right').removeClass('right-change');
        $('header nav ul li').removeClass('lichange');
    });
    $('header nav .right ul li:nth-child(4)').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.skills').offset().top},1000);
        $('header .right').removeClass('right-change');
        $('header nav ul li').removeClass('lichange');
    });
    $('header nav .right ul li:nth-child(5)').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.contact').offset().top},1000);
        $('header .right').removeClass('right-change');
        $('header nav ul li').removeClass('lichange');
    });

    //btn-menu for phone
    $('header .btn-menu').click(function (e) { 
        e.preventDefault();
        $('header .right').toggleClass('right-change');
        $('header nav ul li').toggleClass('lichange');
    });
});