
  $(document).scroll(function() {
    if ($(this).scrollTop() >= 20) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  
  $('.go-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 10, 'swing');
  });