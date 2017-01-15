$(document).ready(function(){
	getQuote();
	$("#refresh").click(function(){
		$("#refresh").fadeOut();
		$(".card").fadeOut("slow", function(){
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
	$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data){
		$(".card").addClass(randomColorClass());
		$(".card").fadeIn();
		$("#refresh").fadeIn();
		$("#quote").text(data.quote);
		$("#author").text(data.author);
	});
}

