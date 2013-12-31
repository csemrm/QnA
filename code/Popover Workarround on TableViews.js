var win = Ti.UI.createWindow();

var section = Ti.UI.createTableViewSection();
var addRow = function(obj) {
	var row = Ti.UI.createTableViewRow({
		title : obj.title || ''
	});
	var fake = Ti.UI.createView({
		backgroundColor : 'transparent',
		height : 24,
		touchEnabled : true,
		width : 24
	});

	row.fake = fake;
	row.add(fake);
	return row;
};
var data = [{
	title : 'One'
}, {
	title : 'Two'
}, {
	title : 'Three'
}, {
	title : 'Four'
}];
var intRow = 0, intRows = data.length, row, rows = [];
for ( intRow = 0; intRow < intRows; intRow = intRow + 1) {
	row = addRow(data[intRow]);
	rows.push(row);
}

section.add(rows);
var table = Ti.UI.createTableView({

	data : [section]
});

table.addEventListener('click', function(e) {

	Ti.API.info('You clicked row ' + e.index);
	Ti.API.info('source ' + e.source);

	Ti.API.info(JSON.stringify(e.row));

	var popover = Ti.UI.iPad.createPopover({
		width : 250,
		height : 100,
		title : 'a POpover',

	});

	//popover.show({view:e.source});
	popover.show({
		view : e.row.fake
	});

});

win.add(table);

var nav = Ti.UI.iPhone.createNavigationGroup({
	window : win
});

var splitwin = Ti.UI.iPad.createSplitWindow({
	detailView : Ti.UI.createWindow({
		backgroundColor : 'red'
	}),
	masterView : nav,

	orientationModes : [Ti.UI.LANDSCAPE_LEFT],
});

splitwin.open();
