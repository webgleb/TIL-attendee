export function chartLinePointConstruct (data, callback) {

  function chartLinePointConstruct(data){
    let validated = false;
    data.values.forEach(element => {
      element.value.forEach(el => {
        if (el > 0) {
          validated = true;
        }
      })
    });
    if (!validated) {
      alert('There is no data provided, please change filter options!');
      return false;
    }
    if ( $('#chartLinePointConstruct').length ){
  
    // construnt globalElement
      
      var chart = $('#chartLinePointConstruct'),
        chartLine = $('.distribution-box__chart'),
        vtLine = chartLine.find('.distribution-box__vt-line'),
        vtLineTitle = chartLine.find('.distribution-box__vt-line-title'),
        vtControl = $('.distribution-box__control'),
        vtLinePos;
  
    // destroy prevoius content
  
      chart.children().remove();
  
    // construnt globalSetting
  
      var	chartWidth = chart.width(),
        chartHeight = chart.height(),
        legendHeight = 32,
        pointRadius = 15,
        lineStrokeWidth = 2,
        globalDelimetr = 1,
        styleArray = ["#3a8f98","#f68d56", "#8ec182", "#3b929b", "#ffc354", "#f68d56", "#cf554d"],
        styleTextArray = ["#192b35","#192b35", "#192b35", "#192b35", "#192b35", "#192b35", "#192b35"],
        styleTextSize = 12,
        globalLegendStyle = '#000000',
        globalLegendTextStyle = '#cee6f3',
        globalLegendTextSize = 18,
        viewBox = {x: chartWidth, y: chartHeight },
        sufix = '%',
        d = data,
        gw = '100%',
        gH = '100%',
        w = $(window).innerWidth(),
        control = {x:1124, y:350},
        svgGlobalMaxSumValue = [];
  
      for ( var x=0; x<d.values.length; x++){
        var cycleMaxSumValue = 0;
        for ( var y=0; y<d.values[x].value.length; y++ ){
          cycleMaxSumValue+=d.values[x].value[y];
        }
        svgGlobalMaxSumValue.push(cycleMaxSumValue);
      }
  
      if ( w>=1200 ){
  
        // construnt GlobalVariables
  
          var svgGlobalCols = d.legend.length,
            svgGlobalColWidth = Math.round(((viewBox.x-(globalDelimetr*svgGlobalCols)-1)/svgGlobalCols)),
            svgGlobalColStep = [],
            svgGlobalCenterStep = [],
            maxValues = [];
  
          for ( var x=0; x<svgGlobalCols; x++ ){
            var globalColStepItem = x*svgGlobalColWidth + x*globalDelimetr,
              globalCenterStepItem = globalColStepItem+(svgGlobalColWidth/2);
            svgGlobalColStep.push(globalColStepItem);
            svgGlobalCenterStep.push(globalCenterStepItem);
          }
  
          for ( var x=0; x<d.values.length; x++){
            var cycleMaxValue = 0;
            for ( var y=0; y<svgGlobalCols; y++ ){
              Number(d.values[x].value[y])>=cycleMaxValue?cycleMaxValue=d.values[x].value[y]:null;
            }
            maxValues.push(cycleMaxValue);
          }
  
        // construnt GlobalLegend
  
          var svgGlobalLegend = '',
            svgGlobalLegendContent = '',
            svgGlobalLegendItemsYPosition = viewBox.y-legendHeight,
            svgGlobalLegendItemsTextYPosition = svgGlobalLegendItemsYPosition+(legendHeight/2);
          
          for ( var x=0; x<svgGlobalCols; x++ ){
            var svgGlobalLegendRectGenerateContent = '<rect x="'+svgGlobalColStep[x]+'" y="'+svgGlobalLegendItemsYPosition+'" width="'+svgGlobalColWidth+'" height="'+legendHeight+'"/>',
              svgGlobalLegendtextGenerateContent = '<text x="'+svgGlobalCenterStep[x]+'" y="'+svgGlobalLegendItemsTextYPosition+'" text-anchor="middle" fill="'+globalLegendTextStyle+'" font-size="'+globalLegendTextSize+'" style="dominant-baseline: middle;" >'+d.legend[x]+'</text>';
            svgGlobalLegendContent+=svgGlobalLegendRectGenerateContent+svgGlobalLegendtextGenerateContent;
          }
  
          svgGlobalLegend = '<g fill="'+globalLegendStyle+'">'+svgGlobalLegendContent+'</g>';
  
        // construnt ValuesLegends
  
          var svgTotalValuesLegends = '';
  
          for ( var x=0; x<d.values.length; x++){
  
            var svgValuesLegendContent = '',
              svgValuesLegendItemsYPosition = (viewBox.y-legendHeight)-( (x+1)*legendHeight + (x+1)*globalDelimetr ),
              svgValuesLegendItemsTextYPosition = svgValuesLegendItemsYPosition+(legendHeight/2);
  
            for ( var y=0; y<svgGlobalCols; y++ ){
  
              var fillOpacity = (d.values[x].value[y])/maxValues[x],
                svgValuesLegendRectGenerateContent = '<rect x="'+svgGlobalColStep[y]+'" y="'+svgValuesLegendItemsYPosition+'" width="'+svgGlobalColWidth+'" height="'+legendHeight+'" fill-opacity="'+fillOpacity+'"/>',
                svgValuesLegendRectGenerateStyleContent = '<rect x="'+svgGlobalColStep[y]+'" y="'+svgValuesLegendItemsYPosition+'" width="'+svgGlobalColWidth+'" height="'+legendHeight+'" fill="#ffffff"/>',
                svgValuesLegendtextGenerateContent = '<text x="'+svgGlobalCenterStep[y]+'" y="'+svgValuesLegendItemsTextYPosition+'" text-anchor="middle" fill="'+styleTextArray[x]+'" font-size="'+globalLegendTextSize+'" style="dominant-baseline: middle;">'+(d.values[x].value[y]*100/svgGlobalMaxSumValue[x]).toFixed(1)+sufix+'</text>';
              svgValuesLegendContent+=svgValuesLegendRectGenerateStyleContent+svgValuesLegendRectGenerateContent+svgValuesLegendtextGenerateContent;
  
            }
  
            svgValuesLegendContent = '<g fill="'+styleArray[x]+'">'+svgValuesLegendContent+'</g>';
            svgTotalValuesLegends+=svgValuesLegendContent;
  
          }
  
        // construnt Chart
  
          var maxValue = 0,
            svgTotalChart = '',
            horizontalPadding = 8,
            fieldHeight = viewBox.y-(horizontalPadding*2)-(pointRadius*2)-((legendHeight+globalDelimetr)*d.values.length)-(legendHeight+globalDelimetr);
  
          for ( var x=0; x<d.values.length; x++){
            for ( var y=0; y<svgGlobalCols; y++ ){
              Number(d.values[x].value[y])>=maxValue?maxValue=d.values[x].value[y]:null;
            }
          }
  
          for ( var x=0; x<d.values.length; x++){
  
            var chartContent = '',
              chartGItemLine = '',
              chartPolyline = '';
  
            for ( var y=0; y<svgGlobalCols; y++ ){
  
              var chartItemsYPosition = pointRadius+horizontalPadding+(fieldHeight-((d.values[x].value[y])/maxValue)*fieldHeight),
                chartCircleGenerateContent = '<circle cx="'+svgGlobalCenterStep[y]+'" cy="'+chartItemsYPosition+'" r="'+pointRadius+'" />',
                chartTextGenerateContent = '<text x="'+svgGlobalCenterStep[y]+'" y="'+chartItemsYPosition+'" text-anchor="middle" style="dominant-baseline: middle;" fill="#ffffff" font-size="'+styleTextSize+'">'+(d.values[x].value[y]*100/svgGlobalMaxSumValue[x]).toFixed(1)+sufix+'</text>';
  
              chartGItemLine+=svgGlobalCenterStep[y]+' '+chartItemsYPosition+', ';
              chartContent+=chartCircleGenerateContent+chartTextGenerateContent;
  
            }
  
            chartGItemLine=chartGItemLine.slice(0,-2);
            chartPolyline = '<polyline points="'+chartGItemLine+'" fill="transparent" stroke-width="2" stroke="'+styleArray[x]+'"/>';
            chartContent = '<g fill="'+styleArray[x]+'">'+chartPolyline+chartContent+'</g>';
            svgTotalChart+=chartContent;
  
          }
  
          var svgContent=svgTotalChart+svgTotalValuesLegends+svgGlobalLegend;
          
          var svg = '<svg width="'+gw+'" height="'+gH+'" viewBox="0 0 '+viewBox.x+' '+viewBox.y+'">'+svgContent+'</svg>';
  
          chart.append(svg);
  
      } else {
  
        // construnt GlobalVariables
  
          var svgGlobalRows = d.legend.length,
            svgGlobalRowHeight = 74,
            svgGlobalLegendWidth = 32,
            svgGlobalRowStep = [],
            svgGlobalRowCenterStep = [],
            maxValues = [];
          viewBox.y = svgGlobalRows * (svgGlobalRowHeight+1) - 1;
  
          for ( var x=0; x<svgGlobalRows; x++ ){
            var globalRowStepItem = x*svgGlobalRowHeight + x*globalDelimetr,
              globalCenterStepItem = globalRowStepItem+(svgGlobalRowHeight/2);
            svgGlobalRowStep.push(globalRowStepItem);
            svgGlobalRowCenterStep.push(globalCenterStepItem);
          }
  
          for ( var x=0; x<d.values.length; x++){
            var cycleMaxValue = 0;
            for ( var y=0; y<svgGlobalRows; y++ ){
              Number(d.values[x].value[y])>=cycleMaxValue?cycleMaxValue=d.values[x].value[y]:null;
            }
            maxValues.push(cycleMaxValue);
          }
  
        // construnt GlobalLegend
  
          var svgGlobalLegend = '',
            svgGlobalLegendContent = '';
          
          for ( var x=0; x<svgGlobalRows; x++ ){
            var svgGlobalLegendRectGenerateContent = '<rect x="'+0+'" y="'+svgGlobalRowStep[x]+'" width="'+svgGlobalLegendWidth+'" height="'+svgGlobalRowHeight+'"/>';
              svgGlobalLegendtextGenerateContent = '<text x="'+svgGlobalLegendWidth/2+'" y="'+svgGlobalRowCenterStep[x]+'" text-anchor="middle" fill="'+globalLegendTextStyle+'" font-size="'+16+'" style="dominant-baseline: middle; writing-mode: tb;">'+d.legend[x]+'</text>';
            svgGlobalLegendContent+=svgGlobalLegendRectGenerateContent+svgGlobalLegendtextGenerateContent;
          }
  
          svgGlobalLegend = '<g fill="'+globalLegendStyle+'">'+svgGlobalLegendContent+'</g>';
  
        // construnt ValuesLegends
  
          var svgTotalValuesLegends = '';
  
          for ( var x=0; x<d.values.length; x++){
  
            var svgValuesLegendContent = '',
              svgValuesLegendItemsXPosition = 1+(svgGlobalLegendWidth*(x+1))+x;
  
            for ( var y=0; y<svgGlobalRows; y++ ){
  
              var fillOpacity = (d.values[x].value[y])/maxValues[x],
                svgValuesLegendRectGenerateContent = '<rect x="'+svgValuesLegendItemsXPosition+'" y="'+svgGlobalRowStep[y]+'" width="'+svgGlobalLegendWidth+'" height="'+svgGlobalRowHeight+'" fill-opacity="'+fillOpacity+'"/>',
                svgValuesLegendRectGenerateStyleContent = '<rect x="'+svgValuesLegendItemsXPosition+'" y="'+svgGlobalRowStep[y]+'" width="'+svgGlobalLegendWidth+'" height="'+svgGlobalRowHeight+'" fill="#ffffff"/>',
                svgValuesLegendtextGenerateContent = '<text x="'+(svgValuesLegendItemsXPosition+16)+'" y="'+svgGlobalRowCenterStep[y]+'" text-anchor="middle" fill="'+styleTextArray[x]+'" font-size="'+16+'" style="dominant-baseline: middle; writing-mode: tb;">'+(d.values[x].value[y]*100/svgGlobalMaxSumValue[x]).toFixed(1)+sufix+'</text>';
              svgValuesLegendContent+=svgValuesLegendRectGenerateStyleContent+svgValuesLegendRectGenerateContent+svgValuesLegendtextGenerateContent;
  
            }
  
            svgValuesLegendContent = '<g fill="'+styleArray[x]+'">'+svgValuesLegendContent+'</g>';
            svgTotalValuesLegends+=svgValuesLegendContent;
  
          }
  
        // construnt Chart
  
          var maxValue = 0,
            svgTotalChart = '',
            verticalPadding = 8,
            fieldWidth = viewBox.x-((svgGlobalLegendWidth+globalDelimetr)*d.values.length)-(svgGlobalLegendWidth+globalDelimetr)-pointRadius*2,
            dff = viewBox.x-fieldWidth;
  
          for ( var x=0; x<d.values.length; x++){
            for ( var y=0; y<svgGlobalRows; y++ ){
              Number(d.values[x].value[y])>=maxValue?maxValue=d.values[x].value[y]:null;
            }
          }
  
          for ( var x=0; x<d.values.length; x++){
  
            var chartContent = '',
              chartGItemLine = '',
              chartPolyline = '';
  
            for ( var y=0; y<svgGlobalRows; y++ ){
  
              // var chartItemsXPosition = pointRadius+verticalPadding+(fieldWidth-((d.values[x].value[y])/maxValue)*fieldWidth),
              var chartItemsXPosition = dff+(((d.values[x].value[y])*(fieldWidth-pointRadius))/maxValue),
                chartCircleGenerateContent = '<circle cx="'+chartItemsXPosition+'" cy="'+svgGlobalRowCenterStep[y]+'" r="'+pointRadius+'" />',
                chartTextGenerateContent = '<text x="'+chartItemsXPosition+'" y="'+svgGlobalRowCenterStep[y]+'" text-anchor="middle" style="dominant-baseline: middle;" fill="#ffffff" font-size="'+styleTextSize+'">'+(d.values[x].value[y]*100/svgGlobalMaxSumValue[x]).toFixed(1)+sufix+'</text>';
  
              chartGItemLine+=chartItemsXPosition+' '+svgGlobalRowCenterStep[y]+', ';
              chartContent+=chartCircleGenerateContent+chartTextGenerateContent;
  
            }
  
            chartGItemLine=chartGItemLine.slice(0,-2);
            chartPolyline = '<polyline points="'+chartGItemLine+'" fill="transparent" stroke-width="2" stroke="'+styleArray[x]+'"/>';
            chartContent = '<g fill="'+styleArray[x]+'">'+chartPolyline+chartContent+'</g>';
            svgTotalChart+=chartContent;
  
          }
  
        var svgContent=svgTotalChart+svgTotalValuesLegends+svgGlobalLegend;
  
        var svg = '<svg width="'+gw+'" height="'+gH+'" viewBox="0 0 '+viewBox.x+' '+viewBox.y+'">'+svgContent+'</svg>';
  
        chart.append(svg);
  
      }
  
      if ( w>=1200 ){
  
        var stIndex;
  
        function calculateLR(index){
  
          var i = index;
  
          for (var y=0; y<d.values.length; y++){
            var s = 0,
              tb = $('.distribution-box__control-values table');
            for (var x=0; x<i; x++){
              s=s+Number((d.values[y].value[x]*100/svgGlobalMaxSumValue[y]).toFixed(1));
            }
            tb.find('tr').eq(d.values.length-(y+1)).find('td').eq(1).text(s.toFixed(1) + '%');
          }
  
  
          for (var y=0; y<d.values.length; y++){
            var s = 0,
              tb = $('.distribution-box__control-values table');
            for (var x=i; x<d.values[y].value.length; x++){
              s=s+Number((d.values[y].value[x]*100/svgGlobalMaxSumValue[y]).toFixed(1));
            }
            tb.find('tr').eq(d.values.length-(y+1)).find('td').eq(2).text(s.toFixed(1) + '%');
          }
  
        }
  
        var btN, BtP;
        vtLine.css({
          'left': svgGlobalColStep[Math.round(svgGlobalCols/2)] + 'px'
        });
  
        vtLine.attr('data-pos', Math.round(svgGlobalCols/2));
        callback(svgGlobalCols/2);
  
  
        for ( var x=0; x<svgGlobalCols; x++ ){
          if ( (svgGlobalCenterStep[Number(vtLine.attr('data-pos'))] > svgGlobalColStep[x]) && (svgGlobalCenterStep[Number(vtLine.attr('data-pos'))] < (svgGlobalColStep[x] + svgGlobalColWidth)) ){
            vtLineTitle.text(d.legend[x]);
            BtP=d.legend[x-1];
            btN=d.legend[x+1];
            stIndex = x;
          }
        }
  
        calculateLR(stIndex);
  
        var BtPArrayNumber = BtP.match( /\d+/g ),
          BtPPrefix = BtP.match( /[A-Za-z]+/g )[0],
          BtNArrayNumber = btN.match( /\d+/g ),
          BtNPrefix = btN.match( /[A-Za-z]+/g )[0];
  
        $('.distribution-box__control-action .__prev span').text('-' +(Number(BtPArrayNumber[1])-Number(BtPArrayNumber[0]))+BtPPrefix);
        $('.distribution-box__control-action .__next span').text('+'+(Number(BtNArrayNumber[1])-Number(BtNArrayNumber[0]))+BtNPrefix);
  
        $('.distribution-box__control-action .__prev').off('click').on('click', function(){
          var pr = $('.distribution-box__control-action .__prev span'),
            nx = $('.distribution-box__control-action .__next span'),
            thP = Number(vtLine.attr('data-pos')),
            thN = thP-1 < 1 ? 1 : thP-1, linePos, controlPos, strNext, strPrev;
  
            calculateLR(thN);
  
          vtLine.css({
            'left': svgGlobalColStep[thN] + 'px'
          });
          callback(thN);
  
          for ( var x=0; x<svgGlobalCols; x++ ){
            if ( (svgGlobalCenterStep[thN] > svgGlobalColStep[x]) && (svgGlobalCenterStep[thN] < (svgGlobalColStep[x] + svgGlobalColWidth)) ){
              vtLineTitle.text(d.legend[x]);
              strPrev=d.legend[x-1];
              strNext=d.legend[x+1];
            }
          }
          
          vtLine.attr('data-pos', thN);
  
          linePos = vtLine.offset().left,
          controlPos = vtControl.offset().left;
  
          controlPos-linePos<=0?vtLine.addClass('__is_small__'):vtLine.removeClass('__is_small__');
  
          strPrev===undefined?strPrev='0-0 m':null;
  
          var prevArrayNumber = strPrev.match( /\d+/g ),
            prevPrefix = strPrev.match( /[A-Za-z]+/g )[0],
            nextArrayNumber = strNext.match( /\d+/g ),
            nextPrefix = strNext.match( /[A-Za-z]+/g )[0], prevArrayDifference, nextArrayDifference;
  
          if ( nextArrayNumber[1]===undefined && nextArrayNumber[0]!==undefined ){
            prevArrayDifference = prevArrayNumber[1] - prevArrayNumber[0];
            nextArrayDifference = ' to max';
            nextPrefix = '';
          } else {
            prevArrayDifference = prevArrayNumber[1] - prevArrayNumber[0];
            nextArrayDifference = nextArrayNumber[1] - nextArrayNumber[0];
          }
  
          if (prevArrayDifference==0) {
            pr.text('is min');
            pr.closest('button').prop('disabled', true);
          } else {
            pr.text('-'+prevArrayDifference+prevPrefix);
            pr.closest('button').prop('disabled', false);
          }
          
          if (nextArrayDifference==0) {
            nx.text('is max');
            nx.closest('button').prop('disabled', true);
          } else {
            nx.text('+'+nextArrayDifference+nextPrefix);
            nx.closest('button').prop('disabled', false);
          }
  
        });
  
        $('.distribution-box__control-action .__next').off('click').on('click', function(){
          var pr = $('.distribution-box__control-action .__prev span'),
            nx = $('.distribution-box__control-action .__next span'),
            thP = Number(vtLine.attr('data-pos')),
            thN = thP+1 > svgGlobalCols-1 ? svgGlobalCols-1 : thP+1, linePos, controlPos, strNext, strPrev;
  
          calculateLR(thN);
  
          vtLine.css({
            'left': svgGlobalColStep[thN] + 'px'
          });
          callback(thN);
  
          for ( var x=0; x<svgGlobalCols; x++ ){
            if ( (svgGlobalCenterStep[thN] > svgGlobalColStep[x]) && (svgGlobalCenterStep[thN] < (svgGlobalColStep[x] + svgGlobalColWidth)) ){
              vtLineTitle.text(d.legend[x]);
              strPrev=d.legend[x-1];
              strNext=d.legend[x+1];
            }
          }
  
          vtLine.attr('data-pos', thN);
  
          linePos = vtLine.offset().left,
          controlPos = vtControl.offset().left;
  
          controlPos-linePos<=0?vtLine.addClass('__is_small__'):vtLine.removeClass('__is_small__');
  
          strNext===undefined?strNext='0-0 Hr':null;
  
          var prevArrayNumber = strPrev.match( /\d+/g ),
            prevPrefix = strPrev.match( /[A-Za-z]+/g )[0],
            nextArrayNumber = strNext.match( /\d+/g ),
            nextPrefix = strNext.match( /[A-Za-z]+/g )[0], prevArrayDifference, nextArrayDifference;
          if ( nextArrayNumber[1]===undefined && nextArrayNumber[0]!==undefined ){
            prevArrayDifference = prevArrayNumber[1] - prevArrayNumber[0];
            nextArrayDifference = ' to max';
            nextPrefix = '';
          } else {
            prevArrayDifference = prevArrayNumber[1] - prevArrayNumber[0];
            nextArrayDifference = nextArrayNumber[1] - nextArrayNumber[0];
          }
  
          if (prevArrayDifference==0) {
            pr.text('is min');
            pr.closest('button').prop('disabled', true);
          } else {
            pr.text('-'+prevArrayDifference+prevPrefix);
            pr.closest('button').prop('disabled', false);
          }
  
          if (nextArrayDifference==0) {
            nx.text('is max');
            nx.closest('button').prop('disabled', true);
          } else {
            nx.text('+'+nextArrayDifference+nextPrefix);
            nx.closest('button').prop('disabled', false);
          }
  
        });
  
      }
  
    }
  }
  chartLinePointConstruct(data);

  $(window).on('resize', function(){
    chartLinePointConstruct(data);
  });
}

