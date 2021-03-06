(function($) {


	$.fn.lava = function(options) {
	
		var that = this;
		
		var settings = {
		
			container: 'ul',
			cursor: '#lava-cursor',
			current: '.current',
			speed: 800
		
		
		};
		
		options = $.extend(settings, options);
		
		return that.each(function() {
		
			$(options.cursor).css('left', $(options.container).find(options.current).position().left).fadeIn(options.speed);
			
			$('li', $(options.container)).each(function() {
			
				var $li = $(this);
				
				$li.mouseover(function() {
				
					$(options.cursor).animate({
						left: $li.position().left
					}, options.speed);
				
				
				});
			
			
			});
		
		
		});
	
	
	};


})(jQuery);