/* tslint:disable */
export function compareBoxFillChart (args?) {
  function compareBoxFillChart(data:any, hight:any){
    if ( $('#compareBoxFillChart').length ){
      
      var th = $('#compareBoxFillChart');
      
      th.children().remove();

      var w = $(window).innerWidth(),
        thW = th.innerWidth(),
        thH = hight-20,
        d:any = data,
        dL:any = d.values.length,
        max = 0,
        step: any =(thW/(dL-1)).toFixed(1),
        ctPoints = [],
        control = {x:1124, y:100},
        svg, points='';

      for ( var x=0; x<dL; x++ ){
        d.values[x]>max?max=d.values[x]:null;
        ctPoints.push(x*step);
      }
      
      if ( w>1199 ){ thH < 145 ? thH=140 : null; }

      if ( w<=1199 ){ thW=control.x; thH=control.y; }

      for ( var z=0; z < dL; z++ ){
        const newLocal:any = (d.values[z] * 100 / max).toFixed(1);
        var y = thH - newLocal;
        points+=ctPoints[z]+' '+y+', ';
      }

      points=points.slice(0, -2);

      var svg:any = '<svg width="'+thW+'" height="'+thH+'" viewBox="0 0 '+thW+' '+thH+'"><polygon points="0 '+thH+', '+points+', '+thW+' '+thH+'" fill="#cf554d"/></svg>';
      
      $('#compareBoxFillChart').append(svg);
    }
  }

  function heightGetter(data){
    if ( $('.compare-box__statistic-n-view .__triple').length ){
      var vr = $('.compare-box__statistic-n-view'),
        ch = vr.children(),
        chL = vr.children().length,
        chFirstMg = ch.eq(0).outerHeight(true)-ch.eq(0).height(),
        // btOffset = ch.eq(chL-1).find('.compare-box__view-item-legend').eq(0).offset().top-8,
        tpOffset = ch.eq(1).offset().top,
        dfOffset = $(window).innerHeight()-tpOffset-chFirstMg-38,
        elHeight = dfOffset/(chL-1);
      for (var x=1; x<chL; x++){
        ch.eq(x).css({'height':elHeight+'px'});
      }
      if (data) {
        compareBoxFillChart(data, elHeight);
      }
    }
  }
  var data = {
    values : args ? args : null
  };
  setTimeout(function () {
    heightGetter(data);
  
    $(window).on('resize', function(){
      heightGetter(data);
    });
  });
}