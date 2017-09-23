	var wins = 0;
	var losses = 0;
	var counter = 0;

	var crystals = {
			blue: 0,
			red: 0,
			yellow: 0,
		 	green: 0
		};

	for (var prop in crystals) {
		var randomvalue = Math.floor((Math.random() * 12) + 1);
		crystals[prop] = randomvalue;
		$("." + prop).attr("data-crystalvalue", randomvalue);
	}

	var targetNumber = Math.floor((Math.random() * 120) + 20);

   	$("#target").html("Target Number: " + targetNumber);

function reset() {
			counter = 0;

			var crystals = {
				blue: 0,
				red: 0,
				yellow: 0,
			 	green: 0
			};

			for (var prop in crystals) {
				var randomvalue = Math.floor((Math.random() * 12) + 1);
				crystals[prop] = randomvalue;
				$("." + prop).attr("data-crystalvalue", randomvalue);
			}

			targetNumber = Math.floor((Math.random() * 120) + 20);

		  $("#target").html("Target Number: " + targetNumber);

			$("#current-total").html("Current Total: " + counter);
   };


  $(".button").on("click", function() {

		    var crystalValue = ($(this).attr("data-crystalvalue"));
		    crystalValue = parseInt(crystalValue);
		    // Every click, from every crystal adds to the global counter.
		    counter += crystalValue;
		    $("#current-total").html("Current Total: " + counter);

			 	if (counter === targetNumber) {
			 		alert("You Win!");
			 		wins++;
			      $("#wins").html("Wins: " + wins);
			      reset();
			    }
		    else if (counter > targetNumber) {
		    	alert("You Lose!");
		    	losses++;
		       $("#losses").html("Losses: " + losses);
		       reset();
		    }
  });
