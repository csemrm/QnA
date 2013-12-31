var win = Ti.UI.createWindow({
	backgroundColor : '#fff'
});

var popover = Ti.UI.iPad.createPopover({
	width : 350,
	height : 300,
	title : 'Test',
	navBarHidden : true,
});

var view = Ti.UI.createView({
	backgroundColor : "#fff",
	top : 0,
	width : Ti.UI.FILL,
	height : Ti.UI.FILL
});
popover.add(view);

var aButton = Ti.UI.createButton({
	title : 'aButton',
});

aButton.addEventListener('click', function() {
	popover.show({
		view : aButton
	});
});

win.add(aButton);

win.open();
