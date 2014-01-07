Ti.UI.setBackgroundColor('#000');
var win = Ti.UI.createWindow({
	backgroundColor : 'black',
	exitOnClose : true,
	fullscreen : false,
	title : 'TableView Demo'
});

// Create scroll view

var view = Titanium.UI.createScrollView({
	width : '100%',
	height : '400',
	contentHeight : 1000,
	backgroundColor : 'white'
});

// generate random number, used to make each row appear distinct for this example
function randomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

var tableData = [];

for (var i = 1; i <= 180; i++) {
	var row = Ti.UI.createTableViewRow({
		className : 'forumEvent', // used to improve table performance
		selectedBackgroundColor : 'white',
		rowIndex : i, // custom property, useful for determining the row during events
		height : 110,
		touchEnabled : false
	});
	// Create label
	var labelUserName = Ti.UI.createLabel({
		color : '#576996',
		text : 'Fred Smith ' + i,
		left : 70,
		top : 6,
		width : 200,
		height : 30
	});
	row.add(labelUserName);
	// create imageview
	var imageCalendar = Ti.UI.createImageView({
		image : 'KS_nav_ui.png',
		left : 70,
		bottom : 2,
		width : 32,
		height : 32
	});
	row.add(imageCalendar);

	tableData.push(row);
}
// Create table view
var tableView = Ti.UI.createTableView({
	backgroundColor : 'white',
	data : tableData
});

// Add to parent
view.add(tableView);
win.add(view);
win.open(); 