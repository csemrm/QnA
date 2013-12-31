var db = Titanium.Database.open('photos');
db.execute("CREATE TABLE if not exists  photos (id  INTEGER primary key autoincrement not null,title  TEXT(20) NOT NULL, location  TEXT)");

/*db.execute("INSERT  INTO photos VALUES (1,   'eggplant', '2013-03-06')");
 db.execute("INSERT  INTO photos VALUES (2,   'carrot', '2013-03-06')");
 db.execute("INSERT  INTO photos VALUES (3,    'peas', '2013-03-06')");
 */
db.close();

function insertdb(title, location) {
	var db = Titanium.Database.open('photos');

	db.execute("INSERT  INTO photos (title, location) VALUES (?, ?)", title, location);

	db.close();
}

var currentWin = Titanium.UI.createWindow({
	backgroundColor : '#fff',
	fullscreen : true,
	layout : 'vertical'
});

var aButton = Ti.UI.createButton({
	title : 'open photo',

});

// Create an ImageView.
var anImageView = Ti.UI.createImageView({

	width : 50,
	height : 50,
	top : 0,
});
anImageView.addEventListener('load', function() {

});

// Add to the parent view.
currentWin.add(anImageView);

aButton.addEventListener('click', function() {

	Ti.Media.openPhotoGallery({
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
		success : function(e) {
			anImageView.image = e.media;

			var time = new Date();

			var name = 'name' + time.getTime() + '.png';
			var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, name);
			f.write(e.media);
			Ti.API.info('f.nativePath' + f.nativePath);
			insertdb(name, f.nativePath);
			aTableView.setData(getData());
		},
		cancel : function() {
		},
		error : function(err) {
		}
	});

});

currentWin.add(aButton);

function getData() {
	var data = [];
	var db = Titanium.Database.open('photos');
	var result = db.execute('SELECT * FROM photos ');

	while (result.isValidRow()) {

		Ti.API.info('result' + result.fieldByName('location'));

		data.push({
			title : result.fieldByName('title'),
			leftImage : result.fieldByName('location'),
		});
		result.next();
	}
	result.close();
	db.close();

	return data;
}

// Create a TableView.
var aTableView = Ti.UI.createTableView();

aTableView.setData(getData());

currentWin.add(aTableView);

currentWin.open();
