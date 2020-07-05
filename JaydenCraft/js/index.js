$(document).ready(function () {
    setTimeout(function () {
        $('.introduction_article').animate({opacity: 1}, 2000);
    }, 1000)

    $('.navigation a').click(function() {
        $('.navigation a').removeClass('current')
        $(this).addClass('current')
    })
})