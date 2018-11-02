export function menuJslogic() {
	var $body = $('body');
	var $drops = $('.c-menu-item-drop'),
		$menu = $('.l-menu-side'),
		$menu_trig = $('.l-menu-side-trig'),
		$days = $('.c-menu-days'),
		$days_trig = $('.c-menu-days-trig'),
		days_length = $days.find('.c-menu-days-row').eq(0).find('.c-menu-days-col').length,
		$days_first_child = $days.find('.c-menu-days-col:first-child'),
		$days_not_first_child = $days.find('.c-menu-days-col:not(:first-child)'),
		$days_rows = $days.find('.c-menu-days-row'),
		$menu_list = $menu.find('.c-menu-list'),
		$group_items = $menu_list.find('.c-menu-group').children().not('.c-menu-group-ttl'),
		days_reset_flag = false,
		block_open_timeout = false,
		block_open_process = false;

	function reset_drop_position(){
		$drops.css({top:''});
	};

	function update_drop_position(){
		reset_drop_position();
		$drops.each(function(){
			var drop = $(this),
				parent_item = drop.closest('.c-menu-item, .c-menu-group-item'),
				d = drop[0].getBoundingClientRect(),
				p = parent_item[0].getBoundingClientRect(),
				wh = window.innerHeight;

			if (d.bottom > wh) {
				drop.css({
					top: wh - d.bottom
				});
			};
			if (p.top < 0) {
				drop.css({
					top: -p.top
				});
			};
		});
	};

	function reset_menu_position(){
		$menu.css({
			'margin-top': '',
			'max-height': ''
		});
	};

	function update_menu_position(){
		if (breakPoint != 'xx' && breakPoint != 'xs'){
			$menu.css({
				'margin-top': - $body[0].getBoundingClientRect().top,
				'max-height': window.innerHeight
			});
		} else {
			reset_menu_position();
		};
	};

	function hide_menu(e){
		$('.c-menu-item, .c-menu-group-item').removeClass('active');
		hideBlock($menu_trig, $menu);
		hideBlock($days_trig, $days);
		$menu.animate({ scrollTop: 0 }, $transition_duration);
	};

	function update_days_state_initial(){
		if (breakPoint == 'lg' || breakPoint == 'xl') {
			$days.css({
				position: 'relative',
				left: 0
			});
		} else {
			$days.css({
				position: 'absolute',
				left: '100%'
			});
		};
	};

	function update_days_state(e){
		if ($days.hasClass('minimized')) {
			$days_not_first_child.add($days_first_child).css({
				'margin-left': - $days_not_first_child.eq(0).outerWidth()
			});
		} else if ($days.hasClass('middle-minimized')) {
			$days_first_child.css({
				'margin-left': 0
			});
			$days_not_first_child.css({
				'margin-left': - $days_not_first_child.eq(0).outerWidth()
			});
		} else {
			$days_not_first_child.add($days_first_child).css({
				'margin-left': 0
			});
		};
		if (e) {
			if (e.type == 'showBlock') {
				$menu.removeClass('days-is-middle-active').addClass('days-is-active');
			} else if (e.type == 'middleBlock') {
				$menu.removeClass('days-is-active').addClass('days-is-middle-active');
			} else {
				$menu.removeClass('days-is-active days-is-middle-active');
			};
		};
		if (!days_reset_flag) {
			days_reset_flag = true;
			$days.addClass('is-initialised');
			$days_first_child.css({
				'margin-left': - $days_first_child.eq(0).outerWidth()
			})
			setTimeout(update_days_state_initial, $transition_duration);
		} else {
			update_days_state_initial();
		};
	};

	function update_days_height_on_safari(){
		if ($html.hasClass('safari') && $html.hasClass('mac')){
			$days_rows.css({
				'-webkit-flex-basis':'',
				'flex-basis':'',
				'height':'',
				'max-height':'',
				'min-height':''
			})
			$days_rows.each(function(){
				var th = $(this),
					height = '';
				if (!$menu_list.children().eq(th.index()).hasClass('c-menu-item')) {
					height = $group_items.eq(th.index() - $days_rows.length + $group_items.length - 1).outerHeight();
				} else {
					height = $menu_list.children().eq(th.index()).outerHeight();
				};
				th.css({
					'-webkit-flex-basis': height,
					'flex-basis': height,
					'height': height,
					'max-height':height,
					'min-height':height
				});
			});
		};
	};

	function update_all(){
		update_menu_position();
		update_drop_position();
		update_days_state();
		update_days_height_on_safari();
	};

	$body
		.on('resize_xx_once resize_xs_once resize_sm_once resize_md_once resize_lg_once', hide_menu)
		.on('click', '.c-menu-item-drop-item', hide_menu)
		.on('click touchend', function(e){
			if ($(e.target).closest('.c-menu-item, .c-menu-group-item').length === 0) {
				$('.c-menu-item, .c-menu-group-item').removeClass('active');
			};
			if ($(e.target).closest('.c-menu, .l-menu-side-trig').length === 0) {
				if (breakPoint == 'xx' || breakPoint == 'xs') {
					hide_menu();
				};
			};
		})
		.on('click', '.c-menu-item-inner', function(e){
			var th = $(this),
				parent_item = th.closest('.c-menu-item, .c-menu-group-item');
			if ($html.hasClass('is-touch-device') && th.siblings('.c-menu-item-drop').length) {
				if (parent_item.hasClass('active')) {
					parent_item.removeClass('active');
					hideBlock($menu_trig, $menu);
				} else {
					$('.c-menu-item, .c-menu-group-item').removeClass('active');
					parent_item.addClass('active');
					hideBlock($days_trig, $days);
					e.preventDefault();
				};
			} else {
				if (breakPoint == 'xx' || breakPoint == 'xs') {
					hide_menu();
				};
			};
		});
	$menu
		.on('showBlock', function(e){
			if ($(e.target).hasClass('l-menu-side')) {
				block_open_process = true;
				clearTimeout(block_open_timeout);
				block_open_timeout = setTimeout(function(){
					block_open_process = false;
				}, $transition_duration);
				if (breakPoint == 'xx' || breakPoint == 'xs') {
					disable_scroll();
				};
			};
		})
		.on('hideBlock', function(e){
			if(!block_open_process && $(e.target).hasClass('l-menu-side')) {
				block_open_process = false;
				enable_scroll();
			};
		});
	$days.on('showBlock hideBlock middleBlock', update_days_state);
	$('.l-menu-side').on('scroll', update_drop_position);
	$(window).on('scroll load resize', update_all);

	update_all();
};