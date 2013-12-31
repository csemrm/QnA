//TableView window create here
 
function tableView() {
	var win = Ti.UI.createWindow({
		backgroundColor : '#000',
		title : 'Table View Row',
		navBarHidden : false
	});
 
	// Create a Button.
	var tableOrder = Ti.UI.createButton({
		title : 'AS/DS_Order',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 10,
		left : 10,
		toggle : false
	});
 
	var idOrder = Ti.UI.createButton({
		title : 'id_Order',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 10,
		right : 10,
		toggle : false
	});
 
	// Add to the parent view.
	win.add(tableOrder);
	win.add(idOrder);
 
	var tableData = [{
		title : "Banana-3",
		id : '3'
	}, {
		title : "Apple-4",
		id : '4'
	}, {
		title : "Carrot-5",
		id : '5'
	}, {
		title : "Potatoe-1",
		id : '1'
	}, {
		title : "Mango-2",
		id : '2'
	}, {
		title : "Orange-6",
		id : '6'
	}, {
		title : "Date-8",
		id : '8'
	}, {
		title : "Plam-7",
		id : '7'
	}];
 
	// Create a TableView.
	var tableView = Ti.UI.createTableView({
		top : 70,
		data : tableData
	});
 
	var sort_data = [];
	var ac_data = [];
	var dc_data = [];
 
	var data_length = tableData.length;
	for (var i = 0; i < data_length; i++) {
		sort_data.push(tableData[i].title);
	};
 
	sort_data.sort();
 
	//Listener for click events.
	tableOrder.addEventListener('click', function(e) {
 
		if (e.source.toggle == true) {
 
			dc_data = [];
			for (var i = sort_data.length - 1; i >= 0; i--) {
 
				dc_data.push({
					title : sort_data[i]
				});
			};
 
			tableView.setData(dc_data);
			e.source.toggle = false;
		} else {
 
			ac_data = [];
 
			for (var i = 0; i < sort_data.length; i++) {
				ac_data.push({
					title : sort_data[i]
				});
			};
 
			tableView.setData(ac_data);
			e.source.toggle = true;
		}
 
	});
 
	var sort_id = [];
	var ac_id = [];
	var dc_id = [];
 
	var id_length = tableData.length;
	for (var i = 0; i < id_length; i++) {
		sort_id.push(tableData[i].id + tableData[i].title);
 
	};
 
	sort_id.sort();
 
	idOrder.addEventListener('click', function(e) {
 
		if (e.source.toggle == true) {
 
			dc_id = [];
			for (var i = sort_id.length - 1; i >= 0; i--) {
 
				dc_id.push({
					title : sort_id[i]
				});
			};
 
			tableView.setData(dc_id);
			e.source.toggle = false;
		} else {
 
			ac_id = [];
 
			for (var i = 0; i < sort_id.length; i++) {
				ac_id.push({
					title : sort_id[i]
				});
			};
 
			tableView.setData(ac_id);
			e.source.toggle = true;
		}
 
	});
 
	win.add(tableView);
 
	return win;
}
 
module.exports = tableView;