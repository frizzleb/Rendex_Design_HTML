$(function () {	
	
	/*--------------------------------------------------
	Plugin: Slider
	--------------------------------------------------*/
		
	/* Increment Slider */
	$( "#incrementSlider1" ).slider({
		range: "min",
		value:20,
		min: 0,
		max: 500,
		step: 10,
		slide: function( event, ui ) {
			$( "#credits-value" ).val ( ui.value );
		}
	});
		
	$( "#credits-value" ).val ( $( "#incrementSlider1" ).slider( "value" ) );
	
});