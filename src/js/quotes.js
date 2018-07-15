var currentQuote = null;

$(document).ready(function(){
	getQuote();
	
	$("#new-quote").click(function(){
		$("#new-quote").fadeOut();
		$(".card").fadeOut("slow", function(){
			$(".loader").show();
			getQuote();	
		});	
	});
});

var colorClasses = [
	'turquois', 'peter-river', 'amethyst', 'pumpkin',
	'orange', 'pomergranate ', 'wet-asphalt', 'asbestos'
]

function randomColorClass(){
	var random = Math.floor(Math.random() * colorClasses.length);
	return colorClasses[random];
}

function getQuote(){
	$.getJSON("https://talaikis.com/api/quotes/random/",
		function(data){
			currentQuote = data;
			$(".loader").hide();
			$(".card").addClass(randomColorClass());
			$(".card").fadeIn();
			$("#new-quote").fadeIn();
			$("#text").text(data.quote);
			$("#author").text(data.author);
			let message = encodeURI('"' + data.quote + '" - ' + data.author);
			$("#tweet-quote").prop("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + message);
		}
	);
}
