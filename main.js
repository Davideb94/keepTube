console.log("Yahoooooooga");
function loadPanel( videoUrl ){
	console.dir(videoUrl);
	chrome.windows.create({ url: 'panel/player.html?url='+videoUrl, type: 'panel' });
	//chrome.windows.create({ url: 'player.html?url='+videoUrl});
}	
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        loadPanel(request.msg);
    }
);
