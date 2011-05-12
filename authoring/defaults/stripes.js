(function( $ ){
	$.fn.stripes = function( options ) {
		
		// defaults
		var settings = {
			odd: 'odd'	
		};
		
		// if a map was passed merge the 2
		if( options ) {
			$.extend(settings,options);
		}
			
		this.find("tbody tr:odd").addClass(settings.odd);
		
		return this;			
	};
})( jQuery )