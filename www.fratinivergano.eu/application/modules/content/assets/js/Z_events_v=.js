(function($){
	var calendarconfig = [];

	function init_calendar() {

	    calendar = $('#events-calendar');

	    if (!calendar.length) { return };

	    if (calendar.attr('data-type')) {
	       type = calendar.attr('data-type');
	    } else {
	       type = 0;
	    }

	    if (calendar.attr('data-category')) {
            category = calendar.attr('data-category')
        } else {
            category = 0;
        }

	    url = '/api/run/content/get_json_events/' + type + '/' + category;

		$.getJSON( "/api/run/content/get_json_event_config", function( data ) {

		    calendarconfig = data;

		    $('#events-calendar').fullCalendar({
		        header: {
		            left:   'prev',
		            center: 'title',
		            right:  'next'
		        },
		        dayNamesShort: ['DI', 'LU', 'MA', 'ME', 'JE', 'VE', 'SA'],
		        googleCalendarApiKey: calendarconfig['google_api_id'],
		        eventSources: [url, calendarconfig['google_calendar_url']],
		    });

		});

	}

	init_calendar();

	$('.location-changer').change(function() {
      // set the window's location property to the value of the option the user has selected
      window.location = $(this).val();
    });

})(jQuery);