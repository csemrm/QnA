var win = Ti.UI.createWindow({
	backgroundColor : '#fff',
});

var nav = Ti.UI.iPhone.createNavigationGroup({
	window : win
});

var master = Ti.UI.createWindow({
	backgroundColor : '#fff',
});

var masterView = Ti.UI.iPhone.createNavigationGroup({
	window : master
});

var splitwin = Ti.UI.iPad.createSplitWindow({
	detailView : nav,
	masterView : masterView
});

var videoPlayer = Titanium.Media.createVideoPlayer({
	backgroundColor : 'blue',
	mediaControlStyle : Titanium.Media.VIDEO_CONTROL_EMBEDDED,
	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
	fullscreen : false,
	autoplay : false
});

videoPlayer.url = 'etc/movie.mp4';
win.add(videoPlayer);

splitwin.addEventListener('visible', function(e) {
	if (e.view == 'detail') {
		e.button.title = "Master";
		win.leftNavButton = e.button;
	} else if (e.view == 'master') {
		win.leftNavButton = null;
	}
	alert('event fired');
});

splitwin.open();
