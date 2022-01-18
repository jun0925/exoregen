/***************************************
 * file-name: common.js
 * page-file-location: 공용 
 * using: 공통 사용 JS
 * date: 2021-07-13
 ****************************************/
$(function () {
    //새로고침시 최상단으로
    /*window.addEventListener("load",function(){
        setTimeout(function(){
            scrollTo(0,0);
        },10);
    });*/
    
    // header , nav
    var $header = $("header");
    var $headerTop = $("html,body").position().top;
    var scrUpClass = "scrollUp";
    var scrDownClass = "scrollDown"
    
    if ($header.hasClass("ws")) {
        $("main > section").eq(0).css("padding-top","100px");
        $header.addClass("on");
    }
    
    var lastScr = 0;
    $(window).on("scroll",function(e){
        var scrY = window.pageYOffset;
        var $newTopVal = $headerTop + 100;

        if(scrY > lastScr) {
            $header.addClass(scrDownClass);
            $header.removeClass(scrUpClass);
        } else {
            $header.addClass(scrUpClass);
            $header.removeClass(scrDownClass);
        }

        lastScr = scrY;

        if (scrY < $newTopVal) {
            $header.removeClass(scrUpClass);
        }
    });

    $header.on("mouseover",subMenu).on("mouseout",subMenu);
    
    function subMenu(e) {
        var aniTimer = 300;
        var $subNav = $(".detail-nav");
        if(e.type == "mouseover") {
            $header.addClass("on");
            $subNav.stop().fadeIn(aniTimer);
        }

        if(e.type == "mouseout") {
            $header.removeClass("on");
            $subNav.stop().fadeOut(100);
        }
    }

    /* 준비중 페이지 처리 */
    $(".close").on("click",function(){
        alert("준비중 입니다.")
        return false;
    });
    
    /* scroll top btn */
    var $topBtn = $(".top-btn");
    $topBtn.on("click",function(){
        $("html,body").stop().animate({
            scrollTop: 0
        }, 300);
    });


    var awardLogoSwiper = new Swiper(".award-logo-swiper", {
        slidesPerView: 4,
        spaceBetween: 40,
        width: 1100,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            prevEl: ".awards-logo-swiper-wrap .swiper-button-prev",
            nextEl: ".awards-logo-swiper-wrap .swiper-button-next"
        }
    });
});