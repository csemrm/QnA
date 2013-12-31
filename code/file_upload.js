(function() {
	var form_url = 'http://localhost/fileupload/fileupload.php';
	var form_url = 'http://apps.priyo.com/jonopriyo/fileupload.php?method=new_upload_profile_picture';
	var win = Ti.UI.createWindow({
		layout : 'vertical',
		backgroundColor : '#fff'
	});
	
	var btnPhoto = Ti.UI.createButton({
		title : 'Select Photo'
	});
	btnPhoto.addEventListener('click', function(e) {
		// Open photo gallery for user to select photo
		Ti.Media.openPhotoGallery({
			mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
			success : function(e) {
				btnPhoto.value = e.media;
				anImageView.image = e.media;
				btnPhoto.title = '[ Photo Selected ]';
			},
			cancel : function() {
				btnPhoto.value = null;
				btnPhoto.title = 'Select Photo...';
			},
			error : function(err) {
				Ti.API.error(err);
				btnPhoto.value = null;
				btnPhoto.title = 'Select Photo...';
			}
		});
	});
	win.add(btnPhoto);

	var btnSubmit = Ti.UI.createButton({
		title : 'Submit'
	});
	btnSubmit.addEventListener('click', function(e) {

		var c = Titanium.Network.createHTTPClient({
			onload : function(e) {

				Ti.API.info('this.responseText' + this.responseText);
				//json = JSON.stringify(this.responseText);
				alert(this.responseText);
			},
			onerror : function(e) {
				alert(JSON.stringify(e));
			}
		});
		c.open('POST', form_url);
		Ti.API.info('form_url ' + encodeURI(form_url));
		c.setRequestHeader('Content-Type', 'multipart/form-data');
		c.send({
			userid : 81,
			image : btnPhoto.value
		});
	});
	win.add(btnSubmit);
	var anImageView = Ti.UI.createImageView({
		 
	});
	anImageView.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	win.add(anImageView);
	win.open();

})();


/*
 * <?php

$data = array();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $userid = $_POST['userid'];
    $allowedExts = array("gif", "jpeg", "jpg", "png");
    $temp = explode(".", $_FILES["image"]["name"]);
    $extension = end($temp);
    if ((($_FILES["image"]["type"] == "image/gif") || ($_FILES["image"]["type"] == "image/jpeg") || ($_FILES["image"]["type"] == "image/jpg") || ($_FILES["image"]["type"] == "image/pjpeg") || ($_FILES["image"]["type"] == "image/x-png") || ($_FILES["image"]["type"] == "image/png")) && in_array($extension, $allowedExts)) {
        if ($_FILES["image"]["error"] > 0) {
            $data['error_code'] = $_FILES["image"]["error"];
        } else {
            $data['name'] = $_FILES["image"]["name"];
            $data['type'] = $_FILES["image"]["type"];
            $data['size'] = $_FILES["image"]["size"];
            $data['tmp_name'] = $_FILES["image"]["tmp_name"];

            $image_name = uniqid() . $_FILES["image"]["name"];
            move_uploaded_file($_FILES["image"]["tmp_name"], "upload/" . $image_name);
            $data['new_name'] = $image_name;
            
            
            
        }
    } else {
        $data['file'] = 'Invalid file';
    }
}

echo json_encode($data);
 */