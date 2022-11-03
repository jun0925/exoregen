$(function(){

    //최상단 마우스 유도 el 스크롤시 숨김처리
    $(window).on("scroll",function(){
        const scrY = window.scrollY;
        if(scrY >= 50) {
            $(".mouse-el").fadeOut(300);
        } else {
            $(".mouse-el").fadeIn(300);
        }
    });
    //서브 비디오 js
    const subVideoSwiper = new Swiper("#partyVideoSwiper",{
        slidesPerView: 4.2,
        spaceBetween: 8,
    });

    $(".sub-video-thumb").on("click",function(){
        $(this).addClass("play");
        $(".sub-video-thumb").not($(this)).removeClass("play");
        
        const $videoUrl = $(this).data("video");
        $(".main-video-box iframe").attr("src",$videoUrl);
    });

    // 파티 갤러리 관련 js
    const galTabSwiper = new Swiper ("#partyGalTabSwiper",{
        slidesPerView: 6.4,
        navigation: {
            nextEl: "#partyGalTabSwiper .swiper-button-next",
            prevEl: "#partyGalTabSwiper .swiper-button-prev"
        },
    });

    $(".gallery-tab .content-tab").on("click",function(){
        $(this).addClass("active");
        $(".gallery-tab .content-tab").not($(this)).removeClass("active");
        const $tabIdx = $(this).index();
        $(".gallery-cont-wrap").hide();
        $(".gallery-cont-wrap").eq($tabIdx).stop().fadeIn(600);
    });

    $(".gallery-main").each(function (index, element) {
        $(this).attr("id",`galleryMain-${index}`);
        $(this).next(".gallery-thumb").attr("id",`galleryThumb-${index}`);
        
        let gallerySubSwiper = new Swiper(`#galleryThumb-${index}`,{
            slidesPerView: 4.8,
            spaceBetween: 8,
            speed: 1000,
            observer: true,
            observeParents: true,
        });

        const galleryMainSwiper = new Swiper(`#galleryMain-${index}`,{
            slidesPerView: 1,
            speed: 1000,
            effect: "fade",
            observer: true,
            observeParents: true,
            thumbs: {
                swiper: gallerySubSwiper
            },
            navigation: {
                nextEl: `#galleryMain-${index} .swiper-button-next`,
                prevEl: `#galleryMain-${index} .swiper-button-prev`,
            },
        });
        
        galleryMainSwiper.on("slideChangeTransitionStart", function () {
            gallerySubSwiper.slideTo(galleryMainSwiper.activeIndex);
        });
    });


    //시상식 관련 js
    const partyAwardsTab = new Swiper("#partyAwardsTabSwiper",{
        slidesPerView: 6,
        navigation: {
            nextEl: "#partyAwardsTabSwiper .swiper-button-next",
            prevEl: "#partyAwardsTabSwiper .swiper-button-prev"
        },
    });

    const partyAwardsSwiper = new Swiper("#partyAwardsSwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: "#partyAwardsSwiper .swiper-button-next",
            prevEl: "#partyAwardsSwiper .swiper-button-prev"
        },
    });

    $(".awards-swiper").each(function(index,element){
        $(this).attr("id",`partyAwardSwiper-${index}`);

        const partyAwardsSwiper = new Swiper(`#partyAwardSwiper-${index}`,{
            slidesPerView: 4,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: `#partyAwardSwiper-${index} .swiper-button-next`,
                prevEl: `#partyAwardSwiper-${index} .swiper-button-prev`
            }
        });
    });

    $(".awards-tab .content-tab").on("click",function(){
        $(this).addClass("active");
        $(".awards-tab .content-tab").not($(this)).removeClass("active");

        const $tabIdx = $(this).index();
        $(".award-cont-wrap").hide();
        $(".award-cont-wrap").eq($tabIdx).stop().fadeIn(600);
    });

    $(".awards-swiper .winner-thumb").on("click",function(){
        const $replaceSrc = $(this).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');;
        imgLayerOpen($replaceSrc);
    });
});

// 이미지 팝업 오픈 함수
function imgLayerOpen(src) {
    $("html,body").css("overflow-y","hidden");
    $("#imgPopup").stop().fadeIn(100,function(){
        const $contentBox = $(this).children(".content-box");
        const $imgObj = $("<img>");
        $contentBox.addClass("show");
        $imgObj.prop("src",src).appendTo($contentBox.children(".img-wrap"));
    });
}

// 팝업 닫기 함수
function layerClose() {
    $("html,body").css("overflow-y","auto");
    $(".content-box").removeClass("show");
    setTimeout(function(){
        $(".layer-popup").stop().fadeOut(100);
        $(".video-wrap > iframe").remove();
        $(".img-wrap > img").remove();
    }, 200);
}