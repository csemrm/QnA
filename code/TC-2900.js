var win = Ti.UI.createWindow({
	navBarHidden : true,
	exitOnClose : true,
});

var pageView = Ti.UI.createView({
	width : Ti.UI.FILL,
	height : Ti.UI.FILL,
	backgroundColor : '#FFFFFF'
});

var text = Ti.UI.createLabel({
	width : Ti.UI.FILL,
	height : Ti.UI.SIZE,
	top : 100,
	left : 49,
	right : 10,
	textAlign : "left",
	text : "some text",
	opacity : 1,
	backgroundColor : '#FFFFFF'
});
pageView.add(text);

win.open();
