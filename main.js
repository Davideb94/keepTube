function loadPanel(){
	chrome.windows.create({ url: 'https://mobile.twitter.com/', type: 'panel' });
}	
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "loadPanel") loadPanel();
    }
);
