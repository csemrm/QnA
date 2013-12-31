//this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#fff');

var win = Titanium.UI.createWindow({
});

var circle = Ti.UI.createImageView({
	//top : 100,

	//image : 'wheel.png',
	width : 389.5,
	height : 387.5,
	top : 50,
	// borderColor : '#1a0033',
	//top : -350
	/*width : 300,
	 height : 300,
	 borderRadius : 150,
	 borderColor : '#1a0033',
	 backgroundColor : 'white',*/
});

var numberArray = [1, 2, 3, 4, 5, 6];
var angle = 360 / 8;
var rotation = 90;
rotation = 0;
var innerView = [];
for (var i = 0; i < 6; i++) {
	var sector = Ti.UI.createView({
		backgroundImage : 'Other_Tab.png',
		//backgroundColor : 'yellow',
		// borderColor: 'green',
		//width : 170,
		//height : 150,
		id : numberArray[i],
		width : 207,
		height : 190,
		top : 0
	});

	innerView[i] = Ti.UI.createView({
		backgroundColor : 'transparent',
		//borderColor : '#1a0033',
		name : 'innerView',
		//width : 170,
		//height : 150,
		id : numberArray[i],
		zIndex : 100,
		width : 100,
		height : 60,
		top : 20
	});
	sector.add(innerView[i]);
	circle.add(sector);

	if (i == 0)
		rotation = rotation;
	else
		//rotation = rotation + 60 + 5;
		rotation = 60 * i;
	var matrix = Ti.UI.create2DMatrix();
	matrix = matrix.rotate(rotation);
	var a = Ti.UI.createAnimation({
		transform : matrix,
		duration : 1000,
		autoreverse : false,
		repeat : 0
	});

	a.anchorPoint = {
		x : 0.5,
		y : 0.5
	};

	sector.anchorPoint = {
		x : 0.5,
		y : 1
	};

	sector.animate(a);

	// Create a Label.
	var numberLabel = Ti.UI.createLabel({
		text : numberArray[i],
		color : 'blue',
		font : {
			fontSize : 26
		},
		textAlign : 'center',
		top : 10
	});

	// Add to the parent view.
	//sector.add(numberLabel);
	//innerView.id = numberLabel.text;
	innerView[i].add(numberLabel);

	innerView[i].addEventListener('click', function(e) {
		 
		//  alert(e.source.getParent().id);
		if (e.source.name == 'innerView')
			e.source.backgroundColor = 'red';
		else if (in_array(numberArray, e.source.text)) {
			 
			var inner = e.source.getParent();

			Ti.API.info('inner.name.backgroundColor' + inner.id);
			innerView[inner.id - 1].backgroundColor = 'red';
		}

	});

	sector.addEventListener('click', function(e) {
		//alert('so far so good');
		//if(e.source.name=='innerView')
		//alert(e.source.id);
		//alert(e.source.getParent().id);

	});

}

var old = 0;
var diff = 0;
var current = 0;

circle.addEventListener('touchstart', function(e) {
	var conv = e.source.convertPointToView({
		x : e.x,
		y : e.y
	}, win);
	//var newAngle = Math.atan2(conv.y - 228, 158 - conv.x) * -(180 / Math.PI);
	var newAngle = Math.atan2(conv.y - 190, 188 - conv.x) * -(180 / Math.PI);

	diff = (newAngle - old);
});

circle.addEventListener('touchmove', function(e) {
	var conv = e.source.convertPointToView({
		x : e.x,
		y : e.y
	}, win);
	var newAngle = Math.atan2(conv.y - 228, 158 - conv.x) * -(180 / Math.PI);
	//where 228 is the centerY of the wheel and 158 is the centerX of the wheel
	current = (newAngle - diff);

	var t = Ti.UI.create2DMatrix().rotate(current);
	circle.transform = t;
});

circle.addEventListener('touchend', function(e) {
	old = current;
});
win.add(circle);

win.open();

in_array = function(array, id) {

	for (var i = 0; i < array.length; i++) {

		if (array[i] == id) {

			return true;
		}
	}
	return false;
};

