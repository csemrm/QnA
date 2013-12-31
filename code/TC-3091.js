var win = Ti.UI.createWindow();
var btn = Ti.UI.createButton();
win.setLeftNavButton(btn);

btn.addEventListener('click', function(e) {
	win.close();
});

var picker = Ti.UI.createPicker({
	type : Ti.UI.PICKER_TYPE_DATE,
	minDate : new Date(2009, 0, 1),
	maxDate : new Date(2014, 11, 31),
	value : new Date(2014, 3, 12),
	visible : true
});

var view = Ti.UI.createView({
	bottom : -279,
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE
});

var slide_in = Titanium.UI.createAnimation({
	bottom : 0,
	duration : 200,

});
var slide_out = Titanium.UI.createAnimation({
	bottom : -304,
	duration : 200
});

view.addEventListener("postlayout", function(e) {
	Ti.API.info(e.source.rect.width);
	Ti.API.info(e.source.rect.height);
});

view.add(picker);
win.add(view); 

win.open();
