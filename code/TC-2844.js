// Create a base window
var bigWindow = Titanium.UI.createWindow({
	backgroundColor : '#fff'
});
// Put a button on it
var button = Ti.UI.createButton({
	title : 'This is my button',
	top : 80,
	left : 10,
	right : 10
});
bigWindow.add(button);

// Open it
bigWindow.open();

// When the button is clicked, open another window.  This window will
// hide all the accessibility voice over of the button.
//
// The smallWindow is blocking out the whole screen in terms of accessibility
// not just the area that it covers.  Click events go through the window to the
// base window, but not accessibility information :(
//
// NOTE: This is also true if the smallWindow is open and hidden!

var smallWindow = Ti.UI.createWindow({
	accessibilityLabel : 'Small Window',
	backgroundColor : '#F00',
	bottom : 0,
	height : 80
});
var status = true;
button.addEventListener('click', function(event) {
	if (status) {

		smallWindow.open();
		status = false;
	} else {
		smallWindow.close();
		status = true;
	}
});
