/***************************************
* file-name: product-detail.js
* page-file-location: /product-detail.html
* using: 메인 사용 JS
* date: 2021-07-14
****************************************/

$(function(){
    
    //product thumb Swiper 
    var productThumb = new Swiper(".product-thumb-swiper",{
        slidesPerView: "auto",
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        speed: 600,
    });
    
    //product main Swiper
    var productMainSwiper = new Swiper(".product-main-swiper",{
        speed: 600,
        navigation: {
            nextEl: ".product-main-swiper .swiper-button-next",
            prevEl: ".product-main-swiper .swiper-button-prev",
        },
        thumbs: {
            swiper: productThumb,
        },
    });

    productMainSwiper.on("slideChangeTransitionStart",function(){
        productThumb.slideTo(productMainSwiper.activeIndex);
    });

    //detail or delivery tab
    var $detailTab = $(".detail-tab-list > li");
    $detailTab.on("click",function(){
        var tabClass = "choice";
        var $thisId = $(this).attr("id");
        var $detail = $(".tab-cont > .detail");
        var $delivery = $(".tab-cont > .delivery");
        
        $(this).addClass(tabClass);
        $detailTab.not($(this)).removeClass(tabClass);
        
        if($thisId == "detailTab") {
            $delivery.css("display","none");
            $detail.css("display","block");
        } else if($thisId == "deliveryTab") {
            $detail.css("display","none");
            $delivery.css("display","block");
        }
    });
    
    //detail toggle
    var detailContList = document.querySelectorAll(".detail-list > li");
    for(var i= 0 ; i < detailContList.length; i++) {
        detailContList[i].onclick = function() {
            this.classList.toggle("active");
        }
    }

    //product swiper 
    var anotherProductSSwiper = new Swiper ("#anotherProductsSwiper",{
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});