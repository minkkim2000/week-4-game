$(document).ready(function(){

//get that random target number
	var targetNumber = Math.floor(Math.random() * (120-19) + 19);
		$("#target-number").html(targetNumber);


//other variables to show
	var wins = 0;
		$("#win-count").html(wins);
	
	var losses = 0;
		$("#loss-count").html(losses);
	
	var totalScore = 0;
		$("#player-score-count").html(totalScore);

//assign random numbers to each gemgem
	var gem1 = Math.floor(Math.random() * (12 - 1) + 1);
	var gem2 = Math.floor(Math.random() * (12 - 1) + 1);
	var gem3 = Math.floor(Math.random() * (12 - 1) + 1);
	var gem4 = Math.floor(Math.random() * (12 - 1) + 1);


//click the gems for total score up up up
	$("#gem1").on("click", function(){
		totalScore = totalScore + gem1;
		$("#player-score-count").html(totalScore);
		if (totalScore >= targetNumber) {
			winOrLose();
		};
	});

	$("#gem2").on("click", function(){
		totalScore = totalScore + gem2;
		$("#player-score-count").html(totalScore);
		if (totalScore >= targetNumber) {
			winOrLose();
		};
	});

	$("#gem3").on("click", function(){
		totalScore = totalScore + gem3;
		$("#player-score-count").html(totalScore);
		if (totalScore >= targetNumber) {
			winOrLose();
		};
	});

	$("#gem4").on("click", function(){
		totalScore = totalScore + gem4;
		$("#player-score-count").html(totalScore);
		if (totalScore >= targetNumber) {
			winOrLose();
		};
	});


//determine if total score is greater than or equal to target number and display win/loss accordingly

	function winOrLose() {
		if (totalScore == targetNumber){
			$("#win-or-lose").html("You Win :) " + "<h3>" + "click to go again!" + "</h3>");
			wins ++;
			$("#win-count").html(wins);
			
		}
		else {
			$("#win-or-lose").html("You Lose :(" + "<h3>" + "click to go again!" + "</h3>");
			losses ++;
			$("#loss-count").html(losses);
			
		};
	};


//once the win/lose status shows up, click to reset the game
	$("#win-or-lose").on("click", function(){
			targetNumber = Math.floor(Math.random() * (120-19) + 19);
			$("#target-number").html(targetNumber);
			totalScore = 0;
			$("#player-score-count").html(totalScore);
			var gem1 = Math.floor(Math.random() * (12 - 1) + 1);
			var gem2 = Math.floor(Math.random() * (12 - 1) + 1);
			var gem3 = Math.floor(Math.random() * (12 - 1) + 1);
			var gem4 = Math.floor(Math.random() * (12 - 1) + 1);
		});


});

