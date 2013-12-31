//This is the second window

function window2() {
	var window2 = Ti.UI.createWindow({
		title : 'view Test',
		backgroundColor : 'gray',
	});

	//Menu view create here

	var menuView = Ti.UI.createView({
		backgroundColor : '#336699',
		top : 0,
		left : 0,
		width : 300,
		zIndex : 5
	});

	var menu_view = require('ui/common/Menu');
	menu_view.menu(menuView);
	window2.add(menuView);

	// Mainview create here
	var mainView = Ti.UI.createView({
		backgroundColor : 'gray',
		height : Ti.UI.FILL,
		width : 500,
		zIndex : 7

	});

	window2.add(mainView);

	// BottomView create here
	var bottomView = Ti.UI.createView({
		bottom : 0,
		height : 70,
		width : Ti.UI.FILL,
		backgroundColor : '#336699'
	});

	mainView.add(bottomView);
	// Create a Button.
	var menu = Ti.UI.createButton({
		title : 'menu',
		height : 50,
		width : 100,
		left : 10,
		toggle : false
	});

	//add menu button listener
	menu.addEventListener('click', function(e) {
		if (e.source.toggle == true) {
			mainView.animate({
				left : 0,
				duration : 300,
				curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
			});
			e.source.toggle = false;

		} else {
			mainView.animate({
				left : 300,
				duration : 300,
				curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
			});
			e.source.toggle = true;

		}

	});

	// Add to the parent view.
	bottomView.add(menu);

	return window2;

}

module.exports = window2; 