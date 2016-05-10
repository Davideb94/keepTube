function loadPanel( videoUrl ){
	console.log('https://www.youtube.com/tv/watch?v='+videoUrl);
	console.dir(screen);
	chrome.windows.create({ 
		url: 'https://www.youtube.com/tv#/watch?v='+videoUrl, 
		height: 330, 
		width: 430,
		// left: screen.width-430,
		// top: screen.height-330,
		type: "panel"
	});
}	
// chrome.extension.onRequest.addListener(
//     function(request, sender, sendResponse){
//         loadPanel(request.url);
//     }
// );

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
        loadPanel(request.url);
    }
);
