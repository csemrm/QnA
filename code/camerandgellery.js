var win = Ti.UI.createWindow();

var contenner = Ti.UI.createView({
	width : Ti.UI.FILL,
	height : Ti.UI.SIZE,
	top : 0,
	backgroundColor : '#eee',
	borderColor : '#eee',
	layout : 'vertical',
});
win.add(contenner);

 var anImageView = Ti.UI.createImageView({ 
	width : 'auto',
	height : 'auto',
	top : 20,
});
contenner.add(anImageView);

 

var frmcamera = Ti.UI.createButton({
	backgroundImage : 'none',
	backgroundColor : '#ff0000',
	title : 'Open Camera',
	color : '#fff',
	width : Ti.UI.SIZE,
	height : 50,
	font : {
		fontSize : 14, 
	},
	left : 10,
});

frmcamera.addEventListener('click', function() {
	fireUpTheCamera();
});

contenner.add(frmcamera);

var frmgalary = Ti.UI.createButton({
	backgroundImage : 'none',
	backgroundColor : '#ff0000',
	title : 'Open Gallery',
	color : '#fff',
	width : Ti.UI.SIZE,
	height : 50,
	font : {
		fontSize : 14, 
	},
	right : 10,
});

frmgalary.addEventListener('click', function() {
	Ti.Media.openPhotoGallery({
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
		success : function(e) {
			anImageView.image = e.media;

		},
		cancel : function() {
		},
		error : function(err) {
		}
	});
});

contenner.add(frmgalary);

function fireUpTheCamera() {
	Titanium.Media.showCamera({

		success : function(event) {
			var cropRect = event.cropRect;
			var image = event.media;

			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				anImageView.image = image;

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
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

win.open();
