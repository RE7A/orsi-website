$(document).on('click', 'a[href^="#"]', function(elemen) {
    var id = $(this).attr('href');

    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    elemen.preventDefault();

    var pos = $(id).offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos},300);
});
