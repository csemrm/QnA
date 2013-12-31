var win = Titanium.UI.createWindow({
	top : 0,
	left : 0,

	backgroundColor : '#fff',
});

// Create a Label.
var aLabel = Ti.UI.createLabel({
	text : 'aLabel',
	color : '#000',
	font : {
		fontSize : 17
	},
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : 12,
	left : 12,
	textAlign : 'center'
});

var tempImageView = Titanium.UI.createImageView({
	image : 'images/camera.png',
});
win.add(tempImageView);
// Add to the parent view.
win.add(aLabel);

aLabel.addEventListener('click', function() {

	Titanium.Media.openPhotoGallery({

		success : function(event) {

			if (event.mediaType === Ti.Media.MEDIA_TYPE_PHOTO) {
				// the image
				var image = event.media;
				tempImageView.image = image;
				var image2 = tempImageView.toImage();
				var f = Ti.Filesystem.getFile('images/camera.png');
				var blob = f.read();
				var dataToSend = {
					media : image2,
					title : 'asd',

				};

				var xhr = Titanium.Network.createHTTPClient();

				
				xhr.onload = function() {
					alert(this.responseText);
				};
				Ti.API.info('tempImageView' + JSON.stringify(dataToSend));
				xhr.open("POST", "http://www.appc.mrtechnologybd.com/upload.php");
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=utf-8');
				 
				xhr.enableKeepAlive = false;
				xhr.send(dataToSend);

			}
		},
		cancel : function() {

			alert("Cancel Library ");
		},
		error : function(error) {

			alert("Error Massage " + error);
		},
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
		allowImageEditing : true,

	});
});

win.open();

