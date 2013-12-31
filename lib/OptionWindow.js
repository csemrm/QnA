//create a window
var self = Ti.UI.createWindow({
	backgroundColor : '#000000',
	navBarHidden : true,
	fullscreen : true,
	//windowSoftInputMode : Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE
});

//Listen to the 'close' event, and fire a new event 'app_close'
self.addEventListener('close', function() {
	Ti.App.fireEvent('app_close');
}); 