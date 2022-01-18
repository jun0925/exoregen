$(function(){
    var anotherProductSSwiper = new Swiper ("#anotherProductsSwiper",{
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