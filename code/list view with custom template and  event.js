var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

// Create a custom template that displays an image on the left,
// then a title next to it with a subtitle below it.
var myTemplate = {
	childTemplates : [{// Image justified left
		type : 'Ti.UI.ImageView', // Use an image view for the image
		bindId : 'pic', // Maps to a custom pic property of the item data
		properties : {// Sets the image view  properties
			width : '50dp',
			height : '50dp',
			left : 0
		}

	}],
	events : {
		load : startAnimate,
		click : toggleAnimate
	}
};

function startAnimate(e) {
	Ti.API.info('clciked!');
	alert('start');
	e.source.start();
}

function toggleAnimate(e) {
	Ti.API.info('clciked!');
	alert('start');
	e.source.start();
}

var listView = Ti.UI.createListView({
	templates : {
		'template' : myTemplate
	},
	defaultItemTemplate : 'template'
});
var sections = [];

var fruitSection = Ti.UI.createListSection();
var fruitDataSet = [{

	pic : {
		images : ['/images/apple.png', '/images/arrow-down.png', '/images/arrow-up.png', '/images/paint.png', '/images/radio_unclick.png']
	}

}];
fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

listView.setSections(sections);
win.add(listView);
win.open();
