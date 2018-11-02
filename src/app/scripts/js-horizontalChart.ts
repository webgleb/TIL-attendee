export function horizontalChart() {
    $('.horizontal-chart-box__items').each(function () {
        var th = $(this), ch = th.find('.horizontal-chart-box__item'), max=0;
        ch.each(function () {
            var t = $(this), tV = Number(t.attr('data-value'));
            max < tV ? max=tV : null;
        });
        ch.each(function () {
            var t = $(this), tV = Number(t.attr('data-value')), vW = (tV*100)/max;
            t.find('.horizontal-chart-box__item-view').css({'width':vW+'%'});
        });
    });
}
