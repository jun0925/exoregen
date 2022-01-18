/***************************************
 * file-name: main.js
 * page-file-location: /index.html 
 * using: 메인 사용 JS
 * date: 2021-07-13
 ****************************************/

$(function () {

    /* top swiper */
    var swiperDelay = 3000;
    var mainSwiper = new Swiper("#mainTopSwiper", {
        autoplay: {
            delay: swiperDelay,
            disableOnInteraction: false
        },
        watchSlidesProgress: true,
        effect: "fade",
        speed: 900,
        loop: true,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return "<span class='swiper-pagination-current'>" + current + "</span>" + "<span class='swiper-pagination-slash'> / </span>" + "<span class='swiper-pagination-total'>" + total + "</span>"
            }
        },
        navigation: {
            nextEl: "#mainTopSwiper .swiper-button-next",
            prevEl: "#mainTopSwiper .swiper-button-prev"
        },
        /*on: {
            slideChangeTransitionStart: function() {
                if(this.activeIndex == 1 || this.activeIndex == 2 || this.activeIndex == 5) {
                    $("header").addClass("active");
                    $(".section1 .swiper-pagination span").css("color","#000");
                    $(".section1 .swiper-button-next").css("color","#000");
                    $(".section1 .swiper-button-prev").css("color","#000");
                } else {
                    $("header").removeClass("active");
                    $(".section1 .swiper-pagination span").css("color","#fff");
                    $(".section1 .swiper-button-next").css("color","#fff");
                    $(".section1 .swiper-button-prev").css("color","#fff");
                }

                console.log(this.activeIndex);
            },
        }*/
    });

    /*mainSwiper.on("slideChangeTransitionEnd",function(){
        if(this.activeIndex == 2) {
            $("headaer").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });*/

    /* products swiper */
    var productsSwiper = new Swiper("#productsSwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        /*autoplay: {
            delay: swiperDelay,
            disableOnInteraction: false
        },*/
        speed: 500,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    /*review swiper */
    var reviewSwiper = new Swiper("#reviewSwiper", {
        slidesPerView: "auto",
        spaceBetween: 40,
        autoplay: {
            delay: swiperDelay,
            disableOnInteraction: false,
        },
        speed: 800,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        }
    });
    /* section 5 */
    var contActiveClass = "sec5-cont-active";
    var contBtnActiveClass = "choice";
    var tabWrap = document.querySelector(".tab-wrap");
    var contTimer = swiperDelay;
    var contActiveTimer = setInterval(fadeContent, contTimer);

    tabWrap.addEventListener("mouseover", function () {
        clearInterval(contActiveTimer);
    });
    tabWrap.addEventListener("mouseout", function () {
        contActiveTimer = setInterval(fadeContent, contTimer);
    });

    function fadeContent() {
        var curCont = document.querySelector("." + contActiveClass);
        var nextActiveCont = curCont.nextElementSibling;
        var curContBtn = document.querySelector("." + contBtnActiveClass);
        var nextActiveBtn = curContBtn.nextElementSibling;

        curCont.classList.remove(contActiveClass);
        curContBtn.classList.remove(contBtnActiveClass);
        if (!nextActiveCont) {
            nextActiveCont = document.querySelector(".sec5-cont:first-child");
            nextActiveBtn = document.querySelector(".section5 .tab:first-child");
        }

        nextActiveCont.classList.add(contActiveClass);
        nextActiveBtn.classList.add(contBtnActiveClass);
    }

    var $section6Tab = $(".section5 .tab");
    $section6Tab.on("click", function () {
        var $cont = $(".sec5-cont");
        var $cont1 = $cont.eq(0);
        var $cont2 = $cont.eq(1);
        var $cont3 = $cont.eq(2);
        var $cont4 = $cont.eq(3);
        var $cont5 = $cont.eq(4);
        $(this).addClass(contBtnActiveClass);
        $section6Tab.not($(this)).removeClass(contBtnActiveClass);

        switch ($(this).index()) {
            case 0:
                $cont1.addClass(contActiveClass)
                $cont.not($cont1).removeClass(contActiveClass);
                break;
            case 1:
                $cont2.addClass(contActiveClass)
                $cont.not($cont2).removeClass(contActiveClass);
                break;
            case 2:
                $cont3.addClass(contActiveClass)
                $cont.not($cont3).removeClass(contActiveClass);
                break;
            case 3:
                $cont4.addClass(contActiveClass)
                $cont.not($cont4).removeClass(contActiveClass);
                break;
            case 4:
                $cont5.addClass(contActiveClass)
                $cont.not($cont5).removeClass(contActiveClass);
                break;
        }
    });

    //new section 3 speech box
    scrEffect(".speech-box", "on");
    var scrY;

    function scrEffect(target, addClass, subTarget) {
        var target2Top = subTarget || target;
        var vh;
        var targetTop = $(target2Top).offset().top;

        $(window).on("resize", function () {
            vh = innerHeight;
        }).trigger("resize");

        $(window).on("scroll", function () {
            scrY = window.pageYOffset;
            if (targetTop - (vh / 2) <= scrY && !$(target).hasClass(addClass)) {
                $(target).addClass(addClass);
            }
        });
    }

    var tvSwiper = new Swiper("#tv-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".tv-swiper-outer .swiper-button-prev",
            nextEl: ".tv-swiper-outer .swiper-button-next",
        }
    });

    var videoBubble = document.getElementById("videoBubble");
    var kpbVideoBtn = document.getElementById("kpb-video-btn");
    var videoPopup = document.getElementById("videoPopup");
    var videoPopupBox = document.getElementById("videoPopupBox");
    var videoWrap = document.querySelector(".video-popup-box > .video-wrap");
    var video = document.createElement("video");
    var iframeCont = document.createElement("iframe");
    var videoPopupClose = document.querySelector("#videoPopupBox > .close-btn");
    //var videoPlayBtn = document.querySelector("#videoPopupBox > .video-wrap > .play-btn");
    var htmlBody = document.querySelector("html,body");

    $(".youtube-cont").on("click",function(){
        var videoUrlArray = [
            "https://www.youtube.com/embed/6EhI3nyCKz4",
            "https://www.youtube.com/embed/UygQtisQJFQ",
            "https://www.youtube.com/embed/XTOsXpkMBx0",
            "https://www.youtube.com/embed/wJl9gpmU8VQ",
            "https://www.youtube.com/embed/fylAHCCqqnc",
        ]

        var $thisId = $(this).attr("id");
        var youtube = "youtube";

        if($thisId == youtube + "0") {
            videoOpen(videoUrlArray[0])
        } else if($thisId == youtube + "1") {
            videoOpen(videoUrlArray[1]);
        } else if($thisId == youtube + "2") {
            videoOpen(videoUrlArray[2]);
        } else if($thisId == youtube + "3") {
            videoOpen(videoUrlArray[3]);
        } else if($thisId == youtube + "4") {
            videoOpen(videoUrlArray[4]);
        }
    });

    videoBubble.onclick = function () {
        videoOpen("/video_/talk_video.mp4");
    }

    videoPopup.onclick = function () {
        videoClose();
    }

    videoPopupClose.onclick = function () {
        videoClose();
    }

    videoPopupBox.onclick = function (e) {
        e.stopPropagation();
    }

    /*video.onclick = function () {
        videoPlayBtn = this.nextElementSibling;
        
        var agent = navigator.userAgent.toLowerCase();
        if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
            videoPlayBtn.classList.add("hide");
            $(".video-wrap video").get(0).play();
        } else {
            videoPlayBtn.classList.toggle("hide");
        }
    }*/

    /*$(".video-wrap .play-btn").on("click", function () {
        $(this).addClass("hide");
        $(this).prev().get(0).play();
    });*/

    function videoOpen(videoSrc) {
        videoPopup.style.display = "block";
        htmlBody.style.overflowY = "hidden";
        
        if($(this).hasClass("youtube-cont")) {
            setTimeout(function () {
                videoPopupBox.classList.add("show");
                videoWrap.appendChild(iframeCont);
                iframeCont.setAttribute("src", videoSrc);
            }, 50);
            console.log("ok");
        } else {
            setTimeout(function () {
                videoPopupBox.classList.add("show");
                videoWrap.appendChild(video)
                video.setAttribute("muted",true);
                video.setAttribute("controls",true);
                video.setAttribute("src", videoSrc);
                video.play();
            }, 50);
        }
    }

    function videoClose() {
        htmlBody.style.overflowY = "auto";
        videoPopupBox.classList.remove("show");
        setTimeout(function () {
            videoPopup.style.display = "none";
            $(".video-wrap > video").remove();
            $(".video-wrap > iframe").remove();
            //videoPlayBtn.classList.remove("hide");
        }, 500);
    }

    var $sec3CsBtn = $("#counselingBtn");

    $sec3CsBtn.on("click", function () {
        scrY = window.pageYOffset;
        var footerTop = $("footer").position().top;

        $("html,body").stop().animate({
            scrollTop: footerTop
        });
    });

    //new section 4 odometer
    $(window).on("scroll", function () {
        scrY = window.scrollY || window.pageYOffset;
        var sec4PosTop = $(".new-section4").offset().top - 150;
        if (scrY >= sec4PosTop) {
            var odometer = document.querySelector(".new-section4 .odometer");
            odometer.innerHTML = "1,755,655";
        }
    });

    /* main news-list */
    var $mainNewsTab = $(".news-tab-list .tab");
    $mainNewsTab.on("click", function () {
        $(this).addClass("active");
        $mainNewsTab.not($(this)).removeClass("active");
    });

});