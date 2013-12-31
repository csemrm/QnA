container = {};
container.win = Titanium.UI.createWindow();

container.button = Titanium.UI.createButton({
	color : '#fff',
	backgroundImage : '/images/BUTT_grn_on.png',
	backgroundSelectedImage : '/images/BUTT_grn_off.png',
	backgroundDisabledImage : '/images/BUTT_gry_on.png',
	bottom : 10,
	width : 301,
	height : 57,
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Take Picture'
});

container.overlay = Titanium.UI.createView();
container.overlay.add(container.button);

container.button.addEventListener('click', function() {

	Ti.Media.takePicture();

});

container.switchCamera = Titanium.UI.createButton({
	color : '#fff',
	backgroundImage : '/images/BUTT_grn_on.png',
	backgroundSelectedImage : '/images/BUTT_grn_off.png',
	backgroundDisabledImage : '/images/BUTT_gry_on.png',
	top : 10,
	width : 301,
	height : 57,
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	title : 'switch Camera'
});
container.overlay.add(container.switchCamera);
container.switchCamera.addEventListener('click', function() {

	Ti.Media.switchCamera(Ti.Media.CAMERA_FRONT);

});

Titanium.Media.showCamera({

	success : function(event) {
		Ti.API.debug("picture was taken");

		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image : event.media,
			width : container.win.width,
			height : container.win.height
		});
		container.win.add(imageView);

		// programatically hide the camera
		//Ti.Media.hideCamera();
	},
	cancel : function() {
	},
	error : function(error) {
		var a = Titanium.UI.createAlertDialog({
			title : 'Camera'
		});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay : container.overlay,
	showControls : false, // don't show system controls
	mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
	autohide : false // tell the system not to auto-hide and we'll do it ourself
});
container.win.open();
