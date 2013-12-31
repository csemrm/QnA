// This is the first window
 
function window1() {
	var window1 = Ti.UI.createWindow({
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
 
	var menu_view = require('ui/common/menu');
	menu_view.menu(menuView);
	window1.add(menuView);
	
	//Main View create here
	var mainView = Ti.UI.createView({
		backgroundColor : 'gray',
		height : Ti.UI.FILL,
		width : 500,
		zIndex : 7
 
	});
 
	window1.add(mainView);
 
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
 
	return window1;
 
}
 
module.exports = window1;