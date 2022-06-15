$(function () {
    //kobeas thumb Swiper 
    var kobeasThumb = new Swiper(".kobeas-thumb-swiper",{
        slidesPerView: 3.2,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        speed: 600,
    });

    //kobeas main Swiper
    var kobeasMainSwiper = new Swiper(".kobeas-main-swiper",{
        speed: 600,
        navigation: {
            nextEl: ".kobeas-main-swiper .swiper-button-next",
            prevEl: ".kobeas-main-swiper .swiper-button-prev",
        },
        thumbs: {
            swiper: kobeasThumb,
        }
    });

    kobeasMainSwiper.on("slideChangeTransitionStart",function(){
        kobeasThumb.slideTo(kobeasMainSwiper.activeIndex);
    });

    //INFO CONTENT JS
    var $sliderBox = $(".slider");
    var $sliderCont = $sliderBox.children("li");
    var $swiperBtn = $("#kobeasMemberSwiper button");
    if ($sliderCont.length <= 4) {
        $swiperBtn.css("display", "none");
    } else {
        $swiperBtn.css("display", "block");
    }


    var $pagingBtn = $(".paging");

    $pagingBtn.on("click", function () {
        var choiceClass = "choice";
        $(this).addClass(choiceClass);
        $pagingBtn.not($(this)).removeClass(choiceClass);
    });

    //product swiper 
    var anotherProductSSwiper = new Swiper("#recommandProduct", {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});