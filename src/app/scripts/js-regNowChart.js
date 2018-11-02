export function regNowChart () {
	function regNowChart(data){
	
		if ( $('#regNowChart').length ){
	
		// destroy prevoius content
	
			$('#regNowChart').children().remove();
	
	
		//global variables
	
			var d = data,
				standSize = 16,
				roomSize = {w: d.room[0], h: d.room[1]},
				stands = d.stands,
				visitors = d.visitors,
				chart = $('#regNowChart'),
				chartW = chart.innerWidth(),
				chartH, k, svg, svgContent, svgField, svgStends='', svgVisitors='';
	
			$(window).innerWidth()<1200 ? chartH = 240 : chartH = chart.innerHeight();
	
			var k = (chartW/roomSize.w).toFixed(5);
			var k1 = (chartH/roomSize.h).toFixed(5);
	
		//construct new chart
	
			svgField = '<g><rect x="0" y="0" rx="10" ry="10" width="'+chartW+'" height="'+chartH+'" fill="#000000"/></g>';
	
			for (var x=0; x<stands.length; x++){
				var temporalCycleElement = '<rect x="'+stands[x].stand[0]*k+'" y="'+stands[x].stand[1]*k1+'" rx="2" ry="2" width="'+standSize+'" height="'+standSize+'"/>';
				svgStends+=temporalCycleElement;
			}
	
			svgStends+='<g fill="#ffffff">'+svgStends+'</g>';
	
			for (var x=0; x<visitors.length; x++){
				var temporalCycleElement, tmpX, tmpY;
				visitors[x].visitor[0]*k < 6 ? tmpX=7 : tmpX = visitors[x].visitor[0]*k,
				visitors[x].visitor[1]*k1 < 6 ? tmpY=7 : tmpY = visitors[x].visitor[1]*k1;
				temporalCycleElement = '<circle cx="'+tmpX+'" cy="'+tmpY+'" r="4" stroke="#958e48" fill="transparent" stroke-width="2"/>';
				svgVisitors+=temporalCycleElement;
			}
	
			svgVisitors+='<g>'+svgVisitors+'</g>';
	
			svgContent = svgField+svgStends+svgVisitors;
	
			svg = '<svg width="'+chartW+'" height="'+chartH+'" viewBox="0 0 '+chartW+' '+chartH+'">'+svgContent+'</svg>';
	
			chart.append(svg);
	
		}
	
	}
	
	var data = {
		room: [150, 100],
		stands : [
			{
				stand : [21, 15]
			},
			{
				stand : [33, 15]
			},
			{
				stand : [45, 15]
			},
			{
				stand : [57 , 15]
			},
			{
				stand : [69, 15]
			},
			{
				stand : [81, 15]
			},
			{
				stand : [93 , 15]
			},
			{
				stand : [105, 15]
			},
			{
				stand : [117, 15]
			},
			{
				stand : [129 , 15]
			},
			{
				stand : [45 , 50]
			},
			{
				stand : [45 , 65]
			},
			{
				stand : [81 , 50]
			},
			{
				stand : [81 , 65]
			}
		],
		visitors : [
			{
				visitor : [12, 50]
			},
			{
				visitor : [43, 51]
			},
			{
				visitor : [34, 59]
			},
			{
				visitor : [12, 68]
			},
			{
				visitor : [0, 6]
			},
			{
				visitor : [23, 85]
			},
			{
				visitor : [65, 65]
			},
			{
				visitor : [34, 78]
			},
			{
				visitor : [87, 25]
			},
			{
				visitor : [45, 36]
			},
			{
				visitor : [97, 1]
			},
			{
				visitor : [45, 9]
			},
			{
				visitor : [23, 52]
			},
			{
				visitor : [54, 69]
			},
			{
				visitor : [11, 37]
			}
		]
	};
	
	regNowChart(data);
	
	
	$(window).on('resize', function(){
	
		var data = {
			room: [150, 100],
			stands : [
				{
					stand : [21, 15]
				},
				{
					stand : [33, 15]
				},
				{
					stand : [45, 15]
				},
				{
					stand : [57 , 15]
				},
				{
					stand : [69, 15]
				},
				{
					stand : [81, 15]
				},
				{
					stand : [93 , 15]
				},
				{
					stand : [105, 15]
				},
				{
					stand : [117, 15]
				},
				{
					stand : [129 , 15]
				},
				{
					stand : [45 , 50]
				},
				{
					stand : [45 , 65]
				},
				{
					stand : [81 , 50]
				},
				{
					stand : [81 , 65]
				}
			],
			visitors : [
				{
					visitor : [12, 50]
				},
				{
					visitor : [43, 51]
				},
				{
					visitor : [34, 59]
				},
				{
					visitor : [12, 68]
				},
				{
					visitor : [0, 6]
				},
				{
					visitor : [23, 85]
				},
				{
					visitor : [65, 65]
				},
				{
					visitor : [34, 78]
				},
				{
					visitor : [87, 25]
				},
				{
					visitor : [45, 36]
				},
				{
					visitor : [97, 1]
				},
				{
					visitor : [45, 9]
				},
				{
					visitor : [23, 52]
				},
				{
					visitor : [54, 69]
				},
				{
					visitor : [11, 37]
				}
			]
		};
	
		regNowChart(data);
	
	})
}