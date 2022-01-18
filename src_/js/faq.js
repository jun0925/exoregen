/***************************************
* file-name: faq.js
* page-file-location: /faq.html
* using: 자주 묻는 질문 페이지 사용 js
* date: 2021-07-16
****************************************/

$(function(){
    var $faqList = $(".faq-list li");
    var faq_A_Str = ".faq-a";

    $faqList.on("click",function(){
        $(this).toggleClass("faq-open");
        $faqList.not($(this)).removeClass("faq-open");
        $(this).children(faq_A_Str).stop().slideToggle(300);
        $faqList.not($(this)).children(faq_A_Str).stop().slideUp(300);
    });
});