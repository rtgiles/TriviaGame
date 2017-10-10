$(document).ready(function() {

//Creates start button on start-up screen
	function initScr() {
		strtUpScr = '<button type="button" class="btn btn-info btn-lg btn-block">Start The Trivia Challenge</button>';
		$("#mainBlock").html(strtUpScr);
	}

	initScr();



var triviaQuestions = {
	Q1: {
		a0: "The movie \"The Last King of Scotland\" was about which ruler?",
		a1: "",
		a2: "",
		a3: "",
		a4: "",
	},
	Q2: {
		a0: "Which movie did Sydnie Poiter win an Academy Award for?",
		a1: "",
		a2: "",
		a3: "",
		a4: "",
	},
	Q3: {
		a0: "Which movie won the Academy Award for best picture?",
		a1: "",
		a2: "",
		a3: "",
		a4: "",
	},
	Q4: {
		a0: "The movie \"The Great White Hope\" was based on the life of which professional boxer?",
		a1: "",
		a2: "",
		a3: "",
		a4: "",
	},
};
var timer = 30;
var questCntr = 0;
var Clock;
var correct = 0;
var wrong = 0;
var unanswered = 0;

/*function triviaInsert() {
	var triviaBlock = {
		<ol>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		<ol>*/
//or

function triviaInsert()	{
	var triviaQues = '<button type="button" class="btn btn-info btn-lg btn-block"> console.log(triviaQuestions[0].a0) </button>';
	var triviaAns1 = '<button type="button" class="btn btn-info btn-md btn-block"> .triviaQuestions[0].a1 </button>';
	var triviaAns2 = '<button type="button" class="btn btn-info btn-md btn-block"> .triviaQuestions[0].a2 </button>';
	var triviaAns3 = '<button type="button" class="btn btn-info btn-md btn-block"> .triviaQuestions[0].a2 </button>';
	var triviaAns4 = '<button type="button" class="btn btn-info btn-md btn-block"> .triviaQuestions[0].a2 </button>';
	$("#mainBlock").html(triviaQues + triviaAns1 + triviaAns2 + triviaAns3 + triviaAns4);	
}

$("body").on('click', function(){	
triviaInsert();
})
		
	

})