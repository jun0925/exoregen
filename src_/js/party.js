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
            grabCursor: true,
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

    $(".awards-swiper").each(function(index,element){
        $(this).attr("id",`partyAwardSwiper-${index}`);
        
        let centerOption;
        let awardSwiperWrap = $(`#partyAwardSwiper-${index} .swiper-wrapper`);
        let awardsContLength = awardSwiperWrap.children().length


        if(awardsContLength == 1) {
            centerOption = true;
        } else {
            centerOption = false;
        }

        if(awardsContLength <= 3) {
            awardSwiperWrap.css("justify-content","center");
        } else {
            awardSwiperWrap.css("justify-content","");
        }

        const partyAwardsSwiper = new Swiper(`#partyAwardSwiper-${index}`,{
            slidesPerView: 4,
            spaceBetween: 20,
            speed: 800,
            observer: true,
            observeParents: true,
            centeredSlides: centerOption,
            grabCursor: true,
            navigation: {
                nextEl: `#partyAwardSwiper-${index} .swiper-button-next`,
                prevEl: `#partyAwardSwiper-${index} .swiper-button-prev`
            }
        });

        $(".awards-tab .content-tab").on("click",function(){
            $(this).addClass("active");
            $(".awards-tab .content-tab").not($(this)).removeClass("active");
    
            const $tabIdx = $(this).index();
            $(".award-cont-wrap").hide();
            $(".award-cont-wrap").eq($tabIdx).stop().fadeIn(600);
            partyAwardsSwiper.slideTo(0);
        });
    });
});