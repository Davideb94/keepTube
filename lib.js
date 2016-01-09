console.log("Uoyyyyyga");

$(".ytp-right-controls").append("<button class='ytp-keep-button ytp-button'>p&lrtri;</button>");
$(".ytp-keep-button").on('click', function(){
	chrome.extension.sendRequest({ msg: "loadPanel" });
});