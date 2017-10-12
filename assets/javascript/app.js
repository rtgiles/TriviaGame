$(document).ready(function() {

	//Creates start button on start-up screen
	function initScr() {
		strtUpScr = '<button type="button" class="btn btn-info btn-lg btn-block start-up">Start The Trivia Challenge</button>';
		$("#mainBlock").html(strtUpScr);
	}

	initScr();

	var triviaQuestions = [{
				question: "The movie \"The Last King of Scotland\" was about which ruler?",
				correctOption: 1, 
				triviaOptions: [
					 "William of Orange",
					 "Idi Amin Dada",
					 "King Henry IV",
					 "King Richard the Lionheart",
				]},
				{
				question: "Which movie did Sydnie Poiter win an Academy Award for?",
				correctOption: 2,
				triviaOptions: [
					 "To Sir with Love",
					 "In the Heat of the Night",
					 "Lilies of the Field",
					 "The Defiant Ones",
				]},
				{
				question: "Which movie won the Academy Award for best picture?",
				correctOption: 3, 
				triviaOptions: [
					"The Color Purple",
					"Cotton Comes to Harlem",
					"Guess Who's Coming To Dinner",
					"12 Years A Slave",
				]},
				{
				question: "The movie \"The Great White Hope\" was based on the life of which professional boxer?",
				correctOption: 0,
				triviaOptions: [
					"Jake Johnson",
					"Max Snell",
					"James Jeffries",
					"Max Schmeling",
				]},
	];
	var timer = 30;
	var questCntr = 0;
	var theTimer;
	var gameTimer;
	var correct = 0;
	var wrong = 0;
	var unanswered = 0;
	var pickedAnswr;

	//Timer function
	function timerShell(){
		theTimer = setInterval(thirtySec, 1000);
		var gameTimer;
		function thirtySec() {
			if (timer === 0) {
				clearInterval(theTimer);
				//Generate loss do to timeRundown
				unanswered++;
				alert("THINK FASTER!!!");
				nextQuestion();
			}
			if (timer > 0) {
				timer--;
				//gameTimer = $("#gameClock").append('<h2>'"Time Remaining: "'<span id="clock">' + timer + '</span>''</h2>');
				$("#gameClock").html(timer);
			}
		}
	}
	//Function to display next set of questions or end game
	function nextQuestion() {
		if (questCntr < 4){
			questCntr++;
			timer = 30;
			timerShell();
			triviaInsert();
		}
		else{
			endGame();
		}
	}

	function endGame() {
		timer = 30;
		questCntr = 0;
		theTimer;
		gameTimer;
		correct = 0;
		wrong = 0;
		unanswered = 0;
		pickedAnswr;
	}

	// Timer run out function
	function timeRunDown() {
		unanswered++;
	}

	// Button Generator
	function triviaInsert()	{
		$("#mainBlock").html("");
		$("#mainBlock").append();
		for (var key in triviaQuestions[questCntr])	{
			//console.log(triviaQuestions[0])
			//var triviaBtn = '<button type="button" class="btn btn-info btn-lg btn-block">' + triviaQuestions[0][key] +'</button>';
			var triviaBtn;
			if (Array.isArray(triviaQuestions[questCntr][key])) {
				for(var i = 0; i < triviaQuestions[questCntr][key].length; i++){
					triviaBtn = $("#mainBlock").append('<button type="button" class="btn btn-info btn-md btn-block answer">' + triviaQuestions[questCntr][key][i] +'</button>')
					triviaBtn.attr("data-answer-index","i");
					$("#mainBlock").append(triviaBtn);
				}
			}
			else {
				triviaBtn = '<button type="button" class="btn btn-info btn-lg btn-block">' + triviaQuestions[questCntr][key] +'</button>'
				$("#mainBlock").append(triviaBtn);
			}
		}	
	}
	$("body").on("click", ".start-up", function(event){	
		event.preventDefault();
		triviaInsert();
		timerShell();
	});

	//answer function
	$("body").on("click", ".answer", function(event){
		pickedAnswr = $(this).text();
		pickedAnswrIndex = $(this).attr("data-answer-index");
		console.log("pickedAnswr " + pickedAnswr);
		console.log("pickedAnswrIndex " + pickedAnswrIndex);
		console.log("triviaOptions " +triviaQuestions[questCntr].triviaOptions );
		console.log("correctOption "+triviaQuestions[questCntr].correctOption);
		
		if (pickedAnswr == triviaQuestions[questCntr].correctOption){
			alert("Way To Go Braniac");
			nextQuestion();
			}
			// Reset Timer
			// Increment Win Counter
			else {
				alert("Back to the movies for You");
				nextQuestion();
			//Reset Timer
			//Increment Win Counter
			}
		})
	});//end answer function		
	



	



