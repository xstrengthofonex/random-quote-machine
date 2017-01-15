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
	$.ajax({
		headers: {
			'X-Mashape-Key': 'JDiz2qDa3HmshwAtrLdMWP7teES6p17xFsojsnaC17Xq1yOjhG',
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'	
		},
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
		dataType: "json",
		success: function(data){
			$(".card").addClass(randomColorClass());
			$(".card").fadeIn();
			$("#refresh").fadeIn();
			$("#quote").text(data.quote);
			$("#author").text(data.author);
		}
	});
}

