$(".ytp-right-controls").append("<button class='ytp-keep-button ytp-button'>p&lrtri;</button>");
$(".ytp-keep-button").on('click', function(){
	console.log( document.URL.split("&")[0] );
	if($("#movie_player").hasClass("playing-mode")){
		$(".ytp-play-button").click();
	}
	chrome.extension.sendRequest({ msg: document.URL.split("&")[0].split("?")[1].split("=")[1] });
});