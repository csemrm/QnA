Ti.UI.setBackgroundColor('#000');
var win = Ti.UI.createWindow({
	backgroundColor : 'black',
	exitOnClose : true,
	fullscreen : false,
	title : 'TableView Demo'
});

// generate random number, used to make each row appear distinct for this example
function randomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var tableData = [];
var section1 = Ti.UI.createTableViewSection({
	headerTitle : 'Section 1'
});
tableData.push(section1);
for (var i = 1; i <= 2; i++) {

	var row = Ti.UI.createTableViewRow({
		className : 'forumEvent', // used to improve table performance
		selectedBackgroundColor : 'white',
		rowIndex : i, // custom property, useful for determining the row during events
		height : 60
	});

	var imageAvatar = Ti.UI.createImageView({
		image : IMG_BASE + 'custom_tableview/user.png',
		left : 10,
		top : 5,
		width : 50,
		height : 50
	});
	row.add(imageAvatar);

	var labelUserName = Ti.UI.createLabel({
		color : '#576996',
		font : {
			fontFamily : 'Arial',
			fontSize : defaultFontSize + 6,
			fontWeight : 'bold'
		},
		text : 'Fred Smith ' + i,
		left : 70,
		top : 6,
		width : 200,
		height : 30
	});
	row.add(labelUserName);

	section1.add(row);
}
var section2 = Ti.UI.createTableViewSection({
	headerTitle : 'Section 2'
});
tableData.push(section2);
for (var i = 1; i <= 2; i++) {

	var row = Ti.UI.createTableViewRow({
		className : 'forumEvent', // used to improve table performance
		selectedBackgroundColor : 'white',
		rowIndex : i, // custom property, useful for determining the row during events
		height : 110
	});

	var imageAvatar = Ti.UI.createImageView({
		image : IMG_BASE + 'custom_tableview/user.png',
		left : 10,
		top : 5,
		width : 50,
		height : 50
	});
	row.add(imageAvatar);

	var labelUserName = Ti.UI.createLabel({
		color : '#576996',
		font : {
			fontFamily : 'Arial',
			fontSize : defaultFontSize + 6,
			fontWeight : 'bold'
		},
		text : 'Fred Smith ' + i,
		left : 70,
		top : 6,
		width : 200,
		height : 30
	});
	row.add(labelUserName);

	section2.add(row);
}
var tableView = Ti.UI.createTableView({
	backgroundColor : 'white',
	data : tableData
});

win.add(tableView);
win.open();

