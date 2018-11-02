export function colChartJslogic () {

  $('.col-chart__content-view').each(function () {

    //- custom type
    var th = $(this), thChild = th.find('.col-chart__item-chr'), thChildLength = thChild.length, max = 0, type = th.attr('data-type'),
      sum = 0;
    thChild.each(function(){
      var thValue = Number($(this).attr('data-value'));
      max < thValue ? max=thValue : null;
      sum+=thValue;
    });
    thChild.each(function(){
      var th = $(this),
        thValue = Number(th.attr('data-value')),
        viewHeight = (thValue*100)/max;
      th.css({'height':viewHeight+'%'});
    });

    //- maxValue type
    type == 'maxValue' ? th.find('.col-chart__item-chr[data-value="'+max+'"]').addClass('__max__') : null;

    //- double type
    if ( type == 'double' ){
      var wr = $('[data-type="double"]'),
        el = wr.find('.col-chart__item');
      el.each(function(){
        var th = $(this),
          ch = th.find('.col-chart__item-chr'),
          tNum = 0;
        ch.each(function(){
          var vl = Number($(this).attr('data-value'));
          if ( vl > tNum ) {
            tNum = vl;
          }
        });
        th.find('.col-chart__item-chr[data-value="'+tNum+'"]').addClass('__front__');
      });
    }
  });
};
