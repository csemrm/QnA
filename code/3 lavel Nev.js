var win2 = Titanium.UI.createWindow({
	backgroundColor : 'red',
	title : 'Red Window'
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
	window : win2
});

var leftButton = Ti.UI.createImageView({
	image : 'images/arrow.png',
	width : 40,
});

var win3 = Titanium.UI.createWindow({
	backgroundColor : 'blue',
	title : 'Blue Window',
	leftNavButton : leftButton
});

var win3 = Titanium.UI.createWindow({
	backgroundColor : 'blue',
	title : 'Blue Window'
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
	//win3.close() will also work!!
});

win3.add(button2);

var button3 = Titanium.UI.createButton({
	title : 'Open White Window'
});

win3.add(button3);

var win4 = Titanium.UI.createWindow({
	backgroundColor : 'white',
	title : 'White Window'
});

button3.addEventListener('click', function() {
	win1.openWindow(win4, {
		animated : true
	});
});
var button4 = Titanium.UI.createButton({
	title : 'Close White Window'
});
button4.addEventListener('click', function() {
	win1.closeWindow(win4, {
		animated : false
	});
	//win3.close() will also work!!
});
win4.add(button4);
win1.open();
