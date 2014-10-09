(function($){
	$.fn.megamenu = function(options){
		var opts =$.extend({}, $.fn.megamenu.default, options);
		this.addClass('megamenu-wrapper');

		var $menu = this;
		var menu_offset = $menu.offset();
		$menu.find("> li").each(function(index) {
		
			var $this = $(this);
			var $div = $this.find('> div');

			// console.log(menu_offset.left);
			// コンテンツのスタイルを指定
			$div.css({
				'width': $menu.css('width'),
				'left' : menu_offset.left,
				'top' : menu_offset.top + $menu.height(),
				'background' : opts.background,
				'borderRadius' : opts.border_radius,
				'marginTop' : opts.margin,

			});

 			// △の位置調整
			var left = $this.offset().left - menu_offset.left + ($this.width() / 1.89) - opts.speech_balloon;
			if(typeof opts.speech_balloon === 'number' && opts.speech_balloon > 0) {
				var $speech_balloon = $('<span>').css({
					'left': left,
					'width': '0px',
					'height': '0px',
					'position': 'absolute',
					'border': opts.speech_balloon.toString() + 'px solid transparent',
					'border-bottom-color': opts.background,
					'bottom': '100%',
					'zIndex': 999
				});

				$div.append($speech_balloon);
			}
		});(this);console.log(menu_offset.left);
		return 
	}

	$.fn.megamenu.default = {
		'border_radius': 0,
		'background': '#eee',
		'margin': 0,
		'speech_balloon': 7,
	};
})(jQuery);