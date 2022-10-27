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
    var $subNav = $(".detail-nav");
    var $gnbBox = $(".gnb-box");
    var $navHeight;

    if($(".nav2").children().length >= 8) {
        $navHeight = $(".nav2").innerHeight();
    } else {
        $navHeight = $(".nav1").innerHeight();
    }

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
            $subNav.hide();
            $gnbBox.removeClass("on").css("height",0);
        } else {
            $header.addClass(scrUpClass);
            $header.removeClass(scrDownClass);
        }

        lastScr = scrY;

        if (scrY < $newTopVal) {
            $header.removeClass(scrUpClass);
        }
    });

    $(".combo-choice").on("click",function(){
        $(this).toggleClass("list-open");
        $(".combo-list").stop().slideToggle(300);
    })

    $header.on("mouseover",subMenu).on("mouseout",subMenu);
    
    function subMenu(e) {
        var aniTimer = 300;

        if(e.type == "mouseover") {
            $header.addClass("on");
            $gnbBox.addClass("on").css("height",$navHeight + 35);
            $subNav.stop().fadeIn(aniTimer);
        }

        if(e.type == "mouseout") {
            $header.removeClass("on");
            $gnbBox.removeClass("on").css("height", 0);
            $subNav.stop().fadeOut(100);
        }
    }

    /* 5월 1일자에 쿠션 링크 변경 이벤트 실행*/
    let eventDate = new Date("05/01/2022 00:00:00");
    let nowDate = new Date();

    if(eventDate <= nowDate) {
        $(".detail-nav li a").each(function(idx, item) {
            if(item.text.indexOf("글로우 퍼펙트 엑소좀 쿠션") !== -1) {
                $(this).attr("href","https://www.exoregen.kr/myoffice/pub.do?prgId=osProduct.osProd.osProductView&pdtCd=000082");
            }
        });
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
        speed: 800,
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

    //footer 계열사 콤보박스 기능
    var comboBox = document.querySelector(".company-combo");
    var companyBox = document.querySelector(".company-box");
    comboBox.onclick = function(){
        var openClass = "on";
        this.classList.toggle(openClass);
        companyBox.style.display = "block";
        setTimeout(function(){
            companyBox.classList.toggle(openClass);
        },50);
        
        if(companyBox.classList.contains(openClass)) {
            setTimeout(function(){
                companyBox.style.display = "none";
            },300);
        }
    }    
});