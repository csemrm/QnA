var win = Ti.UI.createWindow({
	backgroundColor : '#ffffff'
});

var imageView = Ti.UI.createImageView({
	width : 200,
	height : 200,
	image : encodeURI("http://api.referron.com.s3.amazonaws.com/imageuploads/8d04106b-062a-4faa-a881-11df29848d15c:/dwasfiles/sites/referron-production-dashboard/virtualdirectory0/site/wwwroot/temp_upload/screen shot 2013-10-03 at 11.41.06 pm.png")
});
win.add(imageView);

win.open(); 