function loadPanel( videoUrl ){
	console.log(videoUrl);
	// chrome.windows.create({ url: 'http://www.youtube.com/watch?v='+videoUrl+'&strip=true', type: 'panel'});
	chrome.windows.create({ 
		url: 'http://www.youtube.com/watch?v='+videoUrl+'&strip=true', 
		height: 230, 
		width: 330,
		type: "panel"
	});
}	
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        loadPanel(request.url);
    }
);
