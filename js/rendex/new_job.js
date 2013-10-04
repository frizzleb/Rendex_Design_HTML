$(function () {	
	
	$("#add-flag").click( function()
           {
			  current_flag = $("#flag-list").val();
              $('#render-flags').val($('#render-flags').val() + current_flag + '\n'); 
           }
        );
		
$("#3-2").click( function()
           {
              $('#width').val('1280'); 
			  $('#height').val('720'); 
           }
        );
		
$("#6-4").click( function()
           {
              $('#width').val('1920'); 
			  $('#height').val('1080'); 
           }
        );
		
$("#12-9").click( function()
           {
              $('#width').val('2048'); 
			  $('#height').val('1080'); 
           }
        );
		
$("#12-4").click( function()
           {
              $('#width').val('4096'); 
			  $('#height').val('2160'); 
           }
        );
	
$('input:radio[name="RenderType"]').change(function(){
    if($(this).val() == 'dedicated'){
       $('#farm-select').prop('disabled', false);
    }
	else	{
		$('#farm-select').prop('disabled', true);
	}
});

});