export function scrollTableResponsiveJsLogic() {
  function scrollTableResponsive() {
    if ($('.__scroll-full-box').length) {
      var tb = $('.__scroll-full-box'),
        tp = tb.offset().top,
        wd = $(window).innerHeight(),
        df = 56;
      tb.css({
        'max-height': wd - tp - df + 'px'
      });
    }
  }

  scrollTableResponsive();

  $(window).on('resize', function () {
    scrollTableResponsive();
  });
}
