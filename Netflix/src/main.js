$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


$(document).ready(function() {

    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        $('#mask').css({ 'height': maskHeight });
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow", 0.8);
        $(id).fadeIn(2000);
    });

    $('.window .close').click(function(e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });

    $('#mask').click(function() {
        $(this).hide();
        $('.window').hide();
    });
});