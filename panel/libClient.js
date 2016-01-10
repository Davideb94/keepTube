var main = document.getElementById("main");
var videoSource = document.URL.split("=")[1];
main.innerHTML= '<iframe src="http://www.youtube.com/watch?v=' + videoSource + '"></iframe>'//"<iframe id='ytplayer' type='text/html' width='640' height='390' src='http://www.youtube.com/embed/"+ videoSource +"?autoplay=1' frameborder='0'/>";
