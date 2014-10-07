$(function() {
	// プラグインを使う人が指定する
	var $menu = $('#menu');
	var option = {};
	option.spike_width = 10;

	// プラグイン内
	var menu_offset = $menu.offset();

	$menu.find("> li").each(function() {
		var $this = $(this);
		var $div = $this.find('> div');

		// コンテンツのスタイルを指定
		$div.css({
			'width': $menu.css('width'),
			'left' : menu_offset.left,
			'top' : menu_offset.top + $menu.height()
		});
		// △の位置調整
		var left = $this.offset().left - menu_offset.left + ($this.width() / 2) - option.spike_width;
		var $speech_ballon = $('<span>').css({
			'left': left,
			'width': '5px',
			'height': '5px',
			'position': 'absolute',
				'border': '10px solid #f00',
			// 'border_bottom_color': '#f00',
			//'bottom': '100%',
			'zIndex': 999
		}).html('aaa');
		$div.append($speech_ballon);
	});
});