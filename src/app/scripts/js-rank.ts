export function rankJslogic() {
  if ($('.compare-box__rank-items').length) {
    var th = $('.compare-box__rank-items'),
      thC = th.find('.compare-box__rank-item'),
      max = 0;
    thC.each(function () {
      var thVw = Number($(this).find('.compare-box__rank-item-view').attr('data-value'));
      thVw > max ? max = thVw : null;
    });
    thC.each(function () {
      var thVw = Number($(this).find('.compare-box__rank-item-view').attr('data-value')),
        vw = $(this).find('.compare-box__rank-item-view i'),
        vwEm = $(this).find('.compare-box__rank-item-view i em');
      vw.css({
        'width': thVw * 100 / max + '%'
      });
      vwEm.css({
        'opacity': 1 - thVw / max
      });
    });
  }
}
