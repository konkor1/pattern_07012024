$(document).ready(function () {
    $(window).scroll(function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object && bottom_of_object > $('.about-content').offset().top) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
});

