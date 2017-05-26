
	$(document).ready(function() {

		function startGame() {
			var counter = 0;
			$(".data-crystalvalue").empty();
			var crystalValue = 0;
};

	
	var counter = 0;
	var wins = 0;
	var losses = 0;

	var blueCrystal = Math.floor((Math.random() * 12) + 1);
	var greenCrystal = Math.floor((Math.random() * 12) + 1);
	var redCrystal = Math.floor((Math.random() * 12) + 1);
	var yellowCrystal = Math.floor((Math.random() * 12) + 1);

	var targetNumber = Math.floor((Math.random() * 120) + 20);


	$(".blue").attr("data-crystalvalue", blueCrystal);
	$(".green").attr("data-crystalvalue", greenCrystal);
	$(".red").attr("data-crystalvalue", redCrystal);
	$(".yellow").attr("data-crystalvalue", yellowCrystal);

    $("#target").append(targetNumber);


     $(".button").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#current-total").html("Current Total: " + counter);

 	if (counter === targetNumber) {
 		alert("You Win!");
 		wins++;
      $("#wins").html("Wins: " + wins);
      startGame();
    }

    else if (counter >= targetNumber) {
    	alert("You Lose!");
    	losses++;
       $("#losses").html("Losses: " + losses);
       startGame();
    }

    

     });

});
