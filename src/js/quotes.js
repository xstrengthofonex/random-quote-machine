var currentQuote = null;

$(document).ready(function(){
	getQuote();
	$("#refresh").click(function(){
		$("#refresh").fadeOut();
		$(".card").fadeOut("slow", function(){
			$(".loader").show();
			getQuote();	
		});	
	});
	$("#twitter-icon").click(function(){
		// TODO - check the length of the quote and truncate if too long
		var quoteLength = currentQuote.quote.length;
		var message = encodeURI('"' + currentQuote.quote + '" - ' + currentQuote.author);
		window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + message);
	})
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
			$("#refresh").fadeIn();
			$("#quote").text(data.quote);
			$("#author").text(data.author);
		}
	);
}
