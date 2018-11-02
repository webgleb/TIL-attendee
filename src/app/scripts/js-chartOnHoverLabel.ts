export function chartHoverFunction() {
/* tslint:disable */
	function chartHoverFunction(type, event: any, element){
		var th = $('.compare-box__label'),
			x = event.clientX,
			y = event.clientY;
		th.text($(element).attr('data-value'));
		th.css({
			'top' : y+'px',
			'left' : x+'px'
		});
		if ( type == 'on' ){
			th.addClass('active');
		} else {
			th.removeClass('active');
		}
	}
	
	$('.compare-box__view-item-col-ch')
		.on('mouseover', function(event){
			chartHoverFunction('on', event, this);
		})
		.on('mousemove', function(){
			chartHoverFunction('on', event, this);
		})
		.on('mouseout', function(){
			chartHoverFunction('off', event, this);
		})
/* tslint:enable */
}
