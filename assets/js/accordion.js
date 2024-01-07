//THIS NEEDS TO BE UPDATED TO REFERENCE THE NEW FONTELLO GLYPHS//
$(document).ready(function () {
    $(".accordion-item > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".accordion-content")
                .slideUp(200);
        } else {
            $(".accordion-item > a").removeClass("active");
            $(this).addClass("active");
            $(".accordion-content").slideUp(1000);
            $(this)
                .siblings(".accordion-content")
                .slideDown(1000);
        }
    });
});