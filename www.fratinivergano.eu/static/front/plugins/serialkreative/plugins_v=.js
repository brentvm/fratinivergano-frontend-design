$(document).ready(function() {
	
	// fancybox
	$(".fancybox").fancybox({
		padding : 0,
		scrollingOutside : false,
		locked : false,
		openEffect : 'fade',
		closeEffect : 'fade'
    });
   
    // boostrap tooltip
    $('*[data-toggle]').tooltip();
	
	// boostrap select
	$('.selectpicker').selectpicker();
	
});