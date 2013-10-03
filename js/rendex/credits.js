$(function () {	
	
	/*--------------------------------------------------
	Plugin: Slider
	--------------------------------------------------*/
		
	/* Increment Slider */
	$( "#incrementSlider1" ).slider({
		range: "min",
		value:1,
		min: 0,
		max: 30,
		step: 1,
		slide: function( event, ui ) {
			$( "#days-value" ).val ( ui.value );
		}
	});
		
	$( "#days-value" ).val ( $( "#incrementSlider1" ).slider( "value" ) );
	
		$('#enable-fallover').click (function ()	{
		if ($(this).prop('checked'))
		{
			$('#on-demand').prop('disabled', false);
			$('#economy').prop('disabled', false);
		}
		else {
			$('#on-demand').prop('disabled', true);
			$('#economy').prop('disabled', true);
		}
	});
	
});