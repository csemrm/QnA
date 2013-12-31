//ListView Window create here

function listOrder() {

	var win = Ti.UI.createWindow({
		backgroundColor : '#000',
		navBarHidden : false,
		title : 'List View Row'
	});

	// Create a Button.
	var Order = Ti.UI.createButton({
		title : 'AS/DS_Order',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 10,
		left : 10,
		toggle : false
	});

	win.add(Order);

	var idOrder = Ti.UI.createButton({
		title : 'id_Order',
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		top : 10,
		right : 10,
		toggle : false
	});

	win.add(idOrder);

	// create a list VIew
	var listView = Ti.UI.createListView({
		top : 60,

	});

	var sections = [];

	//create a section
	var fruitSection = Ti.UI.createListSection({
		headerTitle : 'Fruits'
	});

	// create a data array
	var fruitDataSet = [{
		properties : {
			title : 'Carrots-5',
			itemId : '5'
		}
	}, {
		properties : {
			title : 'Apple-3',
			itemId : '3'
		}
	}, {
		properties : {
			title : 'Banana-2',
			itemId : '2'
		}
	}, {
		properties : {
			title : 'Potatoes-1',
			itemId : '1'
		}
	}, {
		properties : {
			title : 'Mango-4',
			itemId : '4'
		}
	}, {
		properties : {
			title : 'Orange-7',
			itemId : '7'
		}
	}, {
		properties : {
			title : 'Grapes-9',
			itemId : '9'
		}
	}, {
		properties : {
			title : 'Date-8',
			itemId : '8'
		}
	}, {
		properties : {
			title : 'Palm-6',
			itemId : '6'
		}
	}];
	fruitSection.setItems(fruitDataSet);
	sections.push(fruitSection);

	var sort_data = [];
	var ac_data = [];
	var dc_data = [];
	for (var i = 0; i < fruitDataSet.length; i++) {

		sort_data.push(fruitDataSet[i].properties.title);
	};

	sort_data.sort();
	//Listener for click events.
	Order.addEventListener('click', function(e) {

		if (e.source.toggle == true) {

			//tableView.setData([]);
			dc_data = [];

			for (var i = sort_data.length - 1; i >= 0; i--) {
				dc_data.push({
					properties : {
						title : sort_data[i]
					}
				});

			};
			fruitSection.setItems(dc_data);
			sections.push(fruitSection);

			e.source.toggle = false;

		} else {
			//tableView.setData([]);
			ac_data = [];

			for (var i = 0; i < sort_data.length; i++) {
				ac_data.push({
					properties : {
						title : sort_data[i]
					}
				});

			};
			fruitSection.setItems(ac_data);
			sections.push(fruitSection);
			e.source.toggle = true;
		}

	});

	var sort_id = [];
	var ac_id = [];
	var dc_id = [];

	var id_length = fruitDataSet.length;
	for (var i = 0; i < fruitDataSet.length; i++) {

		sort_id.push(fruitDataSet[i].properties.itemId + fruitDataSet[i].properties.title);
	};

	sort_id.sort();

	idOrder.addEventListener('click', function(e) {

		if (e.source.toggle == true) {

			//tableView.setData([]);
			dc_id = [];

			for (var i = sort_id.length - 1; i >= 0; i--) {
				dc_id.push({
					properties : {
						title : sort_id[i]
					}
				});

			};
			fruitSection.setItems(dc_id);
			sections.push(fruitSection);

			e.source.toggle = false;

		} else {
			//tableView.setData([]);
			ac_id = [];

			for (var i = 0; i < sort_id.length; i++) {
				ac_id.push({
					properties : {
						title : sort_id[i]
					}
				});

			};
			fruitSection.setItems(ac_id);
			sections.push(fruitSection);
			e.source.toggle = true;
		}

	});

	listView.sections = sections;
	win.add(listView);
	return win;

}

module.exports = listOrder; 