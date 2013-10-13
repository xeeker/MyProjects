  $(function() {
  
	var i = 0;
	var cont = 0;
	var barVals = 100;	
	var myScores=0;
	
	$('#sc').append(myScores);

	$('#health').progressbar({ 'value': barVals });
	$('#progressbar').progressbar({ 'value': i });
		
	$('#ft1').on('click', function() {
	
		progValue = $('#progressbar').progressbar('value');
		progValue += 1;
		$('#progressbar').progressbar({
       		'value': progValue
    	});
		
		LessVal =$('#health').progressbar('value');
		LessVal -= 1;
		$('#health').progressbar({
       		'value': LessVal
    	});
		
		lval =$('#pl').html();
		$('#pl').html("HEALTH: "+LessVal+"%");
		
		cont+=20;
		$('#sc').html('Score:' +cont);
		
		healValues = $('#health').progressbar('value');

		if(healValues < 1){
			timerZ();
		}
			
    });	
		 
	 function timerZ(){
	 $.fn.countdown = function (callback, duration, message) {
		// If no message is provided, we use an empty string
		message = message || "";
		// Get reference to container, and set initial content
		var container = $(this[0]).html(duration + message);
		// Get reference to the interval doing the countdown
		var countdown = setInterval(function () {
			// If seconds remain
			if (--duration) {
				// Update our container's message
				container.html(duration + message);
			// Otherwise
			} else {
				// Clear the countdown interval
				clearInterval(countdown);
				// And fire the callback passing our container as `this`
				callback.call(container);   
			}
		// Run interval every 1000ms (1 second)
		}, 1000);
    
	};
// Use p.countdown as container, pass redirect, duration, and optional message
	$(".countdown").countdown(redirect, 5, "s remaining");
}
// Function to be called after 50 seconds
function redirect () {
    this.html("");
    heals = $('#health').progressbar('value');
		heals += 1;
		$('#health').progressbar({
       		'value': heals
    	});
		
		lval =$('#health').progressbar('value');
		$('#pl').html("HEALTH: "+lval+"%");
}
});