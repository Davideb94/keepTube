var url = document.URL;

var svgLogo = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 566.93 566.93" enable-background="new 0 0 566.93 566.93" xml:space="preserve"> <path fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" d="M291.613,287.587l78.314,81.865c2.518-2.6,4.923-5.309,7.208-8.119 l-75.239-78.651l75.219-78.63c-2.165-2.661-4.435-5.233-6.808-7.705l-78.693,82.262V158.495c-3.721-0.334-7.485-0.514-11.293-0.514 c-36.217,0-68.823,15.442-91.609,40.095l91.609,84.606l-91.632,84.628c22.787,24.667,55.403,40.12,91.632,40.12 c3.808,0,7.572-0.18,11.293-0.514V287.587z"/></svg>';
$(".ytp-right-controls").append("<button id='keep-button' class='ytp-keep-button ytp-button'>"+svgLogo+"</button>");
$(".ytp-keep-button").on('click', function(){
	console.log( document.URL.split("&")[0] );
	if($("#movie_player").hasClass("playing-mode")){
		$(".ytp-play-button").click();
	}
	chrome.extension.sendRequest({ msg: document.URL.split("&")[0].split("=")[1] });
});

if(url.indexOf('strip=true')!=-1){
	var body = document.getElementById("body");
	body.className += "keepTubeEmbedded";

	document.title = "keepTube - " + document.title;
}