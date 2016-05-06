function loadPanel( videoUrl ){
	console.log(videoUrl);
	chrome.windows.create({ 
		url: 'http://www.youtube.com/watch?v='+videoUrl+'&strip=true', 
		height: 230, 
		width: 330,
		left: 950,
		top:570,
		type:"panel"
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