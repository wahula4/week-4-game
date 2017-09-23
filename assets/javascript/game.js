	// initial values for wins, losses, and counter
	var wins = 0;
	var losses = 0;
	var counter = 0;

	// crystal values start at 0
	var crystals = {
			blue: 0,
			red: 0,
			yellow: 0,
		 	green: 0
		};
		// randomly generate a value between 1 and 12 for each crystal
	for (var prop in crystals) {
		var randomvalue = Math.floor((Math.random() * 12) + 1);
		crystals[prop] = randomvalue;
		$("." + prop).attr("data-crystalvalue", randomvalue);
	}
	// randomly generate a value between 19 and 120 for the target
	var targetNumber = Math.floor((Math.random() * 120) + 20);
		// dynamically add the target value to the DOM
   	$("#target").html("Target Number: " + targetNumber);

// reset the game
function reset() {
			counter = 0;

			var crystals = {
				blue: 0,
				red: 0,
				yellow: 0,
			 	green: 0
			};

			for (var prop in crystals) {
				// randomly generate a value between 1 and 12 for each crystal
				var randomvalue = Math.floor((Math.random() * 12) + 1);
				crystals[prop] = randomvalue;
				$("." + prop).attr("data-crystalvalue", randomvalue);
			}
			// randomly generate a value between 19 and 120 for the target
			targetNumber = Math.floor((Math.random() * 120) + 20);

		  $("#target").html("Target Number: " + targetNumber);

			$("#current-total").html("Current Total: " + counter);
   };

	 // on button click
  $(".button").on("click", function() {

		    var crystalValue = ($(this).attr("data-crystalvalue"));
		    crystalValue = parseInt(crystalValue);
		    // Every click, from every crystal adds to the global counter.
		    counter += crystalValue;
				// dynamically add teh current value to the DOM
		    $("#current-total").html("Current Total: " + counter);
				// if the user wins, alert the user, increase win total, and reset game
			 	if (counter === targetNumber) {
			 		alert("You Win!");
			 		wins++;
			      $("#wins").html("Wins: " + wins);
			      reset();
			    }
					// if the user loses, alert the user, increase loss total, and reset game
		    else if (counter > targetNumber) {
		    	alert("You Lose!");
		    	losses++;
		       $("#losses").html("Losses: " + losses);
		       reset();
		    }
  });
