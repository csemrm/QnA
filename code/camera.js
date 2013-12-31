var win1 = Titanium.UI.createWindow({

	title : 'Red Window'
});

var contenner = Ti.UI.createView({
	width : '80%',
	height : Ti.UI.SIZE,
	top : 0,
	backgroundColor : '#eee',
	borderColor : '#eee',
	layout : 'vertical',
});
win1.add(contenner);

var anImageView = Ti.UI.createImageView({

});
contenner.add(anImageView);

var controlview = Ti.UI.createView({
	width : Ti.UI.FILL,
	height : Ti.UI.SIZE,
	top : 20,
});

contenner.add(controlview);

var frmcamera = Ti.UI.createButton({
	backgroundImage : 'none',
	backgroundColor : '#ff0000',
	title : L('take pic'),
	color : '#fff',
	width : 80,
	height : 50,
	left : 10,
});

frmcamera.addEventListener('click', function() {
	fireUpTheCamera();
});

controlview.add(frmcamera);

var frmgalary = Ti.UI.createButton({
	backgroundImage : 'none',
	backgroundColor : '#ff0000',
	title : L('go_to_gallery'),
	color : '#fff',
	width : 80,
	height : 50,
	right : 10,
});

function fireUpTheCamera() {
	Titanium.Media.showCamera({

		success : function(event) {
			var cropRect = event.cropRect;
			var image = event.media;

			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				anImageView.image = image;
				//new_upload_profile_picture_update(anImageView.image);
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
		},
		error : function(error) {
			// create alert
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});

			// set message
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}

			// show alert
			a.show();
		},
		saveToPhotoGallery : true,
		allowEditing : false,
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

win1.open();

