var win = Titanium.UI.createWindow({
	top : 0,
	left : 0,

	backgroundColor : '#fff',
});

var scrollView = Ti.UI.createScrollView({
	contentWidth : 'auto',
	contentHeight : 'auto',
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,

});

win.add(scrollView);
// generate random number, used to make each row appear distinct for this example
function randomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var tableData = [];

for (var i = 1; i <= 20; i++) {
	var row = Ti.UI.createTableViewRow({
		className : 'forumEvent', // used to improve table performance
		selectedBackgroundColor : 'white',
		rowIndex : i, // custom property, useful for determining the row during events
		height : 110,
		layout : 'horizontal',
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
		left : 10,
		top : 10,
		width : 200,
		height : 30
	});
	row.add(labelUserName);

	var labelDetails = Ti.UI.createLabel({
		color : '#222',
		font : {
			fontFamily : 'Arial',
			fontSize : defaultFontSize + 2,
			fontWeight : 'normal'
		},
		text : 'Replied to post with id ' + randomInt(1000) + '.',
		left : 10,
		top : 10,
		width : 200,
	});
	row.add(labelDetails);

	


	var labelDate = Ti.UI.createLabel({
		color : '#999',
		font : {
			fontFamily : 'Arial',
			fontSize : defaultFontSize,
			fontWeight : 'normal'
		},
		text : 'on ' + randomInt(30) + ' Nov 2012',
		left : 10,
		top : 10,
		width : 200,
		height : 20
	});
	row.add(labelDate);

	tableData.push(row);
}

var tableView = Ti.UI.createTableView({
	backgroundColor : 'white',
	data : tableData,
	width : 700,
});

scrollView.add(tableView);
win.open();

