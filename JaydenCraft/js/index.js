$(document).ready(function () {
    setTimeout(function () {
        $(".introduction_article").animate({opacity: 1}, 2000);
    }, 1000)

    $(".navigation a").click(function() {
        $(".navigation a").removeClass("current");
        $(this).addClass("current");
    })

    $(document).on("scroll", onScroll);
})

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    if (scrollPos < 400) {
        $(".navigation a").removeClass("current");
        $(".navigation a").first().addClass("current");
    } else {
        $(".navigation a").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $(".navigation a").removeClass("current");
                currLink.addClass("current");
            }
            else {
                currLink.removeClass("current");
            }
        });
    }
}