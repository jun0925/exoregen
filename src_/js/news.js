/***************************************
* file-name: news.js
* page-file-location: /news.html,news-read.html 
* using: 뉴스 관련 페이지 사용 JS
* date: 2021-07-13
****************************************/
$(function(){
    var $newsTab = $(".news-tab-list .tab");

    $newsTab.on("click",function(){
        var tabActiveClass = "active";

        $(this).addClass(tabActiveClass);
        $newsTab.not($(this)).removeClass(tabActiveClass);
    });
});