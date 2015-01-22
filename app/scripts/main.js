/* jshint devel:true */
'use strict';
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
// xhr.done(function(data) {
// 	console.log("success got data", data);
// });

$('#bigtext').fitText(0.25);

var interval;
var gifUrl;

function slideshow() {
	$.support.cors = true;
	$.getJSON("http://api.giphy.com/v1/gifs/tv?api_key=dc6zaTOxFJmzC&tag=yes", null, function(response) {
		var id = response.data.id;
		var image = response.data.image_original_url;

		$('#gif').css('background-image', 'url(' + image + ')');

		gifUrl = 'http://giphy.com/gifs/' + id;

	}).error(function(jqXHR, textStatus, e) {
		console.log(e);
		next();
	});
};

function next() {
	clearInterval(interval);
	slideshow();
	interval = setInterval(slideshow, 5000);
}
interval = setInterval(slideshow, 5000);

slideshow();

