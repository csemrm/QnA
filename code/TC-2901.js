var win = Ti.UI.createWindow({
	navBarHidden : true,
	exitOnClose : true,
});
 
var tableView = Ti.UI.createTableView({
	width : Ti.UI.FILL,
	backgroundColor : '#fff',
	height : Ti.UI.FILL,

});
win.add(tableView);

var d = ['Account', 'About', 'milon', 'fdf'];

for (var i = 0, j = d.length; i < j; i++) {

	var row = Ti.UI.createTableViewRow({
		height : 50,
		hasChild : true,
		leftImage : '/images/arrow.png',
		title : d[i],
		color : '#333333',
		selectedColor : '#2f2f2f',
		className : 'settingsRow'
	});
	tableView.appendRow(row);
}

win.open();
