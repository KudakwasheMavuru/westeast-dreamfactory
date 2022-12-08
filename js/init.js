//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 dec 2022 17:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	