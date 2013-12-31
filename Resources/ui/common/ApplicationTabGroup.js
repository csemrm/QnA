function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs

	var title1 = 'When the tab name is too long, the name runs over to the next tab';
	Ti.API.info('title1.length' + title1.length);
	var length = 3;
	title1 = title1.length > length ? title1.substring(0, length) + '..' : title1;

	var title2 = 'name runs over to the next tab';
	var win1 = Ti.UI.createWindow({
		title : title1,
		backgroundColor : '#fff'
	});

	var win2 = Ti.UI.createWindow({
		title : title2,
		backgroundColor : '#fff'
	});

	var tab1 = Ti.UI.createTab({
		title : title1,
		icon : '/images/KS_nav_views.png',
		window : win1
	});
	win1.containingTab = tab1;

	self.addTab(tab1);

	var tab2 = Ti.UI.createTab({
		title : title2,
		icon : '/images/KS_nav_views.png',
		window : win2
	});
	win2.containingTab = tab2;

	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
