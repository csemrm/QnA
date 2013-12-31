var loginWin = Ti.UI.createWindow({
	exitOnClose : true,
	navBarHidden : false,
	title : 'Login',
	backgroundColor : '#eee',
});
btn2 = Ti.UI.createButton({
	title : 'Log in'
});
loginWin.add(btn2);

//var tabGroup = new

loginWin.addEventListener('click', function() {

	tabGroupOpen();
});

loginWin.addEventListener('open', function() {

	//tabGroupOpen();
});

loginWin.open();

function tabGroupOpen() {
	var tabGroup = Titanium.UI.createTabGroup();

	//
	// create base UI tab and root window
	//
	var win1 = Titanium.UI.createWindow({
		title : 'Tab 1',
		backgroundColor : '#fff'
	});

	var tab1 = Titanium.UI.createTab({
		title : 'Tab 1',
		window : win1
	});

	var btn = Ti.UI.createButton({
		title : 'Log out'
	});
	btn.addEventListener('click', function() {
		tabGroup.close();
	});
	win1.add(btn);

	//
	// create controls tab and root window
	//
	var win2 = Titanium.UI.createWindow({
		title : 'Tab 2',
		backgroundColor : '#fff'
	});
	var tab2 = Titanium.UI.createTab({
		title : 'Tab 2',
		window : win2
	});

	var label2 = Titanium.UI.createLabel({
		color : '#999',
		text : 'I am Window 2',
		font : {
			fontSize : 20,
			fontFamily : 'Helvetica Neue'
		},
		textAlign : 'center',
		width : 'auto'
	});

	win2.add(label2);

	//
	//  add tabs
	//
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);

	tabGroup.open();
}
