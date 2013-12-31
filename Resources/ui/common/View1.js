exports.add = function(v) {

var passChange = Ti.UI.createLabel({
	text : 'Change Password',
	color : 'red',
	font : {fontSize:30},
	height : Titanium.UI.SIZE,
	width :Titanium.UI.SIZE,
	top : 10,
	
});

v.add(passChange);
// Create a TextField.
var name = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter name',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

name.addEventListener('return', function(e) {
	pass.blur();
	alert('Input was: ' + name.value);
});

v.add(name);


// Create a TextField.
var pass = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter password',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
pass.addEventListener('return', function(e) {
	pass.blur();
	alert('Input was: ' + pass.value);
});

// Add to the parent view.
v.add(pass);


// Create a TextField.
var re_pass = Ti.UI.createTextField({
	height : Titanium.UI.SIZE,
	top : 10,
	width : Titanium.UI.FILL,
	hintText : 'Enter repassword',
	//softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

// Listen for return events.
re_pass.addEventListener('return', function(e) {
	re_pass.blur();
	alert('Input was: ' + re_pass.value);
});

// Add to the parent view.
v.add(re_pass);


};



