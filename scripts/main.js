"use strict";function slideshow(){$.support.cors=!0,$.getJSON("http://api.giphy.com/v1/gifs/tv?api_key=dc6zaTOxFJmzC&tag=yes",null,function(t){var i=t.data.id,e=t.data.image_original_url;$("#gif").css("background-image","url("+e+")"),gifUrl="http://giphy.com/gifs/"+i}).error(function(t,i,e){console.log(e),next()})}function next(){clearInterval(interval),slideshow(),interval=setInterval(slideshow,1e4)}$("#bigtext").fitText(.25);var interval,gifUrl;interval=setInterval(slideshow,1e4),slideshow();