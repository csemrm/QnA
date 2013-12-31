var rightButton = Ti.UI.createButton({
	title : 'images/apple.png',
	width : 40,
	height : 40,
});
var win2 = Titanium.UI.createWindow({
	backgroundColor : 'red',
	title : 'Red Window',
	rightNavButton : rightButton
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
	window : win2
});

var leftButton = Ti.UI.createImageView({
	image : 'images/apple.png',
	width : 40,
	height : 40,
});

var win3 = Titanium.UI.createWindow({
	backgroundColor : 'blue',
	titleImage : 'Blue Window',
	//backButtonTitleImage : 'images/apple.png',
	rightNavButton : leftButton
});

var button = Titanium.UI.createButton({
	title : 'Open Blue Window'
});
button.addEventListener('click', function() {
	win1.openWindow(win3, {
		animated : true
	});
});

win2.add(button);
var button2 = Titanium.UI.createButton({
	title : 'Close Blue Window',
	bottom : 0,
});
button2.addEventListener('click', function() {
	win1.closeWindow(win3, {
		animated : false
	});
});

win3.add(button2);

win1.open();
