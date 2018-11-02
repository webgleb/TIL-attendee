var $body = $('body');
function updateBlockPrevState(button, block, newState) {
	var prevState;
	if (block.hasClass('minimized')) {
		prevState = 'minimized';
	} else if (block.hasClass('middle-minimized')) {
		prevState = 'middle-minimized';
	} else {
		prevState = 'shown';
	};
	if (newState) {
		if (newState != prevState) {
			block.attr('data-prev-state', prevState);
			button.attr('data-prev-state', prevState);
		};
	};
	return prevState;
};
function showBlock(button, block) {
	updateBlockPrevState(button, block, 'shown');
	block.removeClass('minimized middle-minimized');
	if(button) {
		button.addClass('active').removeClass('middle-active');
	};
	block.trigger('showBlock');
};
function hideBlock(button, block) {
	updateBlockPrevState(button, block, 'minimized');
	block.addClass('minimized').removeClass('middle-minimized');
	if(button) {
		button.removeClass('active middle-active');
	};
	block.trigger('hideBlock');
};
function middleBlock(button, block) {
	updateBlockPrevState(button, block, 'middle-minimized');
	block.addClass('middle-minimized').removeClass('minimized');
	if(button) {
		button.addClass('middle-active').removeClass('active');
	};
	block.trigger('middleBlock');
};
function toggleBlock(button, block) {
	if (block.hasClass('minimized')) {
		showBlock(button, block);
	} else if (block.hasClass('middle-minimized')) {
		hideBlock(button, block);
	} else {
		hideBlock(button, block);
	};
};
function tripleToggleBlock(button, block) {
	if (block.hasClass('minimized')) {
		middleBlock(button, block);
	} else if (block.hasClass('middle-minimized')) {
		showBlock(button, block);
	} else {
		hideBlock(button, block);
	};
};
function tripleToggleBlockInverse(button, block) {
	if (block.hasClass('minimized')) {
		showBlock(button, block);
	} else if (block.hasClass('middle-minimized')) {
		hideBlock(button, block);
	} else {
		middleBlock(button, block);
	};
};
function tripleToggleBlockEqual(button, block) {
	var currentState = updateBlockPrevState(button, block);
	if (currentState == 'minimized' || currentState == 'shown') {
		middleBlock(button, block);
	} else if (currentState == 'middle-minimized' && block.attr('data-prev-state') == 'minimized') {
		showBlock(button, block);
	} else {
		hideBlock(button, block);
	};
};

// show/hide/toggle blocks
$body
	.on('click', '.button-toggle', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		toggleBlock(button, block);
		e.preventDefault();
	})
	.on('click', '.button-triple-toggle', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		tripleToggleBlock(button, block);
		e.preventDefault();
	})
	.on('click', '.button-triple-toggle-inverse', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		tripleToggleBlockInverse(button, block);
		e.preventDefault();
	})
	.on('click', '.button-triple-toggle-equal', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		tripleToggleBlockEqual(button, block);
		e.preventDefault();
	})
	.on('click', '.button-middle', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		middleBlock(button, block);
		e.preventDefault();
	})
	.on('click', '.button-show', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		showBlock(button, block);
		e.preventDefault();
	})
	.on('click', '.button-hide', function(e) {
		var button = $(this),
			block = $(button.attr('data-target-block'));

		hideBlock(button, block);
		e.preventDefault();
	});