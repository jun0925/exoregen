/***************************************
 * file-name: brand-sub.js
 * page-file-location: /brand01 ~ brand07.html 
 * using: 브랜드 서브페이지사용
 * date: 2021-07-14
 ****************************************/
$(function () {
    /* brand02 tab*/
    var $brand02Tab = $(".brand02 .tab");
    contActive($brand02Tab);

    /* brand03 tab*/
    var $brand03Tab = $(".brand03 .tab");
    contActive($brand03Tab);

    /* brand04 tab */
    var $brand04Tab = $(".brand04 .tab");
    contActive($brand04Tab);

    var $brand05Tab = $(".brand05 .tab");
    contActive($brand05Tab);

    /* brand06 tab */
    var $brand06Tab = $(".brand06 .tab");
    contActive($brand06Tab);

    var videoPopup = document.getElementById("videoPopup");
    var videoPopupBox = document.getElementById("videoPopupBox");
    var iframeCont = document.querySelector(".video-popup-box > .video-wrap > iframe");
    var htmlBody = document.querySelector("html,body");

    $("#videoPopupBox > .close-btn").on("click",videoClose);
    $("#videoPopup").on("click",videoClose);
    $("#videoPopupBox").on("click",function(e){
        e.stopPropagation();
    });

    function videoOpen(url) {
        videoPopup.style.display = "block";
        htmlBody.style.overflowY = "hidden";
        setTimeout(function () {
            videoPopupBox.classList.add("show");
            iframeCont.setAttribute("src", url);
            video.play();
        }, 50);
    }
    
    function videoClose() {
        iframeCont.setAttribute("src", " ");
        htmlBody.style.overflowY = "auto";
        videoPopupBox.classList.remove("show");
        setTimeout(function () {
            videoPopup.style.display = "none";
            //videoPlayBtn.classList.remove("hide");
        }, 300);
    }
});

function contActive(tabBtn) {
    tabBtn.on("click", function () {
        var choiceClass = "choice";
        $(this).addClass(choiceClass);
        tabBtn.not($(this)).removeClass(choiceClass);

        var $cont = [$(".cont1-box"), $(".cont2-box"), $(".cont3-box"), $(".cont4-box"), $(".cont5-box"), $(".cont6-box"), $(".cont7-box"), $(".cont8-box"), $(".cont9-box"), $(".cont10-box")];
        var $tabIndex = $(this).parent().index();

        $(".cont").css("display", "none").removeClass("cont-show");
        $cont[$tabIndex].css("display", "block");
        setTimeout(function () {
            $cont[$tabIndex].addClass("cont-show");
        }, 200);
    });
}
