export function columnChartJslogic () {
    $('.column-chart__view').each(function () {
        var thChild = $(this).children(), max = 0;
        thChild.each(function(){
            var thValue = Number($(this).children().attr('data-value'));
            max < thValue ? max=thValue : null;
        });
        thChild.each(function(){
            var th = $(this).children(),
                thValue = Number(th.attr('data-value')),
                viewWidth = (thValue*100)/max;
            th.css({'width':viewWidth+'%'});
        });
    });
    
    
    
    $('.compare-box__view-container').each(function () {


        if ( $(this).find('.compare-box__view-item-col-ch').length ){

            $('.compare-box__view-item-chr-wr').each(function(){

                var th = $(this), ch = th.find('.compare-box__view-item-col-ch'), s=0;

                ch.each(function(){
                    s+=Number($(this).attr('data-value'));
                });

                th.attr('data-value', s);

            });

        }
    
        var thChild = $(this).find('.compare-box__view-item'), max = 0;
    
        thChild.each(function(){
            var thValue = Number($(this).find('.compare-box__view-item-chr-wr').attr('data-value'));
            max < thValue ? max=thValue : null;
        });
    
        thChild.each(function(){
            var th = $(this).find('.compare-box__view-item-chr-wr'),
                thValue = Number(th.attr('data-value')),
                viewHeight = (thValue*100)/max;
            th.css({'height':viewHeight+'%'});
            th.attr({'data-gv':viewHeight+'%'});
        });
    
        if ( $(this).hasClass('__num-max__') ){
            thChild.find('.compare-box__view-item-chr-wr[data-value="'+max+'"]').addClass('__max__');
        }
    
        if ( $(this).find('.compare-box__view-item-col-ch').length ){
            $('.compare-box__view-item-chr-wr').each(function(){
                var th = $(this), ch = th.find('.compare-box__view-item-col-ch'), max=0, gm = th.attr('data-value');
                ch.each(function(){
                    var thValue = Number( $(this).attr('data-value') );
                    max < thValue ? max=thValue : null;
                });
                ch.each(function(){
                    var thValue = Number( $(this).attr('data-value') ), vh;
                    $(this).hasClass('__vg') ? vh = (thValue*100)/max : vh = (thValue*100)/gm ;
                    $(this).css({'height':vh+'%'});
                    $(this).attr({'data-gv':vh+'%'});
                });
            });
        }
        
    });
    
    $('.compare-box__filter-title').on('click', function(){
        $(this).closest('.compare-box__filter').toggleClass('active');
    });
    
    function columnChartRs(){
        if ( $('.compare-box__view').length ){
            var th = $('.compare-box__view'),
                ww = $(window).innerWidth();
            if ( th.hasClass('__rs_clm__') ){
                if ( ww < 992 ){
                    th.find('.compare-box__view-item-col-ch').each(function(){
                        $(this).css({'width':''+$(this).attr('data-gv')});
                    })
                    th.find('.compare-box__view-item-chr-wr').each(function(){
                        $(this).css({'width':''+$(this).attr('data-gv')});
                    })
                } else {
                    th.find('.compare-box__view-item-col-ch').each(function(){
                        $(this).css({'width':'100%'});
                    })
                    th.find('.compare-box__view-item-chr-wr').each(function(){
                        $(this).css({'width':'100%'});
                    })
                }
            }
        }
    }
    
    columnChartRs();
    
    $(window).on('resize', function(){
        columnChartRs();
    });
};
