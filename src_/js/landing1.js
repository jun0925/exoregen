$(function () {
    //새로고침시 스크롤 최상단
    setTimeout(function(){
        scrollTo(0,0)
    },10);

    //최초 로드시 html,body overflow: hidden 처리
    $("html,body").css("overflow","hidden");

    //3.5초후 intro 영역 제거
    setTimeout(function(){
        $(".intro-wrap").stop().fadeOut(300,function(){
            $(this).remove();
            $(".sec1-video-wrap video").get(0).play();
        });

        $("html,body").css("overflow","auto");
    },3500);

    const aniClass ="ani-class";

    //리뷰 스와이퍼
    const review = new Swiper("#reviewSwiper", {
        slidesPerView: "auto",
        //slidesPerGroup: 3,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 10000,
        centeredSlides: true,
        speed: 400,
        grabCursor: true,
        navigation: {
            nextEl: "#reviewSwiper .swiper-button-next",
            prevEl: "#reviewSwiper .swiper-button-prev",
        },
    });

    // 라운드 이미지 flow
    $("#loungeList").simplyScroll({
        pauseOnHover: true,
        speed: 1,
    });

    //스크롤 값에 따라 필요한 스크립트 실행.
    window.onscroll = function() {
        const scrY = window.scrollY;
        let aniVal = 500;

        // 첫번째 pdt box
        if(scrY >= $(".pdt-info-box").position().top - 500) {
            $(".pdt-info-txt-wrap").children().addClass(aniClass);
            $(".pdt-video-thumb").fadeOut(300,function(){
                $(".pdt-video-wrap video").get(0).play();
            });
        }

        // 두번째 point
        $(".point").each(function(){
            if(scrY >= $(this).position().top - aniVal) {
                $(this).children(".point-cont").children().addClass(aniClass)
            }
        });

        // 세번째 구매 버튼 영역 
        if(scrY >= $(".buy-sec").position().top - aniVal) {
            $(".buy-img-wrap").addClass(aniClass);
            
            $(".buy-cont > div").each(function(){
                aniVal = 650;
                if(scrY >= $(this).position().top - aniVal) {
                    $(this).addClass(aniClass);
                }
            });
        }

        //사용안내 영역
        if(scrY >= $(".use-sec").position().top - aniVal) {
            $(".use-txt-wrap").children().addClass(aniClass);
        }

        if(scrY >= $(".use-video-wrap").position().top - aniVal) {
            $(".use-video-thumb").fadeOut(300,function(){
                $(".use-video-wrap video").get(0).play();
            });

            $(".num-list li").addClass(aniClass);
        }

        //퍼센테이지 영역
        if(scrY >= $(".percent-cont-wrap").position().top - aniVal) {
            const per1 = document.getElementById("percentage1");
            const per2 = document.getElementById("percentage2");
            const per3 = document.getElementById("percentage3");
            console.log("퍼센테이지");

            per1.innerHTML = "13.43";
            per2.innerHTML = "16.72";
            per3.innerHTML = "21.08";
        }

        //특허 기술력 영역
        $(".tech-sec .tech").each(function(){
            if(scrY >= $(this).position().top - aniVal) {
                $(this).addClass(aniClass);
            }
        });

        
        // 스크롤동작에 따라 움직이는 텍스트
        movingText(".scr-txt");
    }

    // fixed 버튼 효과 observe
    const observeEl = document.querySelector(".fix-buy-btn-wrap");
    const triggerEl = document.querySelector(".use-sec");

    const handler = entries => {
        if(entries[0].isIntersecting) {
            observeEl.classList.add("fix-btn-on");
        } else {
            observeEl.classList.remove("fix-btn-on");
        }
    }

    const observer = new IntersectionObserver(handler,{
        rootMargin: '500% 0px 0px 0px'
    });

    observer.observe(triggerEl);
});


//스크롤 값에 따라 좌우로 움직이는 텍스트
function movingText(el) {
    var scrY = window.pageYOffset || window.scrollY;
    var operator;
    var divisionVal = 4;
    
    if ($(el).hasClass("left_move")) {
        operator = "-";
        scrY = window.pageYOffset / divisionVal;
    } else {
        operator = "+";
        scrY = window.pageYOffset / divisionVal;
    }

    if (scrY <= $(".scr-txt").position().top) {
        $(el).css({
            transform: `translate3d(${operator}${scrY * 2}px, 0px, 0px)`
        });
    }
}