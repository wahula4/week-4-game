	// initial values for wins, losses, and counter
	let wins = 0;
	let losses = 0;
	let counter = 0;

	// crystal values start at 0
	let crystals = {
		blue: 0,
		red: 0,
		yellow: 0,
		green: 0
	};

	// randomly generate a value between 19 and 120 for the target
	let targetNumber = Math.floor((Math.random() * 120) + 20);
	// dynamically add the target value to the DOM
	$("#target").html("Target Number: " + targetNumber);

	init = () => {
		// randomly generate a value between 1 and 12 for each crystal
		for (let prop in crystals) {
			let randomvalue = Math.floor((Math.random() * 12) + 1);
			crystals[prop] = randomvalue;
			$("." + prop).attr("data-crystalvalue", randomvalue);
		}
	}

	// reset the game
	reset = () => {
		counter = 0;

		let crystals = {
			blue: 0,
			red: 0,
			yellow: 0,
			green: 0
		};

		for (let prop in crystals) {
			// randomly generate a value between 1 and 12 for each crystal
			let randomvalue = Math.floor((Math.random() * 12) + 1);
			crystals[prop] = randomvalue;
			$("." + prop).attr("data-crystalvalue", randomvalue);
		}
		// randomly generate a value between 19 and 120 for the target
		targetNumber = Math.floor((Math.random() * 120) + 20);

		$("#target").html("Target Number: " + targetNumber);

		$("#current-total").html("Current Total: " + counter);
	};

	// on button click
	$(".button").click(function () {

		let crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		// Every click, from every crystal adds to the global counter.
		counter += crystalValue;
		// dynamically add the current value to the DOM
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