$(function () {

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
        //pauseOnHover: true,
        speed: 1,
    });
});