WebFontConfig = {
    google: {
        families: ['Noto+Sans+TC:300,400,500,700', 'Noto+Serif+TC:400,500,600,700,900', 'EB+Garamond']
    }
};
(function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s)
})();

$(function(){
    var len = 60; // 超過50個字以"..."取代
    $(".body p").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});